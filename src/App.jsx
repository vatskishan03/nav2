import React, { Suspense,useState } from 'react'
import { BrowserRouter,Router, Route, Routes,useNavigate} from 'react-router-dom'
const Landing=React.lazy(()=>import('./components/Landing'))
const Dashboard= React.lazy(()=>import('./components/Dashboard'))
import './App.css'
function App() {
  
  return (
  <div>
    <BrowserRouter>
      <Appbar/>
      <Routes>
        <Route path="/dashboard" element={<Suspense fallback ={"Loading..."}>
          <Dashboard/>
          </Suspense>}/>
        <Route path="/landing" element={<Suspense fallback ={"Loading.."}><Landing/>
        </Suspense>} />
      </Routes>

    </BrowserRouter>
  </div>
    
  ) 

}

function Appbar(){
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={()=>{
        navigate("/");
      }}>Landing Page </button>
      <button onClick={()=>{
        navigate("/dashboard");
      }
      }>Dashboard</button>
    </div>
  )
}

export default App
