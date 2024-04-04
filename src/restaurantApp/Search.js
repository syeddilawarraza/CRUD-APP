import React, { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState(null);
  const searchData = (key) => {
    console.warn(key);
    fetch('http://localhost:3000/Restaurant?q='+key).then((result)=>{
      result.json().then((resp)=>{
        console.warn('resp',resp)
        setSearch(resp)
      })
    })
  };
  return (
    <div>
      <input type="text" onChange={(e) => searchData(e.target.value)} />
    
    <div>
      {
       search? 
       <div>
      {
       search.map((item)=>
       <div>{item.name}</div>
       )
      }
       </div>
       :""
      } 
    </div>
    </div>
  );
}
