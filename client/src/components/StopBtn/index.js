import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
function StopBtn(props) {
  return (
    <span className="stop-btn" {...props} role="button" tabIndex="0">
      Stop
    </span>
  );
}

export default StopBtn;