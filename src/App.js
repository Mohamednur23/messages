import "./styles.css";
import {useState} from 'react'

export default function App() {
  const [messages,setMessages] = useState(["a","b","c"])
  return (
    <div className="App">
 {messages.length === 0 ? <h1>you're all caught up! </h1>:
 <h1>Woow! You have {messages.length} unread 
  { messages.length > 1 ? " messages" : " message"}</h1>
 }
      
    </div>
  );
}
