import React from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Header = () => {
  const styles = {
    header: {
      position: 'sticky',
      top: 0,
      backgroundColor: '#333',
      padding: '20px 0',
      textAlign: 'center',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
      width: '100%',
      boxSizing: 'border-box',
    },
    nav: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '30px',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    link: {
      fontSize: '20px',
      color: '#E5E5E5',
      textDecoration: 'none',
      fontFamily: 'Poppins, sans-serif',
      fontWeight: '500',
      transition: 'transform 0.3s, color 0.3s',
    },
  };

  const handleLinkMouseEnter = (e) => {
    gsap.to(e.target, {
      scale: 1.1,
      color: 'rgb(242, 242, 242)',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleLinkMouseLeave = (e) => {
    gsap.to(e.target, {
      scale: 1,
      color: '#E5E5E5',
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
