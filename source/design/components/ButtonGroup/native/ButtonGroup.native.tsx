// Module ID: 4962
// Function ID: 42655
// Name: ButtonGroup
// Dependencies: [771751943, 2885681159, 3774873604, 956301328, 1761607687]
// Exports: ButtonGroup

// Module 4962 (ButtonGroup)
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
  let obj = { "Bool(true)": "spring", "Bool(true)": 0.4, "Bool(true)": 1 };
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
