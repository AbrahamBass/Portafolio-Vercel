import React from 'react'

// CSS
import '../Style/AboutMeStyle.css'

const AboutMe = () => {
  return (
    <div className='div-aboutMe'>
      <div>
        <h1 className='titulo-about'>Sobre Mi</h1>
      </div>

      <div className='div-parrafo-about'>
        <p>Hola, soy un desarrollador frontend ubicado en Colombia. Soy un estudiante autodidacta. Desarrollar proyectos frontend es una de mis mayores pasiones. También me gusta que el usuario siempre tenga una experiencia dinámica.</p>
        <br />
        <p>Me apasiona mucho crear cosas relacionadas con la tecnología y el arte. Disfruto aprendiendo de plataformas que me ayudan a mejorar mis habilidades, como FreeCodeCamp, Academia X, OpenBootcamp y TheOdinProject.</p>
        <br />
        <p>Soy organizado y me gusta resolver problemas de forma independiente. En mi tiempo libre me gusta leer libros, ver películas, series y hacer ejercicio.</p>
      </div>
    </div>
  )
}

export default AboutMe