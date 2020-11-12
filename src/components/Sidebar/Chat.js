import React from 'react'
import './Chat.scss'

function Chat(props) {
  return (
    <div className="chat-item">
      <p className="time">{props.time}</p>
      <div className="avatar">
        <img draggable="false" src="/img/logo_c.png" alt="User Picture" />
      </div>
      <div className="info">
        <h2 className="name">{props.name}</h2>
        <p className="message">{props.message}</p>
      </div>
    </div>
  )
}

export default Chat
