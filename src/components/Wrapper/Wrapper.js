import React from "react";
import "./Wrapper.css";

const Wrapper = props => (
  <div className={props.animateClass}>{props.children}</div>
  // console.log(this.props.animateClass)
);


export default Wrapper;
