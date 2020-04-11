import React from 'react';

import './SearchBox.component.style.css';

export const SearchBox = ({placeholder,handleChange}) => {
   return <input type="search" className="search" placeholder={placeholder} name="search" onChange={handleChange}/>
};