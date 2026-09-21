// Module ID: 1524
// Function ID: 1525
// Name: ThemeProvider
// Dependencies: [19, 21, 1525]
// Exports: ThemeProvider

// Module 1524 (ThemeProvider)
import _mod1525 from "module_1525" /* 1525 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export const ThemeProvider = function ThemeProvider(arg0) {
  ({ value, children } = arg0);
  return jsx(_mod1525.ThemeContext.Provider, { value, children });
};
