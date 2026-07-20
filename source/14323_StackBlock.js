// Module ID: 14323
// Function ID: 108175
// Name: StackBlock
// Dependencies: []
// Exports: default

// Module 14323 (StackBlock)
function StackBlock() {
  return callback(closure_2, { style: callback3().block });
}
importAll(dependencyMap[0]);
({ View: closure_2, ScrollView: closure_3 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: { <string:2186471382>: true, <string:1688044701>: true, <string:1672539340>: true } };
obj = { borderRadius: importDefault(dependencyMap[4]).radii.lg, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_STRONG, height: 80, flex: 1 };
obj.block = obj;
let closure_6 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemStack.tsx");

export default function UserSettingsDesignSystemStack() {
  let obj = {};
  obj = { style: callback3().container };
  obj = { spacing: 16 };
  const obj1 = {};
  const obj2 = {};
  const items = [callback(arg1(dependencyMap[7]).Text, {}), callback(arg1(dependencyMap[7]).Text, { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true }), ];
  const obj3 = {};
  const items1 = [callback(StackBlock, {}), callback(StackBlock, {})];
  obj3.children = items1;
  items[2] = callback2(arg1(dependencyMap[5]).Stack, obj3);
  obj2.children = items;
  obj1.children = callback2(arg1(dependencyMap[5]).Stack, obj2);
  const items2 = [callback(arg1(dependencyMap[6]).Card, obj1), , ];
  const obj4 = {};
  const obj5 = {};
  const items3 = [callback(arg1(dependencyMap[7]).Text, { position: "Show role colors next to names", width: "color-next-to-names" }), callback(arg1(dependencyMap[7]).Text, {}), ];
  const obj6 = { spacing: 24 };
  const items4 = [callback(StackBlock, {}), callback(StackBlock, {})];
  obj6.children = items4;
  items3[2] = callback2(arg1(dependencyMap[5]).Stack, obj6);
  obj5.children = items3;
  obj4.children = callback2(arg1(dependencyMap[5]).Stack, obj5);
  items2[1] = callback(arg1(dependencyMap[6]).Card, obj4);
  const obj7 = {};
  const obj8 = {};
  const items5 = [callback(arg1(dependencyMap[7]).Text, { position: "Don't show role colors", width: "no-color" }), callback(arg1(dependencyMap[7]).Text, { "Bool(false)": "heading-lg/bold", "Bool(false)": "Switch", "Bool(false)": "text-md/normal" }), ];
  const obj9 = { direction: "horizontal" };
  const items6 = [callback(StackBlock, {}), callback(StackBlock, {})];
  obj9.children = items6;
  items5[2] = callback2(arg1(dependencyMap[5]).Stack, obj9);
  obj8.children = items5;
  obj7.children = callback2(arg1(dependencyMap[5]).Stack, obj8);
  items2[2] = callback(arg1(dependencyMap[6]).Card, obj7);
  obj.children = items2;
  obj.children = callback2(arg1(dependencyMap[5]).Stack, obj);
  obj.children = callback(closure_2, obj);
  return callback(closure_3, obj);
};
