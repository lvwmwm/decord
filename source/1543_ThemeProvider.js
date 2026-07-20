// Module ID: 1543
// Function ID: 17560
// Name: ThemeProvider
// Dependencies: []
// Exports: default

// Module 1543 (ThemeProvider)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;

export default function ThemeProvider(arg0) {
  let children;
  let value;
  ({ value, children } = arg0);
  return jsx(importDefault(dependencyMap[2]).Provider, { value, children });
};
