import React, { useEffect, useState } from "react";
import API from "../../modules/ApiManager"
import "./Canvas.css"

const Canvas2 = (props) => {

  const [classList, setClassList] = useState({ id: "", name: "" })

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

  const randomXY = () => {
    var x = r(5, 700);
    var y = r(10, 500);
    var el = document.getElementById('circle--1');
    el.style.position = "absolute";
    el.style.left = x + 'px';
    el.style.top = y + 'px';
  }

  useEffect(() => {
    setTimeout(() => {
      getClass("styles", 1);
      randomXY()
      props.setIsTrue(true)
    }, 300
    )
  }, [])

  const htmlFunction = () => {
    return (<div id="circle--1" className={`${classList.name} canvas`} ></div>)
  }
    
  return (
    htmlFunction()
  )
}

export default Canvas2