import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import Footer from './Footer'; // Import Footer komponenty

const Main = () => {
  const textRef = useRef();
  const buttonRef1 = useRef();
  const buttonRef2 = useRef();
  const contentRef = useRef();

  useEffect(() => {
    // Animace pro hlavní text, který se pohybuje zespoda
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

    // Animace pro tlačítka
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

    // Animace pro celý obsah
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
      }
    );
  }, []);

  // Funkce pro animaci zvětšení textu při najetí myší
  const handleTextMouseEnter = () => {
    gsap.to(textRef.current, {
      scale: 1.2,
      color: 'rgb(0, 255, 0)', // Zelená barva textu
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  // Funkce pro vrácení textu zpět při opuštění myši
  const handleTextMouseLeave = () => {
    gsap.to(textRef.current, {
      scale: 1,
      color: '#E5E5E5', // Světle šedá barva textu
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  // Funkce pro animaci zvětšení tlačítek při najetí myší
  const handleButtonMouseEnter = (buttonRef) => {
    gsap.to(buttonRef, {
      scale: 1.1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  // Funkce pro vrácení tlačítka zpět při opuštění myši
  const handleButtonMouseLeave = (buttonRef) => {
    gsap.to(buttonRef, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const styles = {
    main: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'calc(100vh - 80px)', // Výška obsahující header
      backgroundColor: '#333', // Černé pozadí
      paddingTop: '0px',
      textAlign: 'center',
      marginBottom: '80px', // Zajistí, že footer nebude překrývat obsah
    },
    text: {
      fontSize: '96px',
      fontWeight: 'bold',
      color: '#E5E5E5', // Světle šedá barva textu
      textAlign: 'center',
      marginBottom: '20px',
      fontFamily: 'Poppins, sans-serif',
      lineHeight: '1.2',
      padding: '0 20px',
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
      backgroundColor: 'rgb(0, 255, 0)', // Zelená barva pozadí tlačítek
      border: 'none',
      borderRadius: '5px',
      textDecoration: 'none',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.3s',
      fontFamily: 'Poppins, sans-serif',
    },
    content: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '80%',
      marginTop: '50px',
    },
    textContent: {
      width: '100%',
      fontSize: '18px',
      color: '#E5E5E5', // Světle šedý text
      fontFamily: 'Poppins, sans-serif',
      lineHeight: '1.6',
    },
  };

  return (
    <main style={styles.main}>
      <div
        ref={textRef}
        style={styles.text}
        onMouseEnter={handleTextMouseEnter}
        onMouseLeave={handleTextMouseLeave}
      >
        Vítejte na mém webu!
      </div>

      <div style={styles.buttons}>
        <Link
          to="/about"
          style={styles.button}
          ref={buttonRef1}
          onMouseEnter={() => handleButtonMouseEnter(buttonRef1)}
          onMouseLeave={() => handleButtonMouseLeave(buttonRef1)}
        >
          O mně
        </Link>
        <Link
          to="/services"
          style={styles.button}
          ref={buttonRef2}
          onMouseEnter={() => handleButtonMouseEnter(buttonRef2)}
          onMouseLeave={() => handleButtonMouseLeave(buttonRef2)}
        >
          Služby
        </Link>
      </div>

      <div ref={contentRef} style={styles.content}>
        <div style={styles.textContent}>
          <h3>Vítejte na naší webové stránce!</h3>
          <p>
          
          Jsme specialisté na moderní technologie a inovativní řešení, která vám pomohou uspět ve světě digitálního podnikání. Prohlédněte si naše služby a zjistěte, jak vám můžeme pomoci vytvořit výjimečný online zážitek. S námi je budoucnost na dosah!
          </p>
        </div>
      </div>

      {/* Přidání Footeru */}
      <Footer />
    </main>
  );
};

export default Main;
