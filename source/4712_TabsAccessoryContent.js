// Module ID: 4712
// Function ID: 4713
// Name: TabsAccessoryContent
// Dependencies: [19, 17, 21, 4713]
// Exports: default

// Module 4712 (TabsAccessoryContent)
import "noop";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";


export default function TabsAccessoryContent(style) {
  const obj = {};
  const merged = Object.assign(style);
  obj.collapsable = false;
  const items = [style.style, StyleSheet.absoluteFill];
  obj.style = items;
  return jsx(importDefault(4713), {});
};
