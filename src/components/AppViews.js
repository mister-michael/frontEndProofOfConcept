import React from "react";
import { Route } from "react-router-dom";
import Canvas from "./canvas/Canvas"
import Canvas2 from "./canvas/Canvas2"

const AppViews = props => {



  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Canvas {...props} />;
        }}
      />
      <Route
      exact
      path="/canvas2"
      render={props => {
        for (let i=0; i < 4; i++) {
        return <Canvas2 {...props}/>}
      }}
      />
    </React.Fragment>
  )

}

export default AppViews