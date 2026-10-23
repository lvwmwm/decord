// Module ID: 5962
// Function ID: 5963
// Name: FullWindowOverlay
// Dependencies: [19, 17, 21, 5963]
// Exports: default

// Module 5962 (FullWindowOverlay)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;

let Platform;
let StyleSheet;
let _window;
let map;
({ Platform, StyleSheet, View: _window, useWindowDimensions: map } = react_native);
const jsx = Fragment.jsx;

export default function FullWindowOverlay(arg0) {
  let height;
  let width;
  ({ width, height } = map());
  map();
  console.warn("Using FullWindowOverlay is only valid on iOS devices.");
  const merged = Object.assign(arg0);
  return <React />;
};
