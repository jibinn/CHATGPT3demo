import React from 'react'
import { Brand ,Cta,Navbar} from './components'
import { Possibility,Blog,Footer,Header,Whatgpt3,Features} from './container'
import './app.css';



const App = () => {
  return (
  <div className='App'>
   <div className='gradient_bg'>
    <Navbar/>
    <Header/> 
    </div>
    <div>
      <Brand/>
      <Whatgpt3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>    
    </div>
      
    </div>
  )
}

export default App

