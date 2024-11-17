// src/Cursor.js
import React, { useState, useEffect } from 'react';

const Cursor = () => {
  const [cursorStyle, setCursorStyle] = useState({
    top: '0px',
    left: '0px',
    transform: 'scale(1)',
  });

  useEffect(() => {
    // Handle mouse movement
    const handleMouseMove = (e) => {
      setCursorStyle({
        top: `${e.clientY - 15}px`,
        left: `${e.clientX - 15}px`,
        transform: cursorStyle.transform,
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cursorStyle.transform]);

  // Enlarge the cursor when mouse enters
  const handleMouseEnter = () => {
    setCursorStyle((prev) => ({
      ...prev,
      transform: 'scale(1.5)',
    }));
  };

  // Shrink cursor back when mouse leaves
  const handleMouseLeave = () => {
    setCursorStyle((prev) => ({
      ...prev,
      transform: 'scale(1)',
    }));
  };

  // Style for the cursor circle
  const styles = {
    cursor: {
      position: 'absolute',
      top: cursorStyle.top,
      left: cursorStyle.left,
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      backgroundColor: 'rgb(0, 255, 0)',
      pointerEvents: 'none',
      transition: 'transform 0.2s ease',
    },
  };

  return (
    <div
      style={styles.cursor}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default Cursor;
