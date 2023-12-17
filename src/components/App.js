import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
  const [color,setColor]=useState('redColor');

  const handleColor=()=>{
    if(color==='redColor'){
      setColor('blueColor');
    }
    else{
      setColor('redColor');
    }
  }
  return (
    <div id="main">
      <p className={color} >Newton School</p>
      <button id='button' onClick={handleColor}>Change Style</button>
    </div>
  )
}


export default App;
