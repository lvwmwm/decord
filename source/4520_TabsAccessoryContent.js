// Module ID: 4520
// Function ID: 39747
// Name: TabsAccessoryContent
// Dependencies: [31, 27, 33, 4521]
// Exports: default

// Module 4520 (TabsAccessoryContent)
import "result";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";


export default function TabsAccessoryContent(style) {
  style = [style.style, StyleSheet.absoluteFill];
  return jsx(importDefault(4521), Object.assign({}, style, { collapsable: false, style }));
};
