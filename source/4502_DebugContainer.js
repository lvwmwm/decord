// Module ID: 4502
// Function ID: 39684
// Name: DebugContainer
// Dependencies: []
// Exports: default

// Module 4502 (DebugContainer)
let closure_2 = ["blockQuote", "br"];
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const Platform = arg1(dependencyMap[2]).Platform;
const jsx = arg1(dependencyMap[3]).jsx;

export default function DebugContainer(arg0) {
  let contentStyle;
  let style;
  ({ contentStyle, style } = arg0);
  style = [, ];
  style[0] = style;
  style[1] = contentStyle;
  const tmp = callback(arg0, closure_2);
  return jsx(importDefault(dependencyMap[4]), Object.assign({ style }, tmp));
};
