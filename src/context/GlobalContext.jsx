// src/context/GlobalContext.jsx
import React, { createContext, useState } from 'react';

// Creamos el contexto global, que actuará como un contenedor para la información compartida
export const GlobalContext = createContext();

// GlobalProvider es el componente que encapsula nuestra aplicación y provee el estado global a sus hijos
export const GlobalProvider = ({ children }) => {
  // Mantenemos el estado del tema (light o dark)
  const [theme, setTheme] = useState('light');

  // toggleTheme: función para alternar el estado del tema, demostrando cómo se puede modificar el estado global
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    // Los componentes hijos podrán acceder a 'theme' y 'toggleTheme' mediante useContext
    <GlobalContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};
