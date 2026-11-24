// Module ID: 1536
// Function ID: 1537
// Name: ThemeProvider
// Dependencies: [19, 21, 1537]
// Exports: ThemeProvider

// Module 1536 (ThemeProvider)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 1537 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export function ThemeProvider(arg0) {
  let children;
  let value;
  ({ value, children } = arg0);
  return jsx(react2.ThemeContext.Provider, { value, children });
}
