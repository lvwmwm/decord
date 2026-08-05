// Module ID: 4641
// Function ID: 4642
// Name: TabsAccessory
// Dependencies: [19, 17, 21, 4642]
// Exports: default

// Module 4641 (TabsAccessory)
import "noop";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";


export default function TabsAccessory(style) {
  const obj = {};
  const merged = Object.assign(style);
  obj.collapsable = false;
  const items = [style.style, StyleSheet.absoluteFill];
  obj.style = items;
  return jsx(importDefault(4642), {});
};
