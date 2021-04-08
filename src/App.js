import { ChatEngine } from 'react-chat-engine'
import './App.css'

function App() {
  return (
    <ChatEngine 
      height='100vh'
      projectID='ProjectID'
      userName='CurrentlyLoggedPerson'
      userSecret=''
    />
  );
}

export default App;
