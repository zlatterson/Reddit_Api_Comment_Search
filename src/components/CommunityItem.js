import React from "react";

const CommunityItem = ({name, communityClicked, selectedCommunity}) => {

    const handleClick = () => {
        communityClicked(name)
    }
    return(
        <li className={name===selectedCommunity ? "li-selected-community" : "li-community"}>
            <h3 onClick={handleClick}>{name}</h3>
        </li>
    )
}

export default CommunityItem;