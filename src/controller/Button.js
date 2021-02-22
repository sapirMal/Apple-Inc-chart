import React from 'react';

const Button = props => {
  return (
    <button className={props.className}
      onClick={() => props.onClick(props.content)}    >
      {props.content}
    </button>
  )
}

export default Button;