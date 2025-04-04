import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Paginas de la Web
import Home from '../components/Home';

const AppRouter = () => {
  return (
    <div>
        <Router>
            <div >
                            
                    <Routes>
                        <Route path="/" element={ <Home/> }></Route>
                    </Routes>
            </div> 
        </Router>
    </div>
  )
}

export default AppRouter;