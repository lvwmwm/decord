// Module ID: 4671
// Function ID: 4672
// Name: TabsAccessory
// Dependencies: [19, 17, 21, 4672]
// Exports: default

// Module 4671 (TabsAccessory)
import "noop";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";


export default function TabsAccessory(style) {
  const obj = {};
  const merged = Object.assign(style);
  obj.collapsable = false;
  const items = [style.style, StyleSheet.absoluteFill];
  obj.style = items;
  return jsx(importDefault(4672), {});
};
