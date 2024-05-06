import React, { useEffect, useState } from 'react';

const CompA = () => {
 const [value,setValue] = useState(0)
 useEffect(()=>{
  console.log("Mounting Phase");
  return()=>{
    console.log("Unmounting Phase");
  }
 },[value])

    return (
        <div>
             <h1>Lifecycle method using useEffect</h1>
             <h3>{value}</h3>
             <button onClick={()=>{setValue(value+1)}}>Click</button>
          
        </div>
    );
};

export default CompA;