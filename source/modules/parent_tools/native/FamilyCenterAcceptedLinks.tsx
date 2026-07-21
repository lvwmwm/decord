// Module ID: 13697
// Function ID: 103664
// Name: FamilyCenterAcceptedLinkRow
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 13697 (FamilyCenterAcceptedLinkRow)
import "result";
import { View } from "result";
import result from "result";
import result from "result";
import result from "result";
import result from "result";
import result from "result";

function FamilyCenterAcceptedLinkRow(otherUser) {
  let str = otherUser.otherUser;
  const arg1 = str;
  let tmp8Result = null;
  if (undefined !== str) {
    let obj = { otherUser: str };
    obj = { accessibilityRole: "button" };
    const intl = arg1(dependencyMap[9]).intl;
    const obj1 = {};
    str = undefined;
    if (null != str) {
      str = str.toString();
    }
    obj1.name = str;
    obj.accessibilityLabel = intl.formatToPlainString(importDefault(dependencyMap[10]).T7DUoU, obj1);
    obj.onPress = function onPress() {
      let obj = callback(paths[15]);
      obj = { otherUser: str };
      obj.pushLazy(str(paths[17])(paths[16], paths.paths), obj);
    };
    obj.style = tmp.actionButton;
    obj = { size: arg1(dependencyMap[18]).Icon.Sizes.SMALL, disableColor: true, source: importDefault(dependencyMap[19]) };
    obj.children = callback(arg1(dependencyMap[18]).Icon, obj);
    obj.actions = callback(arg1(dependencyMap[14]).PressableOpacity, obj);
    tmp8Result = callback(importDefault(dependencyMap[13]), obj);
    const tmp11 = importDefault(dependencyMap[13]);
    const tmp12 = callback;
    const tmp8 = callback;
  }
  return tmp8Result;
}
({ MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: closure_4, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: closure_5 } = result);
({ jsx: closure_6, jsxs: closure_7 } = result);
result = { container: { marginTop: 24 } };
result = { 1979675647: true, 1895788287: true, backgroundColor: require("result").colors.BACKGROUND_BASE_LOW, borderRadius: require("result").radii.md };
result.content = result;
result.empty = { "Bool(true)": 1100505555, "Bool(true)": 126701 };
result.header = { marginBottom: 10 };
result = result.createStyles(result);
const obj1 = { actionButton: { backgroundColor: require("result").colors.BACKGROUND_SURFACE_HIGH, tintColor: require("result").colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: require("result").radii.round } };
let closure_9 = result.createStyles(obj1);
result = result.fileFinishedImporting("modules/parent_tools/native/FamilyCenterAcceptedLinks.tsx");

export default function FamilyCenterAcceptedLinks() {
  const tmp = result();
  let obj = arg1(dependencyMap[7]);
  const activeLinkUsers = obj.useActiveLinkUsers();
  obj = { count: activeLinkUsers.length, max: importDefault(dependencyMap[6])() ? closure_4 : closure_5 };
  let obj2 = arg1(dependencyMap[8]);
  const intl = arg1(dependencyMap[9]).intl;
  const tmp2 = importDefault(dependencyMap[6])();
  const intl2 = arg1(dependencyMap[9]).intl;
  obj = { style: tmp.container };
  const ageSpecificText = obj2.useAgeSpecificText(intl.formatToPlainString(importDefault(dependencyMap[10]).+tnO34, obj), intl2.formatToPlainString(importDefault(dependencyMap[10]).pu6/U0, obj));
  const items = [callback(arg1(dependencyMap[11]).Text, { style: tmp.header, children: ageSpecificText }), ];
  obj2 = { style: tmp.content };
  if (0 === activeLinkUsers.length) {
    const obj3 = { style: tmp.empty };
    const obj4 = {};
    const intl3 = arg1(dependencyMap[9]).intl;
    obj4.text = intl3.string(importDefault(dependencyMap[10]).C4ScLD);
    obj3.children = callback(importDefault(dependencyMap[12]), obj4);
    let mapped = callback(View, obj3);
    const tmp14 = importDefault(dependencyMap[12]);
  } else {
    mapped = activeLinkUsers.map((id) => callback(closure_10, { otherUser: id }, "accepted-" + id.id));
  }
  obj2.children = mapped;
  items[1] = callback(View, obj2);
  obj.children = items;
  return closure_7(View, obj);
};
