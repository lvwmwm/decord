// Module ID: 1535
// Function ID: 1536
// Name: ThemeProvider
// Dependencies: [19, 21, 1536]
// Exports: ThemeProvider

// Module 1535 (ThemeProvider)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;

export const ThemeProvider = function ThemeProvider(arg0) {
  let children;
  let value;
  ({ value, children } = arg0);
  return jsx(require(1536) /* context */.ThemeContext.Provider, { value, children });
};
