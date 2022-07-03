import React, {useState} from "react";

function SearchInput({setCommentSearched, setComment, comment, commentSearched}){


    const handleSearchInput = (e) => {
        setComment(e.target.value)
      }

      const newSearch = (e) => {
        e.preventDefault();
        setCommentSearched(comment)
        setComment('')
        console.log(commentSearched)
      }

    return(
        <form onSubmit={newSearch}>
        <label htmlFor="new-item">Search for a term:</label>
        <input id="new-item" type="text" onChange={handleSearchInput}/>
        <input type="submit" value="Search" />
      </form>
    )
}

export default SearchInput;