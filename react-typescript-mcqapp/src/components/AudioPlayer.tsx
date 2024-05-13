// AudioPlayer.tsx
import React, { useState, useEffect } from 'react';

interface Props {
  url: string;
}

const AudioPlayer: React.FC<Props> = ({ url }) => {
  const [audio] = useState(new Audio(url));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
};

export default AudioPlayer;
