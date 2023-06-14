import { Routes, Route } from 'react-router-dom';
// import { ROUTES } from './routes';
import React from 'react';
import { ROUTES } from './routes';

export const AppRouter = () => (
    <Routes>
        {Object.values(ROUTES).map((item) => (
            <Route key={item.path} {...item} />
        ))}
        {/* <Route path='/' element={<>Main</>}/>
         <Route path='/about' element={<>About</>}/> */}
    </Routes>
);