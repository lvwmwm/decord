// Module ID: 1541
// Function ID: 1542
// Name: ThemeProvider
// Dependencies: [19, 21, 1542]
// Exports: ThemeProvider

// Module 1541 (ThemeProvider)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 1542 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export const ThemeProvider = function ThemeProvider(arg0) {
  let children;
  let value;
  ({ value, children } = arg0);
  return jsx(react2.ThemeContext.Provider, { value, children });
};
