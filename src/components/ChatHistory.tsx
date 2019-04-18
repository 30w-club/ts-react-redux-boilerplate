import * as React from 'react'
import { Message } from '../store/chat/types'

interface ChatHistoryProps {
  messages: Message[]
}

const ChatHistory: React.SFC<ChatHistoryProps> = ({ messages }) => {
  return (
    <div>
      {
        messages.map(message => (
          <div key={message.timestamp}>
            <h3>From: {message.user}</h3>
            <p>{message.message}</p>
          </div>
        ))
      }
    </div>
  )
}

export default ChatHistory