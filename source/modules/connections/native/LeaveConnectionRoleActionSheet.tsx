// Module ID: 9985
// Function ID: 77228
// Name: LeaveConnectionRoleActionSheet
// Dependencies: []
// Exports: default

// Module 9985 (LeaveConnectionRoleActionSheet)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_5 = arg1(dependencyMap[3]).createStyles({ container: { padding: 12 }, marginTop: { marginTop: 8 }, button: {} });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/connections/native/LeaveConnectionRoleActionSheet.tsx");

export default function LeaveConnectionRoleActionSheet(onLeaveRolePressed) {
  const tmp = callback3();
  let obj = {};
  obj = { style: tmp.container };
  obj = { cachedAt: "flex", edpbxy: "row" };
  const intl = arg1(dependencyMap[6]).intl;
  obj.children = intl.string(arg1(dependencyMap[6]).t.vytvJF);
  const items = [callback(arg1(dependencyMap[5]).Text, obj), , ];
  const obj1 = { "Null": null, "Null": 1, alignItems: 1, style: tmp.marginTop };
  const intl2 = arg1(dependencyMap[6]).intl;
  obj1.children = intl2.string(arg1(dependencyMap[6]).t.caJwb5);
  items[1] = callback(arg1(dependencyMap[5]).Text, obj1);
  const obj2 = { style: tmp.button };
  const obj3 = { variant: "destructive", onPress: onLeaveRolePressed.onLeaveRolePressed };
  const intl3 = arg1(dependencyMap[6]).intl;
  obj3.text = intl3.string(arg1(dependencyMap[6]).t.+Oi4XF);
  obj3.grow = true;
  obj2.children = callback(arg1(dependencyMap[7]).Button, obj3);
  items[2] = callback(View, obj2);
  obj.children = items;
  obj.children = callback2(View, obj);
  return callback(arg1(dependencyMap[4]).BottomSheet, obj);
};
