// Module ID: 4516
// Function ID: 39715
// Name: TabsAccessoryContent
// Dependencies: []
// Exports: default

// Module 4516 (TabsAccessoryContent)
importDefault(dependencyMap[0]);
const StyleSheet = arg1(dependencyMap[1]).StyleSheet;
const jsx = arg1(dependencyMap[2]).jsx;

export default function TabsAccessoryContent(style) {
  style = [style.style, StyleSheet.absoluteFill];
  return jsx(importDefault(dependencyMap[3]), Object.assign({}, style, { collapsable: false, style }));
};
