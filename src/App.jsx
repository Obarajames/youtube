import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function App() {
  return (
    <>
     <header>
      <nav>
        <div className="nav-left">
          <h1>Earth Story</h1>
        </div>
        <div className="nav-center">
          <input type="text" placeholder='Search about earth' />
          
        </div>
        <div className="nav-right">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
      <div className="heading">
        <h2>"Discover, Learn, Preserve: Unleashing the Power of Earth's Wisdom"</h2>
      </div>
     </header>
     <div className="container">
      <h1>Category</h1>
      <div className="gallary">
      <a href = "./images/Earth Banner.jpg">
         <div class = "single-img">
             <img src = "./images/Earth Banner.jpg" alt = "gallery image"/>
             <div class = "single-img-content">
             <h3>Naivasha Camp 2023</h3>
            </div>
          </div>
             </a>
      <a href = "./images/Earth Banner.jpg">
         <div class = "single-img">
             <img src = "./images/Earth Banner.jpg" alt = "gallery image"/>
             <div class = "single-img-content">
             <h3>Naivasha Camp 2023</h3>
            </div>
          </div>
             </a>
      <a href = "./images/Earth Banner.jpg">
         <div class = "single-img">
             <img src = "./images/Earth Banner.jpg" alt = "gallery image"/>
             <div class = "single-img-content">
             <h3>Naivasha Camp 2023</h3>
            </div>
          </div>
             </a>
      </div>
     </div>
    </>
    
    
  )
}

export default App
