
import './App.css';
import React from 'react' ;
import FullName from './profil/FullName' ;
import Adress from './profil/Adress' ;
import Photo from './profil/taswirti.jpg' ;







function App() {
  return (
    <div className="App">
      <FullName/>
      <Adress/>
      <img  src={Photo}/>
      
    </div>
  );
}

export default App;
