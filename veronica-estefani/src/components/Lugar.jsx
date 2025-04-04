import React from 'react';

//Estilos diseño
import './Home.css';
import './CuentaRegresiva.css';


const Lugar = () => {
  return (
    <>

        <div className='Lugar-container'>

                  <div className='title-Conutdown' style={{marginTop:'5rem'}}> Av. Principal de Las
                  <br /> Cuibas, Agua Viva. </div>
                  
                <div className='us-text'>
                    <a href='https://maps.app.goo.gl/W8vtAhKsb9moCqow9' style={{textDecoration:'none'}}>
                      <button className='btn-outline-one'
                          >Ver Ubicación
                      </button>
                    </a>
                </div>
        </div>  
    </>
  )
}

export default Lugar;