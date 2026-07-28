// Module ID: 4553
// Function ID: 39870
// Name: TabsAccessory
// Dependencies: [31, 27, 33, 4554]
// Exports: default

// Module 4553 (TabsAccessory)
import "result";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";


export default function TabsAccessory(style) {
  style = [style.style, StyleSheet.absoluteFill];
  return jsx(importDefault(4554), Object.assign({}, style, { collapsable: false, style }));
};
