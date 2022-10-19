import React from 'react'

// CSS
import '../Style/AboutMeStyle.css'

const AboutMe = () => {
  return (
    <div className='div-aboutMe'>
      <div>
        <h1 className='titulo-about'>About Me</h1>
      </div>

      <div className='div-parrafo-about'>
        <p>Hello, I am a frontend developer located in Colombia. I am a self-taught student. Developing frontend projects is one of my greatest passions. I also like that the user always has a dynamic experience.</p>
        <br />
        <p>I am very passionate about creating things related to technology and art. I enjoy learning from platforms that help me improve my skills, such as FreeCodeCamp, Academia X, OpenBootcamp and TheOdinProject.</p>
        <br />
        <p>I am organized and like to solve problems independently. In my free time I like to read books, watch movies, series and exercise.</p>
      </div>
    </div>
  )
}

export default AboutMe