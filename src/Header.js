import React from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Header = () => {
  const styles = {
    header: {
      position: 'sticky', // Zajišťuje, že header zůstane na vrcholu stránky při scrollování
      top: 0, // Udržuje header na začátku stránky
      backgroundColor: '#333', // Tmavě šedé pozadí pro header
      padding: '20px 0',
      textAlign: 'center',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Dolní stín pro lepší vzhled
      zIndex: 1000, // Aby byl header vždy nad ostatním obsahem
      width: '100%', // Zajišťuje, že header bude mít šířku 100%
      boxSizing: 'border-box', // Zajistí, že padding nebude ovlivňovat šířku headeru
    },
    nav: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '30px',
      width: '100%',
      maxWidth: '1200px', // Zajišťuje, že obsah se nezvětší nad určitou šířku
      margin: '0 auto', // Horizontálně centrování
    },
    link: {
      fontSize: '20px',
      color: '#E5E5E5', // Světle šedá barva textu
      textDecoration: 'none',
      fontFamily: 'Poppins, sans-serif',
      fontWeight: '500',
      transition: 'transform 0.3s, color 0.3s',
    },
  };

  const handleLinkMouseEnter = (e) => {
    gsap.to(e.target, {
      scale: 1.1,
      color: 'rgb(0, 255, 0)', // Zelená barva při hoveru
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleLinkMouseLeave = (e) => {
    gsap.to(e.target, {
      scale: 1,
      color: '#E5E5E5', // Světle šedá barva při opuštění
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link
          to="/"
          style={styles.link}
          onMouseEnter={handleLinkMouseEnter}
          onMouseLeave={handleLinkMouseLeave}
        >
          Hlavní stránka
        </Link>
        <Link
          to="/about"
          style={styles.link}
          onMouseEnter={handleLinkMouseEnter}
          onMouseLeave={handleLinkMouseLeave}
        >
          O mně
        </Link>
        <Link
          to="/services"
          style={styles.link}
          onMouseEnter={handleLinkMouseEnter}
          onMouseLeave={handleLinkMouseLeave}
        >
          Služby
        </Link>
      </nav>
    </header>
  );
};

export default Header;
