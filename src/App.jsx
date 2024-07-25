import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Appbar from './components/appbar';
import Home from './components/home';
import './index.css'





function App() {

  return (
    <>
      
       <BrowserRouter>

   

       <Appbar></Appbar>

       
       <Routes>
           <Route index element={<Home />} />
          
        </Routes>


        </BrowserRouter>



      
    </>
  )
}

export default App
