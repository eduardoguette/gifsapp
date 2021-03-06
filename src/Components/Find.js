import React, { useState } from 'react';
import { useLocation } from "wouter";


export default function Find() {
  const [keyword, setKeyword] = useState(''); // eslint-disable-next-line
  const [path, pushLocation] = useLocation(); 
  
  const handleSubmit = e => {
    e.preventDefault();
    pushLocation(`/gif/${keyword}`) 
  }
  const handleChange = e => {
    setKeyword(e.target.value)
  }


  return (
    <div className="finder">
      <form onSubmit={handleSubmit}>
        <input type="text" className="data" onChange={handleChange} />
        <button className="search" onChange={handleChange}>Search</button>
      </form>
    </div>
  )
}