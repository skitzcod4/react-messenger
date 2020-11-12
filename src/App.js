import React from 'react'
import Chat from './components/Chat/Chat'
import Sidebar from './components/Sidebar/Sidebar'
import './App.scss'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App
