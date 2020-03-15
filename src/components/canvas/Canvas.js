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
    canvas2.width = window.innerWidth;
    canvas2.height = window.innerHeight;
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
    const mediumFunction2 = () => {
      return r(30, 50)
    }
    const medium = mediumFunction()

    const bigFunction = () => {
      return r(300, 400)
    }
    const bigFunction2 = () => {
      return r(300, 400)
    }
    const big = bigFunction()

    const smallFunction = () => {
      return r(20, 40)
    }
    const smallFunction2 = () => {
      return r(30, 35)
    }
    const smallFunction3 = () => {
      return r(15, 28)
    }
    const smallFunction4 = () => {
      return r(10, 50)
    }

    const small = smallFunction()

    // c1.fillRect(small, small, small, small);
    c1.fillStyle = '#142939d9'
    c1.fillRect(r(r(20,500),r(20, 500,)), r(r(20,500),r(20, 500,)), r(r(20,500),r(20, 500,)), r(r(20,500),r(20, 500,)));
    c2.fillStyle = "#263529"
    c2.fillRect(r(r(20,500),r(20, 500,)), r(r(20,500),r(20, 500,)), r(r(20,500),r(20, 500,)), r(r(20,500),r(20, 500,)));
    // c2.fillRect(smallFunction3(), mediumFunction2(), smallFunction4(), mediumFunction2());
c1.fillStyle = '#2b1a1adb'
    c1.fillRect(50,50,50,50)
    console.log(canvas1)

    setIsTrue(isTrue + 1)
  }

  useEffect(() => {

    setTimeout(() => {
      CanvasFunction();
      setIsTrue(isTrue + 1)
    }, 500)

  },[]);

  if (isTrue) {

  return (
    <>
      <div id="container">
        <canvas class="canvas" id="canvas1"></canvas>
        <canvas class="canvas" id="canvas2"></canvas>
      </div>
    </>
  )
} else {
  return (
    <>
      <div id="hidden">
        <canvas type="hidden"class="canvas" id="canvas1"></canvas>
        <canvas type="hidden"class="canvas" id="canvas2"></canvas>
      </div>
    </>
  )
}
}

export default Canvas