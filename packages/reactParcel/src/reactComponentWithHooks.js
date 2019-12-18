import React, { useState } from "react";

export default function(props) {
  const [count, setCount] = useState(0);
  console.log("props", JSON.stringify(props));

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
