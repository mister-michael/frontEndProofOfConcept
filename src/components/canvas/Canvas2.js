import React, { useEffect, useState } from "react";
import API from "../../modules/ApiManager"
import "./Canvas.css"

const Canvas2 = (props) => {

  const [classList, setClassList] = useState({id: "", name: ""})

  const getClass = (str, id) => {
    API.getWithId(str, id)
      .then(name => {
        setClassList(name)
      })
  }

  const r = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
  }

  function GFG_Fun() { 
    var x = r(0,200); 
    var y = r(); 
    var el = document.getElementById('GFG_DIV'); 
    el.style.position = "absolute"; 
    el.style.left = x + 'px'; 
    el.style.top = y + 'px'; 
    el_down.innerHTML =  
      "Position of element is changed."; 
} 


  useEffect(() => {
    getClass("styles", 1);
  })

  return (
    <div id="circle--1" className={classList.name} ></div>
  )
}

export default Canvas2