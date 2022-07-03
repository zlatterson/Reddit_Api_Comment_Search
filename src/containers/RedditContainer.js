import React, {useState, useEffect} from "react";
import CommentList from "../components/CommentList";
import CommunityInput from "../components/CommunityInput";
import CommunityList from "../components/CommunityList";
import SearchInput from "../components/SearchInput";

function RedditContainer(){
    const [newCommunity, setNewCommunity] = useState('')
    const [communities, setCommunities] = useState([])
    const [selectedCommunity, setSelectedCommunity] = useState(null)

    const [comment, setComment] = useState('')
    const [commentSearched, setCommentSearched] = useState('')

    const [threadUrls, setThreadUrls] = useState([])
    const [threadObjects, setThreadObjects] = useState([])



    async function getThreadUrls(){
        const response = await fetch (`https://www.reddit.com/r/${selectedCommunity}.json`)
        const data = await response.json()
        const foundUrls = data.data.children.map((thread) => {
            return ('https://www.reddit.com' + thread.data.permalink +'.json')
        })
        setThreadUrls(foundUrls)
    }

    async function getThreadObjects(){
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
    }, [comment])

    const communityClicked = function(community){
        setSelectedCommunity(community)
    }


    return (
        <>
        <div className="header">
        <h1>Reddit Comment Search</h1>
        <p>Performs a deep search on comments of a term for the top 25 posts of selected community using .json data</p>
        <p>1.Enter a community 2.Select a community 3.Enter a term to search comments in the top 25 posts.</p>
        <div className="header-components">
        <SearchInput setCommentSearched={setCommentSearched} setComment={setComment} comment={comment} commentSearched={commentSearched}/>
        <CommunityInput communities={communities} setCommunities={setCommunities} newCommunity={newCommunity} setNewCommunity={setNewCommunity}/>
        </div>

        <CommunityList communities={communities} communityClicked={communityClicked} selectedCommunity={selectedCommunity}/>
        </div>
        <CommentList threadObjects={threadObjects} commentSearched={commentSearched}/>
        </>
    )
}

export default RedditContainer;