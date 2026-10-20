// Module ID: 1539
// Function ID: 1540
// Name: ThemeProvider
// Dependencies: [19, 21, 1540]
// Exports: ThemeProvider

// Module 1539 (ThemeProvider)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 1540 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export const ThemeProvider = function ThemeProvider(arg0) {
  let children;
  let value;
  ({ value, children } = arg0);
  return jsx(react2.ThemeContext.Provider, { value, children });
};
