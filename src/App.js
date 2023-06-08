import React, { useState } from 'react';
import './App.css';

function App() {
  const [sentence, setSentence] = useState('');
  const [sender, setSender] = useState('');
  const [messageThread, setMessageThread] = useState([]);

  const onInput = (e) => setSentence(e.target.value);

  return (
    <div className='chatFrame'>
      {messageThread
        .filter((element) => element.sentence.length > 0)
        .map((element) => (
          <div className='message'>
            <p>{element.sentence}</p>
            <p>{element.sender}</p>
          </div>
        ))}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newMessage = {
            sentence,
            sender,
          };
          setMessageThread(() => {
            return [...messageThread, newMessage];
          });
          setSentence('');
        }}
      >
        <input
          type='text'
          placeholder='Enter your message'
          value={sentence}
          onInput={onInput}
        />
        <select
          onChange={(e) => {
            setSender(e.target.value);
          }}
        >
          <option value='anonimus'>Who from</option>
          <option value='John'>John</option>
          <option value='David'>David</option>
          <option value='Donna'>Donna</option>
        </select>
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}

export default App;
