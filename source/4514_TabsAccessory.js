// Module ID: 4514
// Function ID: 39703
// Name: TabsAccessory
// Dependencies: []
// Exports: default

// Module 4514 (TabsAccessory)
importDefault(dependencyMap[0]);
const StyleSheet = arg1(dependencyMap[1]).StyleSheet;
const jsx = arg1(dependencyMap[2]).jsx;

export default function TabsAccessory(style) {
  style = [style.style, StyleSheet.absoluteFill];
  return jsx(importDefault(dependencyMap[3]), Object.assign({}, style, { collapsable: false, style }));
};
