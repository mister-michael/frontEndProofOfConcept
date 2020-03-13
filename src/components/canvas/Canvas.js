import React, { useEffect, useState } from "react"

const Canvas = () => {

  const [isTrue, setIsTrue] = useState(0)

  const CanvasFunction = () => {

    const canvas = document.querySelector("canvas");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const c = canvas.getContext('2d');

    const fillRect = (x, y, w, h) => {
      return fillRect(x, y, w, h)
    }

    const r = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min
    }

    // const R = {
    //   x: r(10, 100),
    //   y: r(10, 100),
    //   w: r(50, 100),
    //   h: r(100, 50)
    // }

    const mediumFunction = () => {
      return r(100, 200)
    }
    const medium = mediumFunction()

    const bigFunction = () => {
      return r(300, 400)
    }
    const big = bigFunction()

    const smallFunction = () => {
      return r(300, 400)
    }
    const small = smallFunction()


    c.fillRect(small, small, small, small);
    c.fillRect(big, medium, big, medium);

    console.log(canvas)

    setIsTrue(isTrue + 1)

  }

  useEffect(() => {

    setTimeout(() => {
      CanvasFunction();
      setIsTrue(isTrue + 1)
    }, 1000)

  }, [isTrue]);

  return (
    <canvas></canvas>
  )
}

export default Canvas