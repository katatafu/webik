import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const About = () => {
  const buttonRef1 = useRef();
  const buttonRef2 = useRef();
  const contentRef = useRef();
  const textRef1 = useRef();
  const textRef2 = useRef();
  const headingRef1 = useRef();
  const headingRef2 = useRef();

  useEffect(() => {
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

    // Animace pro texty
    gsap.fromTo(
      [textRef1.current, textRef2.current],
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

  const handleButtonMouseEnter = (buttonRef) => {
    gsap.to(buttonRef, {
      scale: 1.1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleButtonMouseLeave = (buttonRef) => {
    gsap.to(buttonRef, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleHeadingMouseEnter = (headingRef) => {
    gsap.to(headingRef, {
      scale: 1.2,
      duration: 0.3,
      ease: 'power2.out',
      color: 'rgb(128, 128, 128)',
    });
  };

  const handleHeadingMouseLeave = (headingRef) => {
    gsap.to(headingRef, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
      color: '#E5E5E5',
    });
  };

  const styles = {
    about: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#333',
      paddingTop: '0px',
      textAlign: 'center',
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
    content: {
      display: 'flex',
      justifyContent: 'space-between', // Rozdělení na dva sloupce
      alignItems: 'flex-start',
      width: '80%',
      marginTop: '-150px', // Posunutí textu blíž k hlavičce
      padding: '20px',
    },
    textContent: {
      width: '45%', // Nastavení šířky sloupců
      fontSize: '18px',
      color: '#E5E5E5',
      fontFamily: 'Poppins, sans-serif',
      lineHeight: '1.6',
    },
    loremText: {
      fontSize: '18px',
      color: '#E5E5E5',
      fontFamily: 'Poppins, sans-serif',
      lineHeight: '1.6',
    },
  };

  return (
    <div style={styles.about}>
      <div style={styles.content} ref={contentRef}>
        {/* První sloupec s textem */}
        <div style={styles.textContent} ref={textRef1}>
          <h3
            ref={headingRef1}
            onMouseEnter={() => handleHeadingMouseEnter(headingRef1)}
            onMouseLeave={() => handleHeadingMouseLeave(headingRef1)}
          >
            O mně
          </h3>
          <p>
          Jmenuji se Petr Vaculík a jsem nadšenec do technologií a digitálního světa. Mám 34 let zkušeností v oblasti webového vývoje a grafického designu.
Miluji kreativitu, jednoduchost a efektivitu, což promítám do každého projektu. Mojí prioritou je klientská spokojenost a doručování výsledků, které skutečně fungují.
Společně můžeme vytvořit něco mimořádného!
          </p>
        </div>

        {/* Druhý sloupec s textem Lorem Ipsum */}
        <div style={styles.textContent} ref={textRef2}>
          <h3
            ref={headingRef2}
            onMouseEnter={() => handleHeadingMouseEnter(headingRef2)}
            onMouseLeave={() => handleHeadingMouseLeave(headingRef2)}
          >
            Život
          </h3>
          <p style={styles.loremText}>
          Ve volném čase rád experimentuji s novými technologiemi, cestuji a hledám inspiraci pro své projekty. Můj cíl je nejen vytvářet funkční aplikace, ale také přinášet klientům skutečnou hodnotu prostřednictvím kvalitních digitálních řešení.
          </p>
        </div>
      </div>

      {/* Tlačítka */}
      <div style={styles.buttons}>
        <Link
          to="/"
          style={styles.button}
          ref={buttonRef1}
          onMouseEnter={() => handleButtonMouseEnter(buttonRef1)}
          onMouseLeave={() => handleButtonMouseLeave(buttonRef1)}
        >
          Hlavní stránka
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

      {/* Přidání footeru */}
      <Footer />
    </div>
  );
};

export default About;
