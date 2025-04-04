import React from 'react';

//Estilos diseño
import './Home.css';
import './CuentaRegresiva.css';


const Lugar = () => {
  return (
    <>

        <div className='Lugar-container'>
          <div className='contenedor-titulos'></div>
                <div className='container-btn'>
                  <div className='title-Conutdown' > Referencias</div>
                    <a href='https://sites.google.com/view/veronica-y-estefani/p%C3%A1gina-principal?authuser=3' style={{textDecoration:'none'}}>
                      <button className='btn-outline-one' style={{marginTop:'3.5rem'}}
                          >CLICK AQUÍ
                      </button>
                    </a>
                </div>

                <div className='container-btn' style={{marginTop:'60%'}}>
                  <div className='title-Conutdown basic' > Confirmar asistencia</div>
                    <a href='https://wa.link/u5pktr' style={{textDecoration:'none', justifyContent:'center'}}>
                      <button className='btn-outline-one' style={{marginTop:'3.5rem'}}
                          >CLICK AQUÍ
                      </button>
                    </a>
                </div>
        </div>  
    </>
  )
}

export default Lugar;