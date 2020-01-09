import React from 'react';

// importing all components
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

import './App.css';

export default function App() {
  // Created component Header for apply the Principle S - Single responsibility principle

  return (
    // Principle I - Interface Segregation Principle
    <div className="App">
        {/* Header component */}
        <Header />
        {/* Content component */}
        <Content name="Deusimar" />
        {/* Footer component */}
        <Footer />
    </div>
  );
}
