import React from "react";
import { useState, useRef } from "react";

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const playPauseToggle = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const seekBar = () => {
    const duration = videoRef.current.duration;
    const currentTime = videoRef.current.currentTime;
    const progress = (currentTime / duration) * 100;
  };
  return (
    <div class='flex  items-center flex-shrink-0 text-white mr-6'>
      <video
        className='sm:text-left md:flex rounded-lg '
        onTimeUpdate={seekBar}
        ref={videoRef}
        width='100%'
        height='100%'
        controls
      >
        {/* player.zoomrotate({
          rotate:180,
          zoom:1.5
        }) */}
        <source
          src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
          type='video/mp4'
        />
      </video>
    </div>
  );
};

export default App;
