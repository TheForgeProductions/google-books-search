import React from "react";
import "./style.css";

function Headline({ children }) {
  return <div className="headline bg-dark mt-4">{children}</div>;
}

export default Headline;
