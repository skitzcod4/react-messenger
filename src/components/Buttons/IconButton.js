import React from 'react'
import './Button.scss'

function IconButton(props) {
  return <button className={`btn btn-${props.type} btn-square`}><i className={`${props.icon}`}></i></button>
}

export default IconButton
