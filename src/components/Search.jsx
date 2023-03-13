import React, { useState } from "react";
import Sresult from "./Sresult";

const Search = () => {
    const [img, setImg ] = useState('')

    const handelChange = (event)=>{
        const data = event.target.value
      
        setImg(data)
    }

  return (
    <>
      <div className="container center">
        <input type="text" placeholder="Search Here.." value={img} onChange={handelChange} />
      </div>
    { img===""?null: <Sresult name ={img} /> }
     
    </>
  );
};

export default Search;
