import { PureLightTheme } from './schemes/PureLightTheme';

export function themeCreator(theme) {
  return themeMap[theme];
}

const themeMap = {
  PureLightTheme
};
