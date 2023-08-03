import React, { useState } from 'react';

function GetRGB(){
  let r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);
  return "rgb("+r+", "+g+","+b+")";
}

function Colors() {
  
  const [bgColor, setBgColor] = useState(GetRGB());
   const changeColor =()=>{
      setBgColor(GetRGB());
    }
  return (
    <div className="App">
      <header className="App-header" style={{background: bgColor}}>
        <button onClick={changeColor}>Change Color</button>
      </header>
    </div>
  );
}


export default Colors;