// Module ID: 4753
// Function ID: 4754
// Name: TabsAccessory
// Dependencies: [19, 17, 21, 4754]
// Exports: default

// Module 4753 (TabsAccessory)
import "noop";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";


export default function TabsAccessory(style) {
  const obj = {};
  const merged = Object.assign(style);
  obj.collapsable = false;
  const items = [style.style, StyleSheet.absoluteFill];
  obj.style = items;
  return jsx(importDefault(4754), {});
};
