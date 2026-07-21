// Module ID: 4507
// Function ID: 39679
// Name: FullWindowOverlay
// Dependencies: []
// Exports: default

// Module 4507 (FullWindowOverlay)
let Platform;
let StyleSheet;
importDefault(dependencyMap[0]);
({ Platform, StyleSheet, View: closure_0, useWindowDimensions: closure_1 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;

export default function FullWindowOverlay(arg0) {
  let height;
  let width;
  ({ width, height } = callback());
  console.warn("Using FullWindowOverlay is only valid on iOS devices.");
  return <closure_0 {...Object.assign({}, arg0)} />;
};
