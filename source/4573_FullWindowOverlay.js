// Module ID: 4573
// Function ID: 4574
// Name: FullWindowOverlay
// Dependencies: [19, 17, 21, 4574]
// Exports: default

// Module 4573 (FullWindowOverlay)
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let Platform;
let StyleSheet;
let c0;
let closure_1;
({ Platform, StyleSheet, View: c0, useWindowDimensions: closure_1 } = get_ActivityIndicator);

export default function FullWindowOverlay(arg0) {
  let height;
  let width;
  ({ width, height } = callback());
  console.warn("Using FullWindowOverlay is only valid on iOS devices.");
  const merged = Object.assign(arg0);
  return <closure_0 />;
};
