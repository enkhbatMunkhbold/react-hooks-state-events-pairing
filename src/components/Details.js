import React from "react";

function Details({ videoObj, setVideoObj, isShown, setIsShown }) {
  
  const { title, views, createdAt, upvotes, downvotes } = videoObj

  const handleShowComments = () => {
    setIsShown(!isShown)
  }

  const handleVoteBtnClick = e => {
    const value = +(e.target.value) + 1
    setVideoObj({...videoObj, [e.target.name]: value})
  }
  
  return (
    <div>
      <h1>{title}</h1>
      <p>{views} Views | Uploaded {createdAt}</p>
      <div className="vote-buttons">
        <button name='upvotes' onClick={handleVoteBtnClick} value={upvotes}>{upvotes} 👍</button>
        <button name='downvotes' onClick={handleVoteBtnClick} value={downvotes}>{downvotes} 👎</button>
      </div>
      <div className="comment-buttons">
        <button onClick={handleShowComments}>
          {isShown ? "Hide Comments" : "Show Comments"}
        </button>
      </div>
      <hr />
    </div>
  )
}

export default Details;