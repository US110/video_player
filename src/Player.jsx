import React from "react";
import { useState, useRef } from "react";
import "./VideoPlayer.css";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const videoRef = useRef(null);
  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };
  const handleDurationChange = () => {
    setDuration(videoRef.current.duration);
  };
  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    videoRef.current.volume = event.target.value;
  };
  const handleSeek = (event) => {
    videoRef.current.currentTime = event.target.value;
  };
  return (
    <div className='video-player'>
      <video
        ref={videoRef}
        src='https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleDurationChange}
      />
      <div className='controls'>
        <button onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <input
          type='range'
          min='0'
          max={duration}
          value={currentTime}
          onChange={handleSeek}
        />
        <input
          type='range'
          min='0'
          max='1'
          step='0.1'
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default Player;
