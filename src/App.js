import { ChatEngine } from 'react-chat-engine'
import './App.css'
import LoginPage from './components/LoginPage';

function App() {

  function handleLogout() {

    localStorage.removeItem('chatting-app-username')
    localStorage.removeItem('chatting-app-password')

    window.location.reload();
  } 

  if( !localStorage.getItem('chatting-app-username') ) return <LoginPage />

  return (
    <>
      <div style={{ position: 'relative'}}>
        <ChatEngine 
          height='100vh'
          projectID='3659119a-1ea1-4d86-acf9-1ebc1b3ae6fa'
          userName={ localStorage.getItem('chatting-app-username') }
          userSecret={ localStorage.getItem('chatting-app-password') }
        />
      </div>
      <h4 className='logout' onClick={handleLogout}><em> Logout  </em> </h4>
    </>
  );
}

export default App;
