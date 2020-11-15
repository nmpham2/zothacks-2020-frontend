import React, { Component } from 'react';
import "./searchBar.scss";


const SearchBar = ({keyword, setKeyword}) => {
    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};

    return (
      <input 
       style={BarStyling}
       key="random1"
       value={keyword}
       placeholder={"input ingredient"}
      //  onChange={handleChange}
      />
    );
  }
  
export default SearchBar;