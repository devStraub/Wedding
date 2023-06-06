import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './components/pages/home';
import About from './components/pages/about';
import Presentes from './components/pages/presentes';
import Convidados from './components/pages/convidados'

export const routes = [
  {
    path: '/',
    component: <Home/>,
    exact: true,
    labelEN: 'Home',
    labelPT: 'Início',    
  }, 
  {
    path: '/about',
    component: <About/>,
    exact: true,
    labelEN: 'About',    
    labelPT: 'Sobre',
  },   
  {
    path: '/presentes',
    component: <Presentes/>,
    exact: true,
    labelEN: 'Contracts', 
    labelPT: 'Presentes',   
  },      
  {
    path: '/convidados',
    component: <Convidados/>,
    exact: true,
    labelEN: 'Projects',
    labelPT: 'Convidados',    
  },    
];

export const RouteList = () => (
  <Routes>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        element={route.component}
      />
    ))}
  </Routes>
);

export default {
  RouteList,
  routes
}
