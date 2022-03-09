
import './App.css';
import storeInstance from './store/Store'
import React from 'react';
import Post from './components/Post'
export const StoreContext = React.createContext();

function App() {
  return (
    <StoreContext.Provider value={storeInstance}>
        <Post />
    </StoreContext.Provider >
  );
}

export default App;
