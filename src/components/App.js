import React, { useState } from "react";
import video from "../data/video.js";
import Video from "./Video.js";
import Details from "./Details.js";
import Comments from "./Comments.js";

function App() {
  const [isShown, setIsShown] = useState(false)
  const [videoObj, setVideoObj] = useState(video)  

  const showHideComments = isShown ? <Comments comments={videoObj.comments}/> : null

  return (
    <div className="App">
      <Video embedUrl={videoObj.embedUrl} title={videoObj.title}/>
      <Details 
        videoObj={videoObj}
        setVideoObj={setVideoObj}
        isShown={isShown}
        setIsShown={setIsShown}
      />
      {showHideComments}
    </div>    
  );
}

export default App;
