import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#222',
      color: '#fff',
      padding: '20px 0',
      textAlign: 'center',
      fontFamily: 'Poppins, sans-serif',
      zIndex: 1000,
    },
    contact: {
      fontSize: '16px',
      margin: '5px 0',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.contact}>Telefon: +420 123 456 789</div>
      <div style={styles.contact}>Email: webik@gmail.com.cz</div>
    </footer>
  );
};

export default Footer;
