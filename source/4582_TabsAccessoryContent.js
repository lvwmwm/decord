// Module ID: 4582
// Function ID: 4583
// Name: TabsAccessoryContent
// Dependencies: [19, 17, 21, 4583]
// Exports: default

// Module 4582 (TabsAccessoryContent)
import "noop";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";


export default function TabsAccessoryContent(style) {
  const obj = {};
  const merged = Object.assign(style);
  obj.collapsable = false;
  const items = [style.style, StyleSheet.absoluteFill];
  obj.style = items;
  return jsx(importDefault(4583), {});
};
