import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Lab1 from './pages/Lab1';
import Lab2 from './pages/Lab2';
import Lab3Page from './pages/Lab3Page';
import NotFound from './pages/NotFound';
import CarProfile from './components/CarProfile';
import { data } from './data/module-data';
import AppReducer from './data/AppReducer';

const menuItems = [
  { id: 1, label: "Home", url: "/", urlPattern: "/" },
  { id: 2, label: "Laboratorium 1", url: "/lab1", urlPattern: "/lab1" },
  { id: 3, label: "Laboratorium 2", url: "/lab2", urlPattern: "/lab2" },
  { id: 4, label: "Laboratorium 3", url: "/lab3", urlPattern: "/lab3" },
  { id: 5, label: "Car Profile", url: "/car-profile", urlPattern: "/car-profile" }
];

function App() {
  const [cars, dispatch] = useReducer(AppReducer, data);

  return (
    <RootLayout items={menuItems}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lab1" element={<Lab1 />} />
        <Route path="/lab2" element={<Lab2 />} />
        <Route path="/lab3" element={<Lab3Page cars={cars} dispatch={dispatch} />} />
        <Route path="/car-profile" element={<CarProfile car={cars[0]} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </RootLayout>
  );
}

export default App;
