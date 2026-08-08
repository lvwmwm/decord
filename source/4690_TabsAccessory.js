// Module ID: 4690
// Function ID: 4691
// Name: TabsAccessory
// Dependencies: [19, 17, 21, 4691]
// Exports: default

// Module 4690 (TabsAccessory)
import "noop";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";


export default function TabsAccessory(style) {
  const obj = {};
  const merged = Object.assign(style);
  obj.collapsable = false;
  const items = [style.style, StyleSheet.absoluteFill];
  obj.style = items;
  return jsx(importDefault(4691), {});
};
