import React, {useEffect, useState} from "react";
import { Route } from "react-router-dom";
import Canvas from "./canvas/Canvas"
import Canvas2 from "./canvas/Canvas2"

const AppViews = props => {

  const [isTrue, setIsTrue] = useState(false)
  

  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return (
            <>
            <div id="container">
          <Canvas className="canvas"isTrue={isTrue} setIsTrue={setIsTrue} {...props} />
          <Canvas2 className="canvas"isTrue={isTrue} setIsTrue={setIsTrue}{...props} />
          <Canvas className="canvas"isTrue={isTrue} setIsTrue={setIsTrue}{...props} />
          </div>
          </>
          )
        }}
      />
      <Route
      exact
      path="/canvas2"
      render={props => {
        return <Canvas2 {...props}/>
      }}
      />
    </React.Fragment>
  )

}

export default AppViews