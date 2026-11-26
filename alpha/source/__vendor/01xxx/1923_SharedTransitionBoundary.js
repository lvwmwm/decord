// Module ID: 1923
// Function ID: 1924
// Name: SharedTransitionBoundary
// Dependencies: [17, 21, 1924]
// Exports: SharedTransitionBoundary

// Module 1923 (SharedTransitionBoundary)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react_nativeDefault from "react-native" /* 1924 */;

const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
const contents = StyleSheet.create({ contents: { overflow: "visible", display: "contents" } });

export function SharedTransitionBoundary(arg0) {
  let children;
  let isActive;
  ({ isActive, children } = arg0);
  return jsx(react_nativeDefault, { style: contents.contents, isActive, pointerEvents: "box-none", children });
}
