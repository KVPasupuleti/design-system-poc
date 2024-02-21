import React from 'react';
import { ThemeProvider } from 'styled-components';
import './style.css';

const themeObj = {
  gray: 'var(--gray)',
  red: 'var(--red)',
  blue: 'var(--blue)',
};

export const CustomThemeProvider = ({ children, theme = 'light' }) => {
  return (
    <ThemeProvider theme={themeObj}>
      <div className={theme === 'light' ? 'light' : 'dark'}>{children}</div>
    </ThemeProvider>
  );
};
