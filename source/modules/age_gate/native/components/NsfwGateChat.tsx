// Module ID: 11684
// Function ID: 90648
// Name: NsfwGateChat
// Dependencies: []
// Exports: default

// Module 11684 (NsfwGateChat)
importAll(dependencyMap[0]);
const tmp3 = arg1(dependencyMap[1]);
({ View: closure_3, Image: closure_4 } = tmp3);
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { justifyContent: true, marginBottom: true, flexGrow: true, marginHorizontal: true, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
const tmp4 = arg1(dependencyMap[2]);
obj.border = { height: tmp3.StyleSheet.hairlineWidth, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST };
obj.description = { "Null": "center", "Null": "center" };
let closure_8 = obj.createStyles(obj);
const obj1 = { height: tmp3.StyleSheet.hairlineWidth, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST };
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/age_gate/native/components/NsfwGateChat.tsx");

export default function NsfwGateChat() {
  const tmp = callback3();
  let obj = {};
  obj = { style: tmp.border };
  const items = [callback(closure_3, obj), ];
  obj = { style: tmp.container };
  const items1 = [callback(closure_4, { source: importDefault(dependencyMap[5]) }), ];
  const obj2 = { style: tmp.description };
  const intl = arg1(dependencyMap[7]).intl;
  obj2.children = intl.string(arg1(dependencyMap[7]).t.W4Qyxr);
  items1[1] = callback(arg1(dependencyMap[6]).Text, obj2);
  obj.children = items1;
  items[1] = callback2(closure_3, obj);
  obj.children = items;
  return callback2(closure_7, obj);
};
