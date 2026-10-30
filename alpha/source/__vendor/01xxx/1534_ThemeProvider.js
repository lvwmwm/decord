// Module ID: 1534
// Function ID: 1535
// Name: ThemeProvider
// Dependencies: [19, 21, 1535]
// Exports: ThemeProvider

// Module 1534 (ThemeProvider)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 1535 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export function ThemeProvider(arg0) {
  let children;
  let value;
  ({ value, children } = arg0);
  return jsx(react2.ThemeContext.Provider, { value, children });
}
