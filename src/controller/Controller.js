import React from 'react';
import style from './Controller.module.css';
import Button from './Button';

const Controller = props => {
  return (
    <div className={style.Controller}>
      <h2>Timestamps</h2>
      <Button
        className={style.Button}
        onClick={props.buttonClick}
        content='1 week' />
      <Button
        className={style.Button}
        onClick={props.buttonClick}
        content='1 hour' />
      <Button
        className={style.Button}
        onClick={props.buttonClick}
        content='5 minutes' />
      <Button
        className={style.Button}
        onClick={props.buttonClick}
        content='1 minute' />

    </div>
  )
}

export default Controller;