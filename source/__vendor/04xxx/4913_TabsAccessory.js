// Module ID: 4913
// Function ID: 4914
// Name: TabsAccessory
// Dependencies: [19, 17, 21, 4914]
// Exports: default

// Module 4913 (TabsAccessory)
import noopDefault from "noop" /* 19 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 4914 */;
import { StyleSheet } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

noopDefault;

export default function TabsAccessory(style) {
  const obj = {};
  const merged = Object.assign(style);
  obj.collapsable = false;
  const items = [style.style, StyleSheet.absoluteFill];
  obj.style = items;
  return jsx(__INTERNAL_VIEW_CONFIGDefault, {});
};
