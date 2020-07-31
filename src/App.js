import React from 'react';
import Header from './component/header/index'
import Headline from './component/headline/index'
import './app.scss';

const temArr = [{
  fName: 'Elon',
  lName: 'Musk',
  email:'test@gmail.com',
  age: 24,
  onlineStatus: true
}]
function App() {
  return (
    <div className="App">
     <Header />
     <section className = "main">
       <Headline header="Posts" desc="Click the button to render posts!" temArr = {temArr}/>
     </section>
    </div>
  );
}

export default App;