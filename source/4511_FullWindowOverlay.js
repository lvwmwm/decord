// Module ID: 4511
// Function ID: 39728
// Name: FullWindowOverlay
// Dependencies: [31, 27, 33, 4512]
// Exports: default

// Module 4511 (FullWindowOverlay)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let Platform;
let StyleSheet;
let closure_0;
let closure_1;
({ Platform, StyleSheet, View: closure_0, useWindowDimensions: closure_1 } = get_ActivityIndicator);

export default function FullWindowOverlay(arg0) {
  let height;
  let width;
  ({ width, height } = callback());
  console.warn("Using FullWindowOverlay is only valid on iOS devices.");
  return <closure_0 {...Object.assign({}, arg0)} />;
};
