import { BrowserRouter, Routes, Route, useNavigate, useLocation} from 'react-router-dom'

import Appbar from './components/appbar';
import Home from './components/home';
import './index.css'
import React from 'react';




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
