import React from 'react'
import './Sidebar.scss'
import IconButton from '../Buttons/IconButton'
import Chat from './Chat'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="header">
        <a style={{display: "inherit"}} href="https://justinprassl.de/"><img src="/img/logo.png" alt="Messenger Logo" /></a>
        <h2 className="header-title">Your Chats</h2>
        <IconButton type="ghost" icon="fas fa-plus" />
      </div>
      <div className="search">
        <input type="text" placeholder="Search chat..." />
        <i className="fas fa-search"></i>
      </div>
      <div className="chats">
        <Chat time="12:34" name="Justin Praßl" message="Message Here." />
        <Chat time="12:34" name="Justin Praßl" message="Message Here." />
        <Chat time="12:34" name="Justin Praßl" message="Message Here." />
        <Chat time="12:34" name="Justin Praßl" message="Message Here." />
        <Chat time="12:34" name="Justin Praßl" message="Message Here." />
        <Chat time="12:34" name="Justin Praßl" message="Message Here." />
        <Chat time="12:34" name="Justin Praßl" message="Message Here." />
        <Chat time="12:34" name="Justin Praßl" message="Message Here." />
        <Chat time="12:34" name="Justin Praßl" message="Message Here." />
        <Chat time="12:34" name="Justin Praßl" message="Message Here." />
        <Chat time="12:34" name="Justin Praßl" message="Message Here." />
        <Chat time="12:34" name="Justin Praßl" message="Message Here." />
        <Chat time="12:34" name="Justin Praßl" message="Message Here." />
      </div>
    </div>
  )
}

export default Sidebar
