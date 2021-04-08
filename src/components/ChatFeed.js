import React from 'react'
import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'

const ChatFeed = (props) => {

    const { chats, activeChat, userName, messages } = props;
    
    const chat = chats && chats[activeChat]             // If chat exists 
    // console.log('chat: ', chat);

    const renderMessage = () => {
        const keys = Object.keys(messages)
        console.log( keys )

        return keys.map( (key, index) => {
            const msg = messages[key];
            const lastMsg = index === 0 ? null : keys[index-1]
            const isMyMsg = userName === msg.sender.username                // userName is a property passed from props

            return (
                <div key={` msg_${index}`} style={{ width: '100%' }}>
                    <div className='message-block'>
                        { isMyMsg ? <MyMessage /> : <TheirMessage /> }
                    </div>
                    <div className='read-receipts' style={{ marginRight: isMyMsg ? '18px' : '0px', marginLeft: isMyMsg ? '0px' : '68px', }}>
                        read-receipts
                    </div>
                </div>
            )
        })
    }

    renderMessage()

    if( !chat ) return 'Loading ... '

    return (
        <div className='chat-feed'>
            <div className='chat-title-container'>
                <div className='chat-title'>
                    { chat?.title }               {/* ? question mark here check that the chat exists before we access title */}
                </div>
            </div>
        </div>
    );
}

export default ChatFeed

