import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoaderProvider } from './context/LoaderContext';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalLoader from './components/GlobalLoader';
import Home from './pages/Home';
import Patients from './pages/Patients';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <LoaderProvider>
      <Router>
        <div className="App min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
          <GlobalLoader />
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LoaderProvider>
  );
}

export default App;
