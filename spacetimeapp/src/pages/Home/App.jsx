import React from 'react'
import Header from '../../components/Header/header'
import './App.css'
import SlipDown from '../../components/SlipDown/slipdown'
import CuriosityCard from '../../components/CuriosityCard/curiositycard'


function App() {
  return (
    <div>
      <Header />  
      <SlipDown />

      <section className='curiosity-content'>
        <div className='title-curiosity'>
          <h1>CURIOSIDADES ESPACIAIS</h1>
          <hr className='bottom-line' />
        </div>

         <CuriosityCard /> 
           
      </section>

    </div>
  )
    
    
}

export default App
