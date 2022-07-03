import React from "react";
import CommunityItem from "./CommunityItem";


function CommunityList({communities, communityClicked, selectedCommunity}){

    const communityNodes = communities.map((community, index) => {
        return <CommunityItem name={community} key={index} communityClicked={communityClicked} selectedCommunity={selectedCommunity}/>
    })

    return(
        <>
        <ul className="ul-community">{communityNodes}</ul>
        </>
    )
}

export default CommunityList;