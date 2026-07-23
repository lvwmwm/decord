// Module ID: 4518
// Function ID: 39743
// Name: TabsAccessory
// Dependencies: [31, 27, 33, 4519]
// Exports: default

// Module 4518 (TabsAccessory)
import "result";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";


export default function TabsAccessory(style) {
  style = [style.style, StyleSheet.absoluteFill];
  return jsx(importDefault(4519), Object.assign({}, style, { collapsable: false, style }));
};
