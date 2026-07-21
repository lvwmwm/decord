// Module ID: 13698
// Function ID: 103669
// Name: FamilyCenterEmpty
// Dependencies: []
// Exports: default

// Module 13698 (FamilyCenterEmpty)
importAll(dependencyMap[0]);
({ View: closure_3, Image: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp4 = arg1(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).createStyles({ art: { position: null, height: null }, empty: { <string:29557293>: true, <string:45941405>: true } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterEmpty.tsx");

export default function FamilyCenterEmpty(text) {
  const tmp = callback3();
  let obj = { style: tmp.empty };
  obj = { source: importDefault(dependencyMap[4]), style: tmp.art, resizeMethod: "scale" };
  const items = [callback(closure_4, obj), ];
  obj = { hasMaxConnections: "<string:3086024708>", isBoostOnlySubscription: "<string:625475588>", children: text.text };
  items[1] = callback(arg1(dependencyMap[5]).Text, obj);
  obj.children = items;
  return callback2(closure_3, obj);
};
