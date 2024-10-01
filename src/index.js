import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Tabela from './tabela'

//New
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
       <Routes>
         <Route path='/' element={<App/>} />
         <Route path='/:id' element={<App/>} />
          <Route path='/tabela' element={<Tabela/>}/>
       </Routes>
     </BrowserRouter>
  </React.StrictMode>
);







