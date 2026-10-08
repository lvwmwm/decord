// Module ID: 1538
// Function ID: 1539
// Name: ThemeProvider
// Dependencies: [19, 21, 1539]
// Exports: ThemeProvider

// Module 1538 (ThemeProvider)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 1539 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export const ThemeProvider = function ThemeProvider(arg0) {
  let children;
  let value;
  ({ value, children } = arg0);
  return jsx(react2.ThemeContext.Provider, { value, children });
};
