import React,{useState, useEffect} from 'react'
import './App.css'
import {Button,makeStyles,InputLabel, FormControl, Input} from '@material-ui/core';
import Message from './Message';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState(['Hello world', 'Hi', 'Whats up']);
  const [username,setUsername] = useState('');


  useEffect(() => {
    // run code here
    // if its black  inside this code run
    setUsername(prompt('Please enter your user name?'))
  
  }, [])

  const sendMessage = (e) => {

    e.preventDefault()
    setMessages([...messages, inputValue])
    setInputValue('')
    console.log(messages)

  }

  return (
    <div className="App">
        <h1>Dream programming 😊🚀🚀🚀🚀🚀🚀🚀🚀</h1>
        <h2>Welcome {username}</h2>
        <form>
          
          <FormControl>
            <InputLabel htmlFor="component-simple">Type here</InputLabel>
            <Input id="component-simple" value={inputValue} onChange={event => setInputValue(event.target.value)} />
          </FormControl>
          <Button disabled={!inputValue} type="submit" onClick={sendMessage}  variant="contained" color="primary">Send Message</Button>
        </form>
        {
          messages.map(value => {
             return <Message text={value}/>
          })
        }
       
    </div>
  );
}

export default App;
