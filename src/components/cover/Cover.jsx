import React from 'react';
import './Cover.css';
import coverVideo from '../../media/coverVideo.mp4';

const Cover = () => {
  return (
    <div className='cover-container'>
        <video src={coverVideo} className='video' autoPlay loop muted/>
        <h1>Jonathan Daniel Moran</h1> 
         <p>Full-Stack Developer |</p>
    </div>
  )
}

export default Cover