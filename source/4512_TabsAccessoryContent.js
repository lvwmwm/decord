// Module ID: 4512
// Function ID: 39651
// Name: TabsAccessoryContent
// Dependencies: []
// Exports: default

// Module 4512 (TabsAccessoryContent)
importDefault(dependencyMap[0]);
const StyleSheet = arg1(dependencyMap[1]).StyleSheet;
const jsx = arg1(dependencyMap[2]).jsx;

export default function TabsAccessoryContent(style) {
  style = [style.style, StyleSheet.absoluteFill];
  return jsx(importDefault(dependencyMap[3]), Object.assign({}, style, { collapsable: false, style }));
};
