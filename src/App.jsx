import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [greeting, setGreeting] = useState('Hello World!')

  const greetings = [
    'Hello World! 🌍',
    'สวัสดีชาวโลก! 🇹🇭',
    'こんにちは世界! 🇯🇵',
    'Hola Mundo! 🇪🇸',
    'Bonjour le Monde! 🇫🇷'
  ]

  const changeGreeting = () => {
    const randomIndex = Math.floor(Math.random() * greetings.length)
    setGreeting(greetings[randomIndex])
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{greeting}</h1>
      <div className="card">
        <button onClick={changeGreeting}>
          Change Greeting 🎉
        </button>
        <p>
          Welcome to your React + Vite project!
        </p>
        <p>
          Built with ❤️ using modern web technologies
        </p>
      </div>
      <p className="read-the-docs">
        Click the button above to see different greetings from around the world!
      </p>
    </>
  )
}

export default App
