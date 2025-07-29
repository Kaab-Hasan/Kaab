import React from "react";
function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

// This component renders a preloader div that can be shown or hidden based on the 'load' prop.

export default Pre;
