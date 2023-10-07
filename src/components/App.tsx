// src/components/App.tsx
import React from 'react';
import Header from './Header';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import '../style.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Education />
      <Experience />
      <Skills />
    </div>
  );
};

export default App;
