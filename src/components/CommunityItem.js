import React from "react";

const CommunityItem = ({name, communityClicked}) => {

    const handleClick = () => {
        communityClicked(name)
    }

    return(
        <li>
            <h3 onClick={handleClick}>{name}</h3>
        </li>
    )
}

export default CommunityItem;