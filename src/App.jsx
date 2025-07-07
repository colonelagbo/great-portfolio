import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Home } from "./pages/Home";


function App() {
 
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route index element ={<Home />}/>
      <Route  path="*" element={<NotFound />}/>
     </Routes>
    </BrowserRouter>
    
        </>
  )
}

export default App
