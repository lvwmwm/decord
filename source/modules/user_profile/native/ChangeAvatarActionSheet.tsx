// Module ID: 13460
// Function ID: 102211
// Name: ChangeAvatarActionSheet
// Dependencies: []
// Exports: default

// Module 13460 (ChangeAvatarActionSheet)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const AnalyticsObjects = arg1(dependencyMap[3]).AnalyticsObjects;
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { marginLeft: importDefault(dependencyMap[6]).space.PX_8 };
obj.nitroWheel = obj;
const tmp3 = arg1(dependencyMap[4]);
obj.sublabel = { color: importDefault(dependencyMap[6]).colors.TEXT_DEFAULT };
const obj1 = { color: importDefault(dependencyMap[6]).colors.TEXT_DEFAULT };
obj.label = { color: importDefault(dependencyMap[6]).colors.INTERACTIVE_TEXT_ACTIVE };
const obj2 = { color: importDefault(dependencyMap[6]).colors.INTERACTIVE_TEXT_ACTIVE };
obj.remove = { color: importDefault(dependencyMap[6]).colors.TEXT_FEEDBACK_CRITICAL };
const obj3 = { color: importDefault(dependencyMap[6]).colors.TEXT_FEEDBACK_CRITICAL };
obj.upsellButton = { marginTop: importDefault(dependencyMap[6]).space.PX_12, marginBottom: importDefault(dependencyMap[6]).space.PX_8 };
obj.upsellTitleContainer = {};
obj.titleWrapper = { flex: 0 };
obj.titleContainer = { justifyContent: "flex-start" };
let closure_9 = obj.createStyles(obj);
const obj4 = { marginTop: importDefault(dependencyMap[6]).space.PX_12, marginBottom: importDefault(dependencyMap[6]).space.PX_8 };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/user_profile/native/ChangeAvatarActionSheet.tsx");

export default function ChangeAvatarActionSheet(showRemoveAvatar) {
  let handleEditAvatarDecorationSelect;
  let handleRemoveAvatarSelect;
  let handleUploadAvatarSelect;
  let handleUploadGIFAvatarSelect;
  let showAnimatedAvatarUpsell;
  ({ handleUploadGIFAvatarSelect, handleEditAvatarDecorationSelect, showAnimatedAvatarUpsell } = showRemoveAvatar);
  ({ handleUploadAvatarSelect, handleRemoveAvatarSelect } = showRemoveAvatar);
  if (showAnimatedAvatarUpsell === undefined) {
    showAnimatedAvatarUpsell = false;
  }
  let flag = showRemoveAvatar.showRemoveAvatar;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback3();
  let obj = arg1(dependencyMap[7]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = importDefault(dependencyMap[8]);
  let isPremiumResult = obj1.isPremium(stateFromStores);
  obj = {};
  obj = {};
  const intl = arg1(dependencyMap[11]).intl;
  obj.title = intl.string(arg1(dependencyMap[11]).t.lqaIxI);
  if (isPremiumResult) {
    isPremiumResult = callback(arg1(dependencyMap[12]).NitroWheelIcon, {});
  }
  obj.trailing = isPremiumResult;
  ({ titleWrapper: obj4.titleWrapperStyle, titleContainer: obj4.titleContainerStyle } = tmp);
  const items1 = [callback(arg1(dependencyMap[10]).BottomSheetTitleHeader, obj), ];
  obj1 = { hasIcons: false };
  const obj2 = {};
  const intl2 = arg1(dependencyMap[11]).intl;
  obj2.label = intl2.string(arg1(dependencyMap[11]).t.MsUY/S);
  const intl3 = arg1(dependencyMap[11]).intl;
  obj2.subLabel = intl3.string(arg1(dependencyMap[11]).t.r5hKOy);
  obj2.onPress = handleUploadAvatarSelect;
  const items2 = [callback(arg1(dependencyMap[14]).TableRow, obj2), , , , ];
  let tmp10 = null != handleUploadGIFAvatarSelect && !showAnimatedAvatarUpsell;
  if (tmp10) {
    const obj3 = {};
    const intl4 = arg1(dependencyMap[11]).intl;
    obj3.label = intl4.string(arg1(dependencyMap[11]).t.xsC+/y);
    obj3.onPress = handleUploadGIFAvatarSelect;
    tmp10 = callback(arg1(dependencyMap[14]).TableRow, obj3);
  }
  items2[1] = tmp10;
  if (showAnimatedAvatarUpsell) {
    const obj4 = {};
    const obj5 = { style: tmp.upsellTitleContainer };
    const obj6 = {};
    const intl5 = arg1(dependencyMap[11]).intl;
    obj6.text = intl5.string(arg1(dependencyMap[11]).t.xZ0Wot);
    const items3 = [callback(arg1(dependencyMap[15]).FormLabel, obj6), ];
    const obj7 = { style: tmp.nitroWheel, size: "sm" };
    items3[1] = callback(arg1(dependencyMap[12]).NitroWheelIcon, obj7);
    obj5.children = items3;
    obj4.label = callback2(View, obj5);
    const obj8 = {};
    const obj9 = { style: tmp.sublabel, numberOfLines: 3 };
    const intl6 = arg1(dependencyMap[11]).intl;
    obj9.text = intl6.string(arg1(dependencyMap[11]).t.L3UPqR);
    const items4 = [callback(arg1(dependencyMap[15]).FormSubLabel, obj9), ];
    const obj10 = { style: tmp.upsellButton };
    const obj11 = { analyticsObject: AnalyticsObjects.ANIMATED_AVATAR };
    const intl7 = arg1(dependencyMap[11]).intl;
    obj11.label = intl7.string(arg1(dependencyMap[11]).t.mr4K7D);
    obj10.children = callback(importDefault(dependencyMap[16]), obj11);
    items4[1] = callback(View, obj10);
    obj8.children = items4;
    obj4.subLabel = callback2(closure_8, obj8);
    showAnimatedAvatarUpsell = callback(arg1(dependencyMap[14]).TableRow, obj4);
    const tmp21 = importDefault(dependencyMap[16]);
  }
  items2[2] = showAnimatedAvatarUpsell;
  let tmp23 = null != handleEditAvatarDecorationSelect;
  if (tmp23) {
    const obj12 = {};
    const obj13 = { style: tmp.upsellTitleContainer };
    const obj14 = {};
    const intl8 = arg1(dependencyMap[11]).intl;
    obj14.text = intl8.string(arg1(dependencyMap[11]).t.BVcYCx);
    obj13.children = callback(arg1(dependencyMap[15]).FormLabel, obj14);
    obj12.label = callback(View, obj13);
    obj12.onPress = handleEditAvatarDecorationSelect;
    tmp23 = callback(arg1(dependencyMap[14]).TableRow, obj12);
  }
  items2[3] = tmp23;
  if (flag) {
    const obj15 = {};
    const obj16 = {};
    const items5 = [, ];
    ({ label: arr6[0], remove: arr6[1] } = tmp);
    obj16.style = items5;
    const intl9 = arg1(dependencyMap[11]).intl;
    obj16.text = intl9.string(arg1(dependencyMap[11]).t.twB3fz);
    obj15.label = callback(arg1(dependencyMap[15]).FormLabel, obj16);
    obj15.onPress = handleRemoveAvatarSelect;
    flag = callback(arg1(dependencyMap[14]).TableRow, obj15);
  }
  items2[4] = flag;
  obj1.children = items2;
  items1[1] = callback2(arg1(dependencyMap[13]).TableRowGroup, obj1);
  obj.children = items1;
  return callback2(arg1(dependencyMap[9]).ActionSheet, obj);
};
