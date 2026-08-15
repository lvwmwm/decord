// Module ID: 1536
// Function ID: 1537
// Name: ThemeProvider
// Dependencies: [19, 21, 1537]
// Exports: ThemeProvider

// Module 1536 (ThemeProvider)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;

export const ThemeProvider = function ThemeProvider(arg0) {
  let children;
  let value;
  ({ value, children } = arg0);
  return jsx(require(1537) /* context */.ThemeContext.Provider, { value, children });
};
