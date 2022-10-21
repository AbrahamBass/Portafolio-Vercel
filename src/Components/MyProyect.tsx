import React from 'react'

import '../Style/ProyectStyle.css'

const MyProyect = () => {
  return (
    <div className='div-my-proyects'>
      <div>
        <h1 className='titulo-proyects'>My Proyects</h1>
      </div>
      <div className='proyect'>
        <div className='proyect-weather'>
          <a href="https://weather-application-lemon.vercel.app/">
            <h3>Weather Application</h3>
            <p>HTML | CSS | REACT</p>
          </a>
        </div>
        <div className='proyect-rick'>
          <a href="https://ricks-and-mortys-characters.netlify.app/">
            <h3>Rick And Morty</h3>
            <p>HTML | CSS | ANGULAR</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default MyProyect ;