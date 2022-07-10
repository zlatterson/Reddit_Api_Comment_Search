import React from "react";
import CommentItem from "../components/CommentItem";

function CommentList({threadObjects, commentSearched, feedback}){
    let commentNum = 0
    console.log(`feedback:${feedback}`)
    const commentNodes = threadObjects.map((allThreads) =>{
        return allThreads.map((thread) => {
            return thread.data.children?.map((comment) => {
                if (comment.data.body?.includes(commentSearched)) {
                    console.log(comment.data)
                    commentNum += 1
                    return <CommentItem 
                        author={comment.data.author} 
                        key={comment.data.id} 
                        // text={comment.data.body.replace(commentSearched,`<span class=highlight>${commentSearched}</span>`)} 
                        text={comment.data.body}
                        link={comment.data.permalink} 
                        score={comment.data.score} 
                        commentSearched={commentSearched}
                    />
                }
            })
        })
    })



    return(
        <div>
            <p>{commentNum===0 && feedback!=='' ? "Searching" : commentNum===0 && feedback!=='Searching'? "Start Search" : `${commentNum} results`}</p>
            <ul className="ul-comment">
            {commentNodes}
            </ul>
        </div>
    )
}

export default CommentList;