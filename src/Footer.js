import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      position: 'fixed', // Udržuje footer vždy na spodní části obrazovky
      bottom: 0,
      left: 0,
      width: '100%', // Zajišťuje, že footer zabere celou šířku stránky
      backgroundColor: '#222', // Tmavě šedé pozadí
      color: '#fff', // Bílý text
      padding: '20px 0',
      textAlign: 'center',
      fontFamily: 'Poppins, sans-serif',
      zIndex: 1000, // Zajišťuje, že footer je nad obsahem
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
