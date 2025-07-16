import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center text-white">
      <div className="flex gap-8 mb-8">
        <a 
          href="https://vite.dev" 
          target="_blank" 
          className="group"
        >
          <img 
            src={viteLogo} 
            className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa] group-hover:scale-110" 
            alt="Vite logo" 
          />
        </a>
        <a 
          href="https://react.dev" 
          target="_blank" 
          className="group"
        >
          <img 
            src={reactLogo} 
            className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] group-hover:scale-110 animate-spin-slow" 
            alt="React logo" 
          />
        </a>
      </div>
      
      <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 bg-clip-text text-transparent animate-gradient-x">
        {greeting}
      </h1>
      
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-2xl shadow-2xl max-w-md text-center backdrop-blur-sm">
        <button 
          onClick={changeGreeting}
          className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg mb-4"
        >
          Change Greeting 🎉
        </button>
        
        <p className="text-white mb-2 text-sm opacity-90">
          Welcome to your React + Vite project!
        </p>
        <p className="text-white text-sm opacity-90">
          Built with ❤️ using modern web technologies
        </p>
      </div>
      
      <p className="text-gray-400 mt-8 text-center italic">
        Click the button above to see different greetings from around the world!
      </p>
    </div>
  )
}

export default App
