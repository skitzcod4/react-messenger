import React from 'react'
import IconButton from '../Buttons/IconButton'
import './Chat.scss'

function Chat() {
  return (
    <div className="chat">
      <div className="header">
        <div className="avatar">
          <img draggable="false" src="/img/logo_c.png" alt="User Picture" />
        </div>
        <div className="info">
          <h2 className="name">Justin Praßl</h2>
          <p className="status">Last seen at ...</p>
        </div>
      </div>
      <div className="body">
        <div className="message">
          <h2 className="message-info">Justin Praßl, {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</h2>
          <p className="message-text">Consectetur occaecat quis ullamco ipsum excepteur laboris sunt nostrud duis proident duis. Qui deserunt eu ea labore consectetur consectetur. Veniam tempor dolor aute anim pariatur adipisicing tempor excepteur irure culpa eiusmod tempor adipisicing nisi. Irure tempor ullamco commodo et pariatur velit. Mollit ea ea amet velit esse adipisicing velit do dolor esse elit consectetur. Mollit ex ex officia consectetur et nostrud nostrud sit laborum aliquip.</p>
        </div>
        <div className="message sender">
          <h2 className="message-info">Justin Praßl, {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</h2>
          <p className="message-text">Do aute cupidatat elit enim consectetur.</p>
        </div>
      </div>
      <div className="footer">
        <div className="controls">
          <IconButton type="transparent btn-round btn-xl" icon="far fa-grin" />
        </div>
        <input type="text" placeholder="Your message..." />
        <div className="send">
          <IconButton type="primary btn-send" icon="fas fa-paper-plane" />
        </div>
      </div>
    </div>
  )
}

export default Chat
