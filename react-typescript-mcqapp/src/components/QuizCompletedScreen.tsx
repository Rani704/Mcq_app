
import React from 'react';

interface Props {
  totalScore: number;
}

const QuizCompletedScreen: React.FC<Props> = ({ totalScore }) => {
  return (
    <div>
      <h1>Quiz Completed!</h1>
      <p>Total Score: {totalScore}</p>
    
    </div>
  );
};

export default QuizCompletedScreen;
