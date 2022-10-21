

// CSS
import '../Style/HomeStyle.css'

// Component
import Present from '../Components/Present'
import AboutMe from '../Components/AboutMe'
import Skills from '../Components/Skills'
import MyProyect from '../Components/MyProyect'

//IMAGENES
import Uno from '../Img/1.svg'
import Dos from '../Img/2.svg'
import Tres from '../Img/3.svg'
import Cuatro from '../Img/4.svg'

const HomePage = () => {
  
  

  return (
    <div className='contenedor-app'>

      <div className='div-present'>
        <Present />
      </div>
      <div className='div-about'>
        <AboutMe />
      </div>
      <div className='div-proyects'>
        <MyProyect />
      </div>
      <div className='div-skills'>
        <Skills />
      </div>

      <div className='circulos'>
        <img src={Uno} alt="img" className='img-1'/>
        <img src={Dos} alt="img"  className='img-2'/>
        <img src={Tres} alt="img"  className='img-3'/>
        <img src={Cuatro} alt="img"  className='img-4'/>
      </div>
      
    </div>
  )
}

export default HomePage