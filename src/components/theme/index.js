// Overriding the default breakpoints of the default theme
// https://baseweb.design/blog/responsive-web/#custom-breakpoints;
import { LightTheme } from 'baseui';

const breakpoints = Object.freeze({
  small: 769,
  medium: 1024,
  large: 1216,
});

const ResponsiveTheme = Object.keys(breakpoints).reduce(
  (acc, key) => {
    acc.mediaQuery[
      key
    ] = `@media screen and (min-width: ${breakpoints[key]}px)`;
    return acc;
  },
  {
    breakpoints,
    mediaQuery: {},
  }
);

export default { ...LightTheme, ...ResponsiveTheme };
