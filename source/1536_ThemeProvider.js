// Module ID: 1536
// Function ID: 1537
// Name: ThemeProvider
// Dependencies: [19, 21, 1537]
// Exports: ThemeProvider

// Module 1536 (ThemeProvider)
import noopAll from "noop" /* 19 */;
import context from "context" /* 1537 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;

export const ThemeProvider = function ThemeProvider(arg0) {
  ({ value, children } = arg0);
  return jsx(context.ThemeContext.Provider, { value, children });
};
