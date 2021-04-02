import { ChatEngine } from 'react-chat-engine'

import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'
import './App.css'

const projectID = '3c391d24-9ca3-45be-8981-9e7accff8cc2'

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height='100vh'
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          'https://chat-engine-assets.s3.amazonaws.com/click.mp3'
        ).play()
      }
    />
  )
}

// infinite scroll, logout, more customizations...

export default App
