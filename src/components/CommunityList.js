import React from "react";
import CommunityItem from "./CommunityItem";


function CommunityList({communities, communityClicked}){

    const communityNodes = communities.map((community, index) => {
        return <CommunityItem name={community} key={index} communityClicked={communityClicked}/>
    })

    return(
        <>
        <ul>{communityNodes}</ul>
        </>
    )
}

export default CommunityList;