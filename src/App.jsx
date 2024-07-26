import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Hero/>
      <Experience/>
      <Portfolio/>
      <Contact/>
    </div>
  );
};

export default App
