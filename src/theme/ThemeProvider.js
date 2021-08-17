import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { themeCreator } from './base';
import { StylesProvider } from '@material-ui/styles';

export const ThemeContext = React.createContext((themeName) => { });

const ThemeProviderWrapper = function (props) {
  const curThemeName = localStorage.getItem('appTheme') || 'PureLightTheme';
  const [themeName, _setThemeName] = useState(curThemeName);
  const theme = themeCreator(themeName);
  const setThemeName = (themeName) => {
    localStorage.setItem('appTheme', themeName);
    _setThemeName(themeName);
  };

  return (
    <StylesProvider injectFirst>
      <ThemeContext.Provider value={setThemeName}>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </ThemeContext.Provider>
    </StylesProvider>
  );
};

export default ThemeProviderWrapper;
