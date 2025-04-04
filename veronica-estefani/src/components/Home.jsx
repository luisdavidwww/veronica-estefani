import React, { useRef } from 'react';

//componentes
import Navbar from '../components/Navbar';
import Invitado from '../components/Invitado';
import CuentaRegresiva from '../components/CuentaRegresiva';
import Fecha from '../components/Fecha';
import Lugar from '../components/Lugar';

//Estilos diseño
import './Home.css';

const Home = () => {

  const invitadoRef = useRef(null);
  const fechaRef = useRef(null);
  const CuentaRegresivaRef = useRef(null);
  const lugarRef = useRef(null);
  const confirmaRef = useRef(null);

  //Metodo para ubicar las secciones en pantalla
  const scrollToSection = (ref) => {
    const targetPosition = ref.current.getBoundingClientRect().top + window.scrollY - 80;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 800; // Duración del desplazamiento en milisegundos
    let startTime = null;
  
    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
  
    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };
  
    requestAnimationFrame(animation);
  };


  return (
    <>
      <Navbar 
        scrollToSection={scrollToSection} 
        refs={{ 
          invitadoRef, 
          fechaRef, 
          CuentaRegresivaRef, 
          lugarRef, 
          confirmaRef 
        }} 

      />
        <div className='header-container'></div>  

          <div  ref={invitadoRef}>
            <Invitado/>
          </div>  
          <div ref={CuentaRegresivaRef}>
            <CuentaRegresiva />  
          </div> 
          <div ref={fechaRef}>
            <Fecha />
          </div>  
          <div ref={lugarRef}>
            <Lugar />  
          </div>   


    </>
  )
}

export default Home