import React, { useState } from 'react';
import './Chatbot.css';

export default function ChatPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    setMessages([...messages, { text: newMessage, fromUser: true }]);
    setNewMessage('');

    // Optional: You can also add an auto-reply
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: 'Thank you! We will get back soon.', fromUser: false }]);
    }, 1000);
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbox">
          <div className="chatbox-header">
            Chat Support
            <button onClick={toggleChat}>✖</button>
          </div>

          <div className="chatbox-body">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`message ${msg.fromUser ? 'user' : 'bot'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <form className="chatbox-footer" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}

      <button className="chatbot-toggle" onClick={toggleChat}>
        💬
      </button>
    </div>
  );
}
