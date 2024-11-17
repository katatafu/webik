import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Services from './Services';
import MainPage from './MainPage'; // nebo jak máš komponentu pro hlavní stránku
import Footer from './Footer';

function App() {
  const styles = {
    appContainer: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh', // Zajistí, že stránka bude mít minimální výšku 100% okna
    },
    mainContent: {
      flex: 1, // Umožní hlavnímu obsahu zabrat zbytek prostoru mezi headerem a footerem
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
