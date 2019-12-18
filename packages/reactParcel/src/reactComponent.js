import React, { useState, useEffect } from "react";

export default function(props) {
  // console.log("props", JSON.stringify(props));
  useEffect(() => {
    console.log("onMount");
  }, []);
  return <div>react component without hooks {props.value} </div>;
}
