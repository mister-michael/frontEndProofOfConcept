import React, { useEffect, useState } from "react"
import "./Canvas.css"

const Canvas = () => {

  const [isTrue, setIsTrue] = useState(false)

  const CanvasFunction = () => {

    const canvas1 = document.querySelector("#canvas1");
    canvas1.width = window.innerWidth;
    canvas1.height = window.innerHeight;
    const c1 = canvas1.getContext('2d');

    const canvas2 = document.querySelector("#canvas1");
    canvas2.width = 1270;
    canvas2.height = 960;
    const c2 = canvas1.getContext('2d');

    const fillRect = (x, y, w, h) => {
      return fillRect(x, y, w, h)
    }

    const r = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min
    }

    const mediumFunction = () => {
      return r(40, 70)
    }
    

    // c1.fillRect(small, small, small, small);
    c1.fillStyle = '#142939d9'
    c1.fillRect(r(r(20, 50), r(400, 500)), r(r(20, 50), r(20, 500)), r(r(5, 10), r(20, 40)), r(r(300, 500), r(500, 700)));
    c2.fillStyle = "#263529"
    c2.fillRect(r(r(20, 50), r(400, 500)), r(r(20, 50), r(20, 500)), r(r(20, 500), r(20, 500)), r(r(20, 500), r(20, 500)));
    // c1.fillStyle = '#2b1a1adb'
    // c1.fillRect(50, 50, 50, 50)
    console.log(canvas1)

    setIsTrue(isTrue + 1)
  }

  useEffect(() => {

    setTimeout(() => {
      CanvasFunction();
      setIsTrue(isTrue + 1)
    }, 500)

  }, []);

  if (isTrue) {

    return (
      <>
        <div id="canvas">
          <canvas className="canvas" id="canvas1"></canvas>
        </div>
      </>
    )
  } else {
    return (
      <>
      
        <div id="container">
          <canvas  className="canvas" id="canvas1"></canvas>
        </div>
      </>
    )
  }
}

export default Canvas