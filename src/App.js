import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Services from './Services';
import MainPage from './MainPage';
import Footer from './Footer';

function App() {
  const styles = {
    appContainer: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    mainContent: {
      flex: 1,
    },
  };

  return (
    <Router>
      <div style={styles.appContainer}>
        <Header />
        <div style={styles.mainContent}>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/main" element={<MainPage />} /> {/* Opravený link na Main komponentu */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
