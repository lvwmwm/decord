// Module ID: 1527
// Function ID: 1528
// Name: ThemeProvider
// Dependencies: [19, 21, 1528]
// Exports: ThemeProvider

// Module 1527 (ThemeProvider)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 1528 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export const ThemeProvider = function ThemeProvider(arg0) {
  let children;
  let value;
  ({ value, children } = arg0);
  return jsx(react2.ThemeContext.Provider, { value, children });
};
