import React from 'react';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import ContactMe from './components/ContactMe';
import MyParticles from './components/MyParticles';
import './App.css';

const App = () => {

  return (
    <div className="app">
      <MyParticles />
      <Introduction />
      <Projects />
      <Achievements />
      <ContactMe />
    </div>
  );
}

export default App;
