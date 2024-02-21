import React, { useState } from 'react';
import styled from 'styled-components';
import { CustomThemeProvider } from './themeProvider';

const StyledBox1 = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.theme.gray};
`;

const StyledBox2 = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.theme.red};
`;

const StyledBox3 = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.theme.blue};
`;

export const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <>
      <button
        onClick={() =>
          setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
        }
      >{`Current Theme: ${theme}`}</button>
      <CustomThemeProvider theme={theme}>
        <StyledBox1 />
        <StyledBox2 />
        <StyledBox3 />
      </CustomThemeProvider>
    </>
  );
};
