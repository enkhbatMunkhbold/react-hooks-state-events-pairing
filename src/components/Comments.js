import React from "react";

function Comments({ comments }) {

  const renderComments = comments.map(message => {
    return (
      <>
        <h3>{message.user}</h3>
        <p>{message.comment}</p>
      </>
    )
  })
  
  return (
    <div className="comments">
      <div>
        <h2>{comments.length} Comments</h2>
        {renderComments}
      </div>
    </div>
  )
}

export default Comments;