import React, { useState } from 'react';
import './App.css';

function App() {
  const [sentence, setSentence] = useState('');
  const [sender, setSender] = useState('John');
  const [messageThread, setMessageThread] = useState([]);

  const onInput = (e) => setSentence(e.target.value);

  return (
    <div className='chatFrame'>
      {messageThread
        .filter((element) => element.sentence.length > 0)
        .map((element) => (
          <div className='message'>
            <p>{element.sentence}</p>
            <p>
              <img
                className='avatar'
                src={`img/${element.sender}.jpg`}
                alt='avatar'
              />
              {element.sender}
            </p>
            <p>{element.time}</p>
          </div>
        ))}

      <form
        onSubmit={(e) => {
          e.preventDefault();

          const today = new Date();
          const time =
            today.getHours() +
            ':' +
            today.getMinutes() +
            ':' +
            today.getSeconds();

          const newMessage = {
            sentence,
            sender,
            time,
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
