// Module ID: 15463
// Function ID: 117946
// Name: SuspendedUserSafetyHubPage
// Dependencies: []
// Exports: default

// Module 15463 (SuspendedUserSafetyHubPage)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const SafetyHubLinks = arg1(dependencyMap[2]).SafetyHubLinks;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { accessibilityRole: "Array", options: "isArray", format: "userId", accessibilityRole: "mn", backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.header = { backgroundColor: importDefault(dependencyMap[5]).colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, flexDirection: "row", paddingVertical: importDefault(dependencyMap[5]).space.PX_8, alignItems: "center" };
const obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, flexDirection: "row", paddingVertical: importDefault(dependencyMap[5]).space.PX_8, alignItems: "center" };
obj.text = { marginRight: importDefault(dependencyMap[5]).space.PX_8 };
obj.link = { textDecorationLine: "underline" };
let closure_7 = obj.createStyles(obj);
const obj2 = { marginRight: importDefault(dependencyMap[5]).space.PX_8 };
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/safety_hub/native/SuspendedUserPage.tsx");

export default function SuspendedUserSafetyHubPage() {
  const tmp = callback3();
  let obj = {};
  obj = { style: tmp.container };
  obj = { style: tmp.header };
  const obj1 = { variant: "destructive" };
  const intl = arg1(dependencyMap[8]).intl;
  obj1.accessibilityLabel = intl.string(arg1(dependencyMap[8]).t.cpT0Cq);
  obj1.onPress = function onPress() {
    callback(closure_2[9]).closeSuspendedUser();
  };
  obj1.icon = importDefault(dependencyMap[10]);
  const items = [callback(arg1(dependencyMap[7]).IconButton, obj1), ];
  const obj2 = {
    style: tmp.text,
    onPress() {
      callback(closure_2[12]).openURL(constants.WARNING_SYSTEM_HELPCENTER_LINK);
    },
    variant: "text-xs/medium",
    color: "control-critical-primary-text-default"
  };
  const intl2 = arg1(dependencyMap[8]).intl;
  const items1 = [intl2.string(arg1(dependencyMap[8]).t.MG+Bzb), " ", ];
  const obj3 = { "Null": null, "Null": null, "Null": null, style: tmp.link };
  const intl3 = arg1(dependencyMap[8]).intl;
  obj3.children = intl3.string(arg1(dependencyMap[8]).t.9JceHN);
  items1[2] = callback(arg1(dependencyMap[11]).Text, obj3);
  obj2.children = items1;
  items[1] = callback2(arg1(dependencyMap[11]).Text, obj2);
  obj.children = items;
  const items2 = [callback2(View, obj), callback(importDefault(dependencyMap[13]), { visible: true })];
  obj.children = items2;
  obj.children = callback2(View, obj);
  return callback(arg1(dependencyMap[6]).SafeAreaPaddingView, obj);
};
