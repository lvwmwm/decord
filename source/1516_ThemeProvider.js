// Module ID: 1516
// Function ID: 1517
// Name: ThemeProvider
// Dependencies: [19, 21, 1517]
// Exports: ThemeProvider

// Module 1516 (ThemeProvider)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;

export const ThemeProvider = function ThemeProvider(arg0) {
  let children;
  let value;
  ({ value, children } = arg0);
  return jsx(require(1517) /* context */.ThemeContext.Provider, { value, children });
};
