import React from "react";

function CommentItem({author,text,link, score, commentSearched}){

    const author_html = `https://www.reddit.com/user/${author}`
    const link_html = `https://www.reddit.com${link}`


    return(
        <li className="li-comment">
        <h3><a href={author_html} target="_blank" className="link">{author}</a></h3>
        <h4>{text}</h4>
        <h5><a href={link_html} target="_blank" className="link">{link}</a></h5>
        <h6>{score} points</h6>
        {/* <h6>{commentSearched}</h6> */}
        </li>
    )
}

export default CommentItem;