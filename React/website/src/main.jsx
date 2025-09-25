import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Github, { githubInfoLoader } from './components/Github.jsx'
import User from './components/User.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/user/:userid' element={<User/>}/>
      <Route 
      loader={githubInfoLoader}
      path='github'
      element={<Github/>}></Route>
    </Route> 
  )
)

function ErrorBoundary({ error }) {
  return (
    <div className='text-red text-2xl text-bold'>
      <h2>Oops! Something went wrong.</h2>
      <p>{error.message}</p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
