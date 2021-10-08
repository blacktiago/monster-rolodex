import React from "react";

import './search-box.styles.css'

export const SearchBox = ({plasceHolder, changeHandler}) => (
    <input className="search" type="search" placeholder={plasceHolder} 
    onChange={changeHandler}></input>
)