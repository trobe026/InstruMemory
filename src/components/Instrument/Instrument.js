import React from "react";
import "./Instrument.css";

const Instrument = props => (

  // componentWillReceiveProps() {
  //   console.log('test2342')
  // }

  <div className='card'>
    <div className='img-cont'>
      <img
        alt={props.name}
        src={props.image}
        data-id={props.id}
        onClick={() => props.checkMatch(props.id)}
      />
    </div>
  </div>

);

export default Instrument;
