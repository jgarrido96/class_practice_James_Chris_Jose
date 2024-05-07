import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Coffees from './components/Coffees'
import Teas from './components/Teas'
import Pastries from './components/Pastries'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Coffees initialMenu={[{name: 'Drip Coffee', price: .45, description: 'Hot'}, {name: 'Espresso', price: 4.50, description: 'Fast'}, {name: 'Latte', price: 5.65, description: 'Fancy'}]}/>
    <Teas initialTea={['Black Tea', 'Earl Grey', 'Chamomile']}/>
    <Pastries initialPastries={['Cinnamon Bun', "Danish", "Muffin"]}/>
    </>
  )
}

export default App
