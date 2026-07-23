// Module ID: 1543
// Function ID: 17566
// Name: ThemeProvider
// Dependencies: [31, 33, 1544]
// Exports: default

// Module 1543 (ThemeProvider)
import "result";
import { jsx } from "jsxProd";


export default function ThemeProvider(arg0) {
  let children;
  let value;
  ({ value, children } = arg0);
  return jsx(importDefault(1544).Provider, { value, children });
};
