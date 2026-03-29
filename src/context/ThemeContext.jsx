import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [usePhoto, setUsePhoto] = useState(false); // Toggle between photo and icon

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const savedUsePhoto = localStorage.getItem('usePhoto') === 'true';
    setTheme(savedTheme);
    setUsePhoto(savedUsePhoto);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const togglePhoto = () => {
    const newUsePhoto = !usePhoto;
    setUsePhoto(newUsePhoto);
    localStorage.setItem('usePhoto', newUsePhoto.toString());
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, usePhoto, togglePhoto }}>
      {children}
    </ThemeContext.Provider>
  );
};
