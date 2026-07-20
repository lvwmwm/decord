// Module ID: 13697
// Function ID: 103650
// Name: FamilyCenterPendingLinkRow
// Dependencies: []
// Exports: default

// Module 13697 (FamilyCenterPendingLinkRow)
function FamilyCenterPendingLinkRow(otherUser) {
  let str = otherUser.otherUser;
  const arg1 = str;
  const tmp = callback4();
  arg1(dependencyMap[6]);
  if (undefined === str) {
    return null;
  } else {
    if (tmp2) {
      let obj = { accessibilityRole: "button" };
      const intl3 = arg1(dependencyMap[8]).intl;
      obj = {};
      str = undefined;
      if (null != str) {
        str = str.toString();
      }
      obj.name = str;
      obj.accessibilityLabel = intl3.formatToPlainString(importDefault(dependencyMap[9]).oUpA6X, obj);
      obj.onPress = function onPress() {
        let obj = callback(closure_2[13]);
        obj = { otherUser: str };
        obj.pushLazy(str(closure_2[15])(closure_2[20], closure_2.paths), obj);
      };
      obj.style = tmp.actionButton;
      const obj1 = { size: arg1(dependencyMap[16]).Icon.Sizes.SMALL, disableColor: true, source: importDefault(dependencyMap[19]) };
      obj.children = callback(arg1(dependencyMap[16]).Icon, obj1);
      let tmp5Result = callback(arg1(dependencyMap[12]).PressableOpacity, obj);
      const tmp28 = callback;
    } else {
      obj = {};
      let tmp9Result = null;
      if (!tmp4) {
        const obj2 = {};
        let str2 = "button";
        obj2.accessibilityRole = "button";
        const intl = arg1(dependencyMap[8]).intl;
        const obj3 = {};
        let str1;
        if (null != str) {
          str1 = str.toString();
        }
        obj3.name = str1;
        obj2.accessibilityLabel = intl.formatToPlainString(importDefault(dependencyMap[9]).jc1Ip7, obj3);
        obj2.onPress = function onPress() {
          let obj = callback(closure_2[13]);
          obj = { otherUser: str };
          obj.pushLazy(str(closure_2[15])(closure_2[14], closure_2.paths), obj);
        };
        const items = [, ];
        ({ actionButton: arr[0], actionButtonFirst: arr[1] } = tmp);
        obj2.style = items;
        const obj4 = { size: arg1(dependencyMap[16]).Icon.Sizes.SMALL, disableColor: true, source: importDefault(dependencyMap[17]) };
        obj2.children = callback(arg1(dependencyMap[16]).Icon, obj4);
        tmp9Result = callback(arg1(dependencyMap[12]).PressableOpacity, obj2);
        const tmp9 = callback;
      }
      const items1 = [tmp9Result, ];
      const obj5 = { accessibilityRole: "button" };
      const intl2 = arg1(dependencyMap[8]).intl;
      const obj6 = {};
      str2 = undefined;
      if (null != str) {
        str2 = str.toString();
      }
      obj6.name = str2;
      obj5.accessibilityLabel = intl2.formatToPlainString(importDefault(dependencyMap[9]).4GtllP, obj6);
      obj5.onPress = function onPress() {
        let obj = callback(closure_2[13]);
        obj = { otherUser: str };
        obj.pushLazy(str(closure_2[15])(closure_2[18], closure_2.paths), obj);
      };
      obj5.style = tmp.actionButton;
      const obj7 = { size: arg1(dependencyMap[16]).Icon.Sizes.SMALL, disableColor: true, source: importDefault(dependencyMap[19]) };
      obj5.children = callback(arg1(dependencyMap[16]).Icon, obj7);
      items1[1] = callback(arg1(dependencyMap[12]).PressableOpacity, obj5);
      obj.children = items1;
      tmp5Result = closure_6(closure_7, obj);
      const tmp18 = callback;
      const tmp5 = closure_6;
      const tmp6 = closure_7;
    }
    const obj8 = { otherUser: str, actions: tmp5Result };
    return callback(importDefault(dependencyMap[21]), obj8);
  }
  const tmp2 = importDefault(dependencyMap[11])();
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const UserLinkStatus = arg1(dependencyMap[2]).UserLinkStatus;
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: { marginTop: 24 } };
obj = { "Null": true, "Null": true, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW, borderRadius: importDefault(dependencyMap[5]).radii.md };
obj.content = obj;
obj.header = { marginBottom: 10 };
let closure_8 = obj.createStyles(obj);
let obj3 = arg1(dependencyMap[4]);
const obj1 = {};
const tmp3 = arg1(dependencyMap[3]);
obj1.actionButton = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH, tintColor: importDefault(dependencyMap[5]).colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: importDefault(dependencyMap[5]).radii.round };
obj3 = { marginRight: importDefault(dependencyMap[5]).space.PX_8 };
obj1.actionButtonFirst = obj3;
let closure_9 = obj3.createStyles(obj1);
const obj2 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH, tintColor: importDefault(dependencyMap[5]).colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: importDefault(dependencyMap[5]).radii.round };
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterPendingLinks.tsx");

export default function FamilyCenterPendingLinks() {
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  const usersForLinkStatus = obj.useUsersForLinkStatus(UserLinkStatus.PENDING);
  arg1(dependencyMap[7]);
  const intl = arg1(dependencyMap[8]).intl;
  obj = { count: usersForLinkStatus.length };
  intl.formatToPlainString(importDefault(dependencyMap[9]).IkAgkG, obj);
  const intl2 = arg1(dependencyMap[8]).intl;
  let tmp5 = null;
  if (0 !== usersForLinkStatus.length) {
    obj = { style: tmp.container };
    const obj1 = { style: tmp.header, children: tmp4 };
    const items = [callback(arg1(dependencyMap[10]).Text, obj1), ];
    const obj2 = { style: tmp.content, children: usersForLinkStatus.map((id) => callback(closure_10, { otherUser: id }, "pending-" + id.id)) };
    items[1] = callback(View, obj2);
    obj.children = items;
    tmp5 = callback2(View, obj);
  }
  return tmp5;
};
