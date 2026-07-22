// Module ID: 12896
// Function ID: 98456
// Name: ThemedIcon
// Dependencies: []
// Exports: default

// Module 12896 (ThemedIcon)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/void/ThemedIcon/native/ThemedIcon.tsx");

export default function ThemedIcon(themedColor) {
  let obj = Object.create(null);
  obj.themedColor = 0;
  const merged = Object.assign(themedColor, obj);
  obj = arg1(dependencyMap[2]);
  const token = obj.useToken(themedColor.themedColor);
  obj = { color: token };
  const merged1 = Object.assign(merged);
  return jsx(importDefault(dependencyMap[3]), obj);
};
