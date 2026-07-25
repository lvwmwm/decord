// Module ID: 4521
// Function ID: 39759
// Name: TabsAccessoryContent
// Dependencies: [31, 27, 33, 4522]
// Exports: default

// Module 4521 (TabsAccessoryContent)
import "result";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";


export default function TabsAccessoryContent(style) {
  style = [style.style, StyleSheet.absoluteFill];
  return jsx(importDefault(4522), Object.assign({}, style, { collapsable: false, style }));
};
