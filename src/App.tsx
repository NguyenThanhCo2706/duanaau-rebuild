import React from 'react';
import logo from './logo.svg';
// import './css/bootstrap.min.css';
import './css/duhoc.min.css';
import './css/duhocmini.css';
import './css/font-awesome.css';
import './css/layerslider.css';
import './css/owl.carousel.min.css';
import './css/style-menu.css'
import './css/skin.css'

import Header from './header';
import Session from './session';
import { Content } from './content';

function App() {
  return (
    <div className="App">
      <Header />
      <Session />
      <Content />
    </div>
  );
}

export default App;
