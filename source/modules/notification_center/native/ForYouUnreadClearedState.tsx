// Module ID: 15040
// Function ID: 113249
// Name: ForYouUnreadClearedState
// Dependencies: []
// Exports: ForYouUnreadClearedState

// Module 15040 (ForYouUnreadClearedState)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: { -335419053: true, 1638281000: true, 1015501064: true, 490831713: true } };
obj = { 66933048: "Array", flexDirection: "isArray", alignItems: "body", gap: "message", marginBottom: "key", marginTop: "Text", marginLeft: "kind", marginRight: "cursor", backgroundColor: importDefault(dependencyMap[4]).unsafe_rawColors.GREEN_400, borderRadius: importDefault(dependencyMap[4]).radii.xl };
obj.imageContainer = obj;
const obj1 = { "Bool(false)": null, "Bool(false)": null, color: importDefault(dependencyMap[4]).unsafe_rawColors.GREEN_400 };
obj.icon = obj1;
obj.headerText = { marginBottom: 2 };
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/notification_center/native/ForYouUnreadClearedState.tsx");

export const ForYouUnreadClearedState = function ForYouUnreadClearedState() {
  const tmp = callback3();
  let obj = { style: tmp.container };
  obj = { style: tmp.imageContainer };
  const items = [callback(View, obj), , ];
  obj = { source: importDefault(dependencyMap[6]), style: tmp.icon, color: tmp.icon.color };
  items[1] = callback(arg1(dependencyMap[5]).Icon, obj);
  const obj1 = {};
  const obj2 = { style: tmp.headerText };
  const intl = arg1(dependencyMap[8]).intl;
  obj2.children = intl.string(arg1(dependencyMap[8]).t.DonStq);
  const items1 = [callback(arg1(dependencyMap[7]).Text, obj2), ];
  const obj3 = {};
  const intl2 = arg1(dependencyMap[8]).intl;
  obj3.children = intl2.string(arg1(dependencyMap[8]).t.jXFsai);
  items1[1] = callback(arg1(dependencyMap[7]).Text, obj3);
  obj1.children = items1;
  items[2] = callback2(View, obj1);
  obj.children = items;
  return callback2(View, obj);
};
