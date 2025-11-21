import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Features from './components/Features';
import Flow from './components/Flow';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-yasumou-blue selection:text-white">
      <Header />
      <main>
        <Hero />
        <Concept />
        <Features />
        <Flow />
      </main>
      <Footer />
    </div>
  );
};

export default App;