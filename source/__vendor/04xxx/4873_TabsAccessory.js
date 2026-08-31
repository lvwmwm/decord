// Module ID: 4873
// Function ID: 4874
// Name: TabsAccessory
// Dependencies: [19, 17, 21, 4874]
// Exports: default

// Module 4873 (TabsAccessory)
import noopDefault from "noop" /* 19 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 4874 */;
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
