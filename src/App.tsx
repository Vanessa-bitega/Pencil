import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CreatePage from './components/pencil/index';
// import LoadingGif from './components/Gif/vid';

function App() {
  

  return (<div className='App'>

  
   <CreatePage/>
    {/* <LoadingGif/>   */}
    {/* <img src={LoadingGif} alt="wait until the page loads" /> */}
   </div>
  )
}

export default App
