// Module ID: 1519
// Function ID: 1520
// Name: ThemeProvider
// Dependencies: [19, 21, 1520]
// Exports: ThemeProvider

// Module 1519 (ThemeProvider)
import noopAll from "noop" /* 19 */;
import context from "context" /* 1520 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;

export const ThemeProvider = function ThemeProvider(arg0) {
  ({ value, children } = arg0);
  return jsx(context.ThemeContext.Provider, { value, children });
};
