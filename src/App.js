import React from 'react';
import Header from './component/header/index'
import Headline from './component/headline/index'
import './app.scss';

function App() {
  return (
    <div className="App">
     <Header />
     <section className = "main">
       <Headline header="Posts" desc="Click the button to render posts!"/>
     </section>
    </div>
  );
}

export default App;