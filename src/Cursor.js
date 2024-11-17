// src/Cursor.js
import React, { useState, useEffect } from 'react';

const Cursor = () => {
  const [cursorStyle, setCursorStyle] = useState({
    top: '0px',
    left: '0px',
    transform: 'scale(1)', // Initial size of the cursor
  });

  useEffect(() => {
    // Handle mouse movement
    const handleMouseMove = (e) => {
      setCursorStyle({
        top: `${e.clientY - 15}px`, // adjust position based on mouse movement
        left: `${e.clientX - 15}px`,
        transform: cursorStyle.transform, // maintain the scaling transform
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
      transform: 'scale(1.5)', // Enlarge cursor
    }));
  };

  // Shrink cursor back when mouse leaves
  const handleMouseLeave = () => {
    setCursorStyle((prev) => ({
      ...prev,
      transform: 'scale(1)', // Original size
    }));
  };

  // Style for the cursor circle
  const styles = {
    cursor: {
      position: 'absolute',
      top: cursorStyle.top,
      left: cursorStyle.left,
      width: '30px', // Initial size of the cursor
      height: '30px',
      borderRadius: '50%',
      backgroundColor: 'rgb(0, 255, 0)', // Green color for the cursor
      pointerEvents: 'none', // Ensure the cursor doesn't interfere with other elements
      transition: 'transform 0.2s ease', // Smooth scale transition
    },
  };

  return (
    <div
      style={styles.cursor}
      onMouseEnter={handleMouseEnter} // Enlarge when mouse hovers
      onMouseLeave={handleMouseLeave} // Shrink when mouse leaves
    />
  );
};

export default Cursor;
