// QuestionInterface.tsx
import React, { useState, useEffect } from 'react';
import AudioPlayer from './AudioPlayer';
import Timer from '../Timer';
import  {useHistory } from 'react-router-dom';
import {submitAnswer}  from './api';

interface Question {
  id: number;
  audioUrl: string;
  options: string[];
}

interface Props {
  questions: Question[];
}

const QuestionInterface: React.FC<Props> = ({ questions }) => {
  const history = useHistory();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [timerExpired, setTimerExpired] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerExpired(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, [currentQuestionIndex]);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleAnswerSubmit = () => {
    submitAnswer(currentQuestion.id, selectedOption);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption('');
    } else {
      history.push('/quiz-completed');
    }
  };

  return (
    <div>
      <AudioPlayer url={currentQuestion.audioUrl} />
      <Timer expired={timerExpired} />
      <div>
        {currentQuestion.options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option${index}`}
              name="options"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionSelect(option)}
            />
            <label htmlFor={`option${index}`}>{option}</label>
          </div>
        ))}
      </div>
      <button onClick={handleAnswerSubmit} disabled={!selectedOption}>Submit</button>
    </div>
  );
};

export default QuestionInterface;
