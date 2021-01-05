import React,{useState, useEffect} from 'react'
import './App.css'
import {Button,makeStyles,InputLabel, FormControl, Input} from '@material-ui/core';
import Message from './Message';
import {db} from './firebase'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([
    {username:'sonu', message:'hey'},
    {username:'Radha', message:'What\'s up'}
    
  ]);

  const [username,setUsername] = useState();


  useEffect(() => {
    db.collection('messages').onSnapshot(snapshot=> {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [])


  useEffect(() => {
    // run code here
    // if its black  inside this code run
    setUsername(prompt('Please enter your user name?'))
  
  }, [])

  const sendMessage = (e) => {

    e.preventDefault()
    setMessages([...messages, {username:username, message:inputValue}])
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
          messages.map(message => {
             return <Message username={message.username} message={message}/>
          })
        }
       
    </div>
  );
}

export default App;
