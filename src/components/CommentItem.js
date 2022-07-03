import React from "react";

function CommentItem({author,text,link, score, commentSearched}){


    return(
        <li>
        <h3>{author}</h3>
        <h4>{text}</h4>
        <h5>{link}</h5>
        <h6>{score}</h6>
        <h6>{commentSearched}</h6>
        </li>
    )
}

export default CommentItem;