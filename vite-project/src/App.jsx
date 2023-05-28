import { React } from 'react'
import './App.css'
import {Navbar} from './components/Navbar';
import {Hero} from './components/Hero.jsx';
import {Card} from './components/Card.jsx';
import {data} from '../data.js';

function App() {
  const renderCardsArr = data.map(item => {
    return  (<Card
              key={item.id}
              {...item}
          />);
  });
  return (
    <>
      <Navbar/>
      <Hero/>
      <section className="cards-list">
          {renderCardsArr}
      </section>
    </>
  )
}

export default App 
