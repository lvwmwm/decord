// Module ID: 5165
// Function ID: 5166
// Name: FullWindowOverlay
// Dependencies: [19, 17, 21, 5166]
// Exports: default

// Module 5165 (FullWindowOverlay)
import noop from "module_19" /* 19 */;

get_ActivityIndicator = fn(17);
({ Platform, StyleSheet, View: closure_0, useWindowDimensions: closure_1 } = get_ActivityIndicator);
const jsx = fn(21).jsx;

export default function FullWindowOverlay(arg0) {
  ({ width, height } = framebus());
  console.warn("Using FullWindowOverlay is only valid on iOS devices.");
  const merged = Object.assign(arg0);
  return <React />;
};
