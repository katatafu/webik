import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Services = () => {
  const textRef = useRef();
  const buttonRef1 = useRef();
  const buttonRef2 = useRef();
  const serviceRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      }
    );

    gsap.fromTo(
      [buttonRef1.current, buttonRef2.current],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
        stagger: 0.2,
      }
    );

    gsap.fromTo(
      serviceRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.3,
      }
    );
  }, []);

  const handleServiceMouseEnter = (serviceRef) => {
    gsap.to(serviceRef, {
      scale: 1.05,
      backgroundColor: '#555',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleServiceMouseLeave = (serviceRef) => {
    gsap.to(serviceRef, {
      scale: 1,
      backgroundColor: '#444',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleTextMouseEnter = () => {
    gsap.to(textRef.current, {
      scale: 1.2,
      color: 'rgb(128, 128, 128)',
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const handleTextMouseLeave = () => {
    gsap.to(textRef.current, {
      scale: 1,
      color: '#E5E5E5',
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const styles = {
    services: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#333',
      paddingTop: '0px',
      textAlign: 'center',
    },
    text: {
      fontSize: '96px',
      fontWeight: 'bold',
      color: '#E5E5E5',
      textAlign: 'center',
      marginBottom: '20px',
      fontFamily: 'Poppins, sans-serif',
      lineHeight: '1.2',
      padding: '0 20px',
    },
    serviceList: {
      width: '80%',
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px',
      textAlign: 'left',
      marginTop: '40px',
    },
    serviceItem: {
      backgroundColor: '#444',
      padding: '20px',
      borderRadius: '8px',
      color: '#E5E5E5',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '18px',
      lineHeight: '1.6',
      transition: 'transform 0.3s, background-color 0.3s',
    },
    buttons: {
      marginTop: '20px',
      display: 'flex',
      gap: '15px',
    },
    button: {
      padding: '12px 30px',
      fontSize: '18px',
      color: '#fff',
      backgroundColor: 'rgb(128, 128, 128)',
      border: 'none',
      borderRadius: '5px',
      textDecoration: 'none',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.3s',
      fontFamily: 'Poppins, sans-serif',
    },
  };

  return (
    <div style={styles.services}>
      <div
        ref={textRef}
        style={styles.text}
        onMouseEnter={handleTextMouseEnter}
        onMouseLeave={handleTextMouseLeave}
      >
        Naše Služby
      </div>

      <div style={styles.serviceList}>
        {[
          { title: 'Webový vývoj', text: 'Vytváříme přehledné a funkční webové stránky na míru s moderními technologiemi. Naše weby jsou responzivní, optimalizované a bezpečné.' },
          { title: 'E-commerce řešení', text: 'Nabízíme komplexní e-commerce platformy, které usnadňují prodej produktů online. Zajistíme snadné nákupy a správu obchodů.' },
        ].map((service, index) => (
          <div
            key={index}
            style={styles.serviceItem}
            ref={(el) => (serviceRefs.current[index] = el)}
            onMouseEnter={() => handleServiceMouseEnter(serviceRefs.current[index])}
            onMouseLeave={() => handleServiceMouseLeave(serviceRefs.current[index])}
          >
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </div>
        ))}
      </div>

      <div style={styles.buttons}>
        <Link
          to="/main"
          style={styles.button}
          ref={buttonRef1}
          onMouseEnter={() => handleServiceMouseEnter(buttonRef1)}
          onMouseLeave={() => handleServiceMouseLeave(buttonRef1)}
        >
          Hlavní stránka
        </Link>
        <Link
          to="/about"
          style={styles.button}
          ref={buttonRef2}
          onMouseEnter={() => handleServiceMouseEnter(buttonRef2)}
          onMouseLeave={() => handleServiceMouseLeave(buttonRef2)}
        >
          O mně
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
