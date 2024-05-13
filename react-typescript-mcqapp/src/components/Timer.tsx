
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

interface Props {
  expired: boolean;
}

const Timer: React.FC<Props> = ({ expired }) => {
  const [timeLeft, setTimeLeft] = useState(15);
  const history = useHistory();

  useEffect(() => {
    if (!expired) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      if (timeLeft === 0) {
        history.push('/timesup');
      }
    }
  }, [timeLeft, expired, history]);

  return <div>Time left: {timeLeft} seconds</div>;
};

export default Timer;
