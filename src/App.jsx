/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react'
import './App.css'
import '@chatscope/chat-ui-kit-react-styles/dist/default/style.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

function App() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am Jarvis.",
      sender: "ChatGPT"
    }
  ])

  return (
    <div className='App'>
      <div style={{position: "relative", height: "800px", width: "700px"}}>
        <MainContainer>
          <ChatContainer>
            <MessageList>
              {messages.map((message, index) => {
                return <Message key={index} model={message} />
              })}
            </MessageList>
            <MessageInput placeholder='Type message here' onSend={handleSend}/>
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default App
