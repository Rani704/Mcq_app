// EditQuestionScreen.tsx
import React, { useState } from 'react';

interface Question {
  id: number;
  audioUrl: string;
  options: string[];
}

const EditQuestionScreen: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const addQuestion = () => {
    const newQuestion: Question = {
      id: questions.length + 1,
      audioUrl: '',
      options: [],
    };
    setQuestions([...questions, newQuestion]);
  };

  const removeQuestion = (id: number) => {
    setQuestions(questions.filter((question) => question.id !== id));
  };

  const handleAudioUrlChange = (id: number, value: string) => {
    setQuestions(
      questions.map((question) =>
        question.id === id ? { ...question, audioUrl: value } : question
      )
    );
  };

  const handleOptionChange = (id: number, index: number, value: string) => {
    setQuestions(
      questions.map((question) =>
        question.id === id
          ? {
              ...question,
              options: question.options.map((option, i) =>
                i === index ? value : option
              ),
            }
          : question
      )
    );
  };

  const addOption = (id: number) => {
    setQuestions(
      questions.map((question) =>
        question.id === id ? { ...question, options: [...question.options, ''] } : question
      )
    );
  };

  const removeOption = (id: number, index: number) => {
    setQuestions(
      questions.map((question) =>
        question.id === id
          ? { ...question, options: question.options.filter((_, i) => i !== index) }
          : question
      )
    );
  };

  const saveQuestions = () => {
    
    console.log('Saved questions:', questions);
  };

  return (
    <div>
      <h1>Edit Questions</h1>
      {questions.map((question) => (
        <div key={question.id}>
          <h2>Question {question.id}</h2>
          <label htmlFor={`audioUrl${question.id}`}>Audio URL:</label>
          <input
            type="text"
            id={`audioUrl${question.id}`}
            value={question.audioUrl}
            onChange={(e) => handleAudioUrlChange(question.id, e.target.value)}
          />
          <button onClick={() => addOption(question.id)}>Add Option</button>
          <button onClick={() => removeQuestion(question.id)}>Remove Question</button>
          {question.options.map((option, index) => (
            <div key={index}>
              <label htmlFor={`option${index}`}>Option {index + 1}:</label>
              <input
                type="text"
                id={`option${index}`}
                value={option}
                onChange={(e) => handleOptionChange(question.id, index, e.target.value)}
              />
              <button onClick={() => removeOption(question.id, index)}>Remove Option</button>
            </div>
          ))}
        </div>
      ))}
      <button onClick={addQuestion}>Add Question</button>
      <button onClick={saveQuestions}>Save</button>
    </div>
  );
};

export default EditQuestionScreen;
