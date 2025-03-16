import { useReducer } from 'react';

// Definimos las acciones posibles para nuestro contador
const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset'
};

// Reducer: función pura que define cómo se actualiza el estado en función de la acción recibida
const counterReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return state + 1; // Suma uno al contador
    case ACTIONS.DECREMENT:
      return state - 1; // Resta uno del contador
    case ACTIONS.RESET:
      return 0; // Reinicia el contador a cero
    default:
      return state;
  }
};

// Custom Hook que encapsula la lógica del contador, haciéndolo fácilmente reutilizable
export const useCounter = (initialValue = 0) => {
  const [count, dispatch] = useReducer(counterReducer, initialValue);

  // Funciones que abstraen la lógica de despacho de acciones
  const increment = () => dispatch({ type: ACTIONS.INCREMENT });
  const decrement = () => dispatch({ type: ACTIONS.DECREMENT });
  const reset = () => dispatch({ type: ACTIONS.RESET });

  return { count, increment, decrement, reset };
};
