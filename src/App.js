import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import HeroContainer from './components/HeroContainer'
import Cards from './components/Cards'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <HeroContainer/>
      <Cards/>
      <Footer/>
    </>
  );
}

export default App;
