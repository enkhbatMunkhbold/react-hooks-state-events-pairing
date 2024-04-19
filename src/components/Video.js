import React from "react";

function Video({ embedUrl, title }) {
  return (
    <iframe
      width="919"
      height="525"
      src={embedUrl}
      frameBorder="0"
      allowFullScreen
      title={title}
    />
  )
}

export default Video;