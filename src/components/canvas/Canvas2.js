import React, { useEffect, useState } from "react";
import API from "../../modules/ApiManager"

const Canvas2 = (props) => {

  const [classList, setClassList] = useState([])

  const getClass = () => {
    API.getWithId("className", 1)
      .then(name => {
        setClassList(name)
      })
  }

  useEffect(() => {
    getClass();
  })

  return (
    <div className={classList.class} ></div>
  )
}

export default Canvas2