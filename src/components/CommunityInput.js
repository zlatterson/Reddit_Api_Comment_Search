import React, {useState} from "react";

function CommunityInput({communities, setCommunities, newCommunity, setNewCommunity}){


    const handleSearchInput = (e) => {
        setNewCommunity(e.target.value)
      }

      const saveNewItem = (event) => {
        event.preventDefault();
        const copyCommunities = [...communities]
        copyCommunities.push(newCommunity)
        setCommunities(copyCommunities)
        // setNewCommunity("")
      }

    return(
        <form onSubmit={saveNewItem}>
        <label htmlFor="new-item">Add a community:</label>
        <input id="new-item" type="text" onChange={handleSearchInput}/>
        <input type="submit" value="Add" />
      </form>
    )
}

export default CommunityInput;