// Module ID: 4519
// Function ID: 39755
// Name: TabsAccessory
// Dependencies: [31, 27, 33, 4520]
// Exports: default

// Module 4519 (TabsAccessory)
import "result";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";


export default function TabsAccessory(style) {
  style = [style.style, StyleSheet.absoluteFill];
  return jsx(importDefault(4520), Object.assign({}, style, { collapsable: false, style }));
};
