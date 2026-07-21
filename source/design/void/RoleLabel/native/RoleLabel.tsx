// Module ID: 9557
// Function ID: 74465
// Name: RoleLabel
// Dependencies: []
// Exports: RoleLabel

// Module 9557 (RoleLabel)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_3 = importDefault(dependencyMap[2]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_6 = arg1(dependencyMap[4]).createStyles({ container: {}, roleDot: { marginRight: 4 } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/void/RoleLabel/native/RoleLabel.tsx");

export const RoleLabel = function RoleLabel(color) {
  let colors;
  let name;
  color = color.color;
  ({ name, colors } = color);
  const tmp = callback2();
  let obj = arg1(dependencyMap[5]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  let tmp4 = "username" === stateFromStores;
  if (tmp4) {
    tmp4 = null != color;
  }
  if (tmp4) {
    obj = { color };
  }
  obj = { style: tmp.container };
  let tmp8 = "dot" === stateFromStores;
  if (tmp8) {
    tmp8 = null != color;
  }
  if (tmp8) {
    const obj1 = { color, colors, containerStyles: tmp.roleDot };
    tmp8 = callback(arg1(dependencyMap[6]).RoleDot, obj1);
  }
  const items1 = [tmp8, ];
  const obj2 = { style: {}, text: name };
  items1[1] = callback(arg1(dependencyMap[7]).FormLabel, obj2);
  obj.children = items1;
  return closure_5(View, obj);
};
