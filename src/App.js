import React from 'react';
import Carousel from './components/Carousel';
import Slide from './components/Slide/Slide';
function App() {
  return (
    <div className="App" style={{display: 'flex', flexWrap:'wrap', flexDirection: 'row', justifyContent: 'center'}}>
        <Carousel />
        <hr style={{width: '100%'}}></hr>
        <Slide />
    </div>
  );
}

export default App;
