// Module ID: 7564
// Function ID: 60536
// Name: ButtonGroup
// Dependencies: []
// Exports: ButtonGroup

// Module 7564 (ButtonGroup)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_3 = arg1(dependencyMap[2]).createStyles({ container: { paddingVertical: 16 } });
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/components/ButtonGroup/native/ButtonGroup.native.tsx");

export const ButtonGroup = function ButtonGroup(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  let obj = Object.create(null);
  obj.children = 0;
  obj.style = 0;
  const merged = Object.assign(arg0, obj);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["spacing"] = 12;
  const items = [callback().container, style];
  obj["style"] = items;
  obj["children"] = children;
  return jsx(arg1(dependencyMap[3]).Stack, obj);
};
