// Module ID: 1535
// Function ID: 1536
// Name: ThemeProvider
// Dependencies: [19, 21, 1536]
// Exports: ThemeProvider

// Module 1535 (ThemeProvider)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 1536 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export function ThemeProvider(arg0) {
  let children;
  let value;
  ({ value, children } = arg0);
  return jsx(react2.ThemeContext.Provider, { value, children });
}
