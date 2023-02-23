import React from 'react'
import './Square.css'
const Square = ({id, className ,state}) => {
    // console.log(props.id,props.class);
  return (
    <div className={`square-con ${className} ${state === 'X' ? "x-color" : "o-color"}`}  id={id}>{state}</div>
  )
}

export default Square