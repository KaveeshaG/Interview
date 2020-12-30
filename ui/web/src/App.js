import React from 'react';
// Importing the Context Provider & Login Component
import MyContextProvider from './context/MyContext';
import Login from './components/Login'

function App() {
  return (
    <MyContextProvider>
        <Login/>
    </MyContextProvider>
  );
}

export default App;