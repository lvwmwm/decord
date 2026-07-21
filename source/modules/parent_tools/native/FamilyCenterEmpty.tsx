// Module ID: 13696
// Function ID: 103647
// Name: FamilyCenterEmpty
// Dependencies: []
// Exports: default

// Module 13696 (FamilyCenterEmpty)
importAll(dependencyMap[0]);
({ View: closure_3, Image: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp4 = arg1(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).createStyles({ art: { "Bool(true)": null, "Bool(true)": null }, empty: { -1861163602: true, -738052821: true } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterEmpty.tsx");

export default function FamilyCenterEmpty(children) {
  const tmp = callback3();
  let obj = { style: tmp.empty };
  obj = { source: importDefault(dependencyMap[4]), style: tmp.art, resizeMethod: "scale" };
  const items = [callback(closure_4, obj), callback(arg1(dependencyMap[5]).Text, { children: children.text })];
  obj.children = items;
  return callback2(closure_3, obj);
};
