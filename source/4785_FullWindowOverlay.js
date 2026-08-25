// Module ID: 4785
// Function ID: 4786
// Name: FullWindowOverlay
// Dependencies: [19, 17, 21, 4786]
// Exports: default

// Module 4785 (FullWindowOverlay)
import noopDefault from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

noopDefault;
({ Platform, StyleSheet, View: c0, useWindowDimensions: closure_1 } = get_ActivityIndicator);

export default function FullWindowOverlay(arg0) {
  ({ width, height } = callback());
  console.warn("Using FullWindowOverlay is only valid on iOS devices.");
  const merged = Object.assign(arg0);
  return <closure_0 />;
};
