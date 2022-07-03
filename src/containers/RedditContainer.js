import React, {useState, useEffect} from "react";
import CommentList from "../components/CommentList";
import CommunityInput from "../components/CommunityInput";
import CommunityList from "../components/CommunityList";
import SearchInput from "../components/SearchInput";

function RedditContainer(){
    const [threadUrls, setThreadUrls] = useState([])
    const [threadObjects, setThreadObjects] = useState([])

    const [newCommunity, setNewCommunity] = useState('')
    const [communities, setCommunities] = useState([])
    const [selectedCommunity, setSelectedCommunity] = useState(null)

    const [comment, setComment] = useState('')
    const [commentSearched, setCommentSearched] = useState('')




    async function getThreadUrls(){
        const response = await fetch (`https://www.reddit.com/r/${selectedCommunity}.json`)
        const data = await response.json()
        const foundUrls = data.data.children.map((thread) => {
            return ('https://www.reddit.com' + thread.data.permalink +'.json')
        })
        setThreadUrls(foundUrls)
    }

    async function getThreadObjects(){
        // console.log(threadUrls[2])
        // const response = await fetch (threadUrls[2])
        // const data = await response.json()
        // setThreadObjects(data)
        let allComments = []
        for(const thread of threadUrls){
            const response = await fetch (thread)
            const data = await response.json()
            console.log('sent')
            allComments.push(data)
        }
        setThreadObjects(allComments)
    }
    useEffect(() => {
        getThreadUrls()
        getThreadObjects()
        // communityClicked()
    }, [comment])

    const communityClicked = function(community){
        setSelectedCommunity(community)
    }


    return (
        <>
        <h1>reddit container</h1>
        {/* {threads} */}
        <CommunityInput communities={communities} setCommunities={setCommunities} newCommunity={newCommunity} setNewCommunity={setNewCommunity}/>
        <CommunityList communities={communities} communityClicked={communityClicked}/>

        <SearchInput setCommentSearched={setCommentSearched} setComment={setComment} comment={comment} commentSearched={commentSearched}/>
        <CommentList threadObjects={threadObjects} commentSearched={commentSearched}/>
        </>
    )
}

export default RedditContainer;