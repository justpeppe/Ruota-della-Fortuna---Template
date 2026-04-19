import React, { useState, useEffect } from 'react';
import { isFullscreen, toggleFullscreen } from '../../utils/fullscreen';

const GlobalFullscreenButton = () => {
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    // Determine initial state
    setFullscreen(isFullscreen());

    const handleFullscreenChange = () => {
      setFullscreen(isFullscreen());
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <button
      type="button"
      className="global-fullscreen-button"
      onClick={toggleFullscreen}
      aria-label="Toggle Fullscreen"
      title="Toggle Fullscreen"
    >
      {fullscreen ? '⛾' : '⛶'}
    </button>
  );
};

export default GlobalFullscreenButton;
