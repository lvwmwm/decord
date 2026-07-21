// Module ID: 7569
// Function ID: 60560
// Name: ButtonGroup
// Dependencies: []
// Exports: ButtonGroup

// Module 7569 (ButtonGroup)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_3 = arg1(dependencyMap[2]).createStyles({ container: { paddingVertical: 16 } });
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/components/ButtonGroup/native/ButtonGroup.native.tsx");

export const ButtonGroup = function ButtonGroup(size) {
  let children;
  let style;
  let str = size.size;
  if (str === undefined) {
    str = "md";
  }
  let obj = { "Bool(true)": false, "Bool(true)": false, "Bool(true)": false };
  ({ children, style } = size);
  Object.setPrototypeOf(null);
  const merged = Object.assign(size, obj);
  let num = 8;
  if ("sm" === str) {
    num = 12;
  }
  obj = {};
  const merged1 = Object.assign(merged);
  obj["spacing"] = num;
  const items = [callback().container, style];
  obj["style"] = items;
  obj["children"] = children;
  return jsx(arg1(dependencyMap[3]).Stack, obj);
};
