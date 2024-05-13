
import React from 'react';
import { useHistory } from 'react-router-dom';

const TimeUpScreen: React.FC = () => {
  const history = useHistory();

  const handleRetry = () => {
    history.push('/');
  };

  return (
    <div>
      <h1>Time's Up!</h1>
      <p>Sorry, you ran out of time.</p>
      <button onClick={handleRetry}>Retry</button>
    </div>
  );
};

export default TimeUpScreen;
