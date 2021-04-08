import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './App.css'

function App() {
  return (
    <ChatEngine 
      height='100vh'
      projectID='3659119a-1ea1-4d86-acf9-1ebc1b3ae6fa'
      userName='random'
      userSecret='random'
    />
  );
}

export default App;
