import React, { useState } from 'react'

const LoginPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async event => {
        event.preventDefault();
        
        const authObject = { 'Project-ID': '3659119a-1ea1-4d86-acf9-1ebc1b3ae6fa', 'User-Name': username, 'User-Secret': password}

        await fetch('https://api.chatengine.io/chats',{ headers: authObject } )
            .then( res => {
                if( res.ok ) {
                    localStorage.setItem('chatting-app-username', username)
                    localStorage.setItem('chatting-app-password', password)

                    window.location.reload()
                }
                else {
                    setError('Oops, Invalid Credentials!')
                }
            })
            .catch( error => console.log('An error occured', error))
    }

    return (
        <div className='wrapper'>
            <div>
                <h1 className='title'> Advance Chatting App</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' className='input' value={username} 
                           onChange={ event => setUsername(event.target.value) } placeholder='Username' required />
                    <input type='password' className='input' value={password} 
                           onChange={ event => setPassword(event.target.value) } placeholder='Password' required />
                    <div align='center'>
                        <button type='submit' className='button'>
                            <span> Start Chatting </span>    
                        </button>
                    </div>
                    <h2 className='error'> {error} </h2>
                </form>
            </div>
            
        </div>
    )
}

export default LoginPage
