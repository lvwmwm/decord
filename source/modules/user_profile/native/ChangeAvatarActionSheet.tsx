// Module ID: 13581
// Function ID: 104400
// Name: ChangeAvatarActionSheet
// Dependencies: [31, 27, 1849, 653, 33, 4130, 689, 566, 3776, 5500, 5186, 1212, 7871, 5503, 5165, 7495, 13566, 2]
// Exports: default

// Module 13581 (ChangeAvatarActionSheet)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticsObjects } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginLeft: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.nitroWheel = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.sublabel = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
let obj2 = { marginBottom: 4, color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE, alignItems: "center", flexDirection: "row" };
_createForOfIteratorHelperLoose.label = obj2;
let obj1 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
_createForOfIteratorHelperLoose.remove = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_CRITICAL };
let obj3 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_CRITICAL };
_createForOfIteratorHelperLoose.upsellButton = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.upsellTitleContainer = { flexDirection: "row", alignItems: "flex-end" };
_createForOfIteratorHelperLoose.titleWrapper = { flex: 0 };
_createForOfIteratorHelperLoose.titleContainer = { justifyContent: "flex-start" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/native/ChangeAvatarActionSheet.tsx");

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
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getCurrentUser());
  let obj1 = importDefault(3776);
  let isPremiumResult = obj1.isPremium(stateFromStores);
  obj = {};
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.lqaIxI);
  if (isPremiumResult) {
    isPremiumResult = callback(require(7871) /* NitroWheelIcon */.NitroWheelIcon, {});
  }
  obj.trailing = isPremiumResult;
  ({ titleWrapper: obj4.titleWrapperStyle, titleContainer: obj4.titleContainerStyle } = tmp);
  const items1 = [callback(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj), ];
  obj1 = { hasIcons: false };
  const obj2 = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj2.label = intl2.string(require(1212) /* getSystemLocale */.t["MsUY/S"]);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj2.subLabel = intl3.string(require(1212) /* getSystemLocale */.t.r5hKOy);
  obj2.onPress = handleUploadAvatarSelect;
  const items2 = [callback(require(5165) /* TableRowInner */.TableRow, obj2), , , , ];
  let tmp10 = null != handleUploadGIFAvatarSelect && !showAnimatedAvatarUpsell;
  if (tmp10) {
    const obj3 = {};
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj3.label = intl4.string(require(1212) /* getSystemLocale */.t["xsC+/y"]);
    obj3.onPress = handleUploadGIFAvatarSelect;
    tmp10 = callback(require(5165) /* TableRowInner */.TableRow, obj3);
  }
  items2[1] = tmp10;
  if (showAnimatedAvatarUpsell) {
    const obj4 = {};
    const obj5 = { style: tmp.upsellTitleContainer };
    const obj6 = {};
    const intl5 = require(1212) /* getSystemLocale */.intl;
    obj6.text = intl5.string(require(1212) /* getSystemLocale */.t.xZ0Wot);
    const items3 = [callback(require(7495) /* Form */.FormLabel, obj6), ];
    const obj7 = { style: tmp.nitroWheel, size: "sm" };
    items3[1] = callback(require(7871) /* NitroWheelIcon */.NitroWheelIcon, obj7);
    obj5.children = items3;
    obj4.label = callback2(View, obj5);
    const obj8 = {};
    const obj9 = { style: tmp.sublabel, numberOfLines: 3 };
    const intl6 = require(1212) /* getSystemLocale */.intl;
    obj9.text = intl6.string(require(1212) /* getSystemLocale */.t.L3UPqR);
    const items4 = [callback(require(7495) /* Form */.FormSubLabel, obj9), ];
    const obj10 = { style: tmp.upsellButton };
    const obj11 = { analyticsObject: AnalyticsObjects.ANIMATED_AVATAR };
    const intl7 = require(1212) /* getSystemLocale */.intl;
    obj11.label = intl7.string(require(1212) /* getSystemLocale */.t.mr4K7D);
    obj10.children = callback(importDefault(13566), obj11);
    items4[1] = callback(View, obj10);
    obj8.children = items4;
    obj4.subLabel = callback2(closure_8, obj8);
    showAnimatedAvatarUpsell = callback(require(5165) /* TableRowInner */.TableRow, obj4);
    const tmp21 = importDefault(13566);
  }
  items2[2] = showAnimatedAvatarUpsell;
  let tmp23 = null != handleEditAvatarDecorationSelect;
  if (tmp23) {
    const obj12 = {};
    const obj13 = { style: tmp.upsellTitleContainer };
    const obj14 = {};
    const intl8 = require(1212) /* getSystemLocale */.intl;
    obj14.text = intl8.string(require(1212) /* getSystemLocale */.t.BVcYCx);
    obj13.children = callback(require(7495) /* Form */.FormLabel, obj14);
    obj12.label = callback(View, obj13);
    obj12.onPress = handleEditAvatarDecorationSelect;
    tmp23 = callback(require(5165) /* TableRowInner */.TableRow, obj12);
  }
  items2[3] = tmp23;
  if (flag) {
    const obj15 = {};
    const obj16 = {};
    const items5 = [, ];
    ({ label: arr6[0], remove: arr6[1] } = tmp);
    obj16.style = items5;
    const intl9 = require(1212) /* getSystemLocale */.intl;
    obj16.text = intl9.string(require(1212) /* getSystemLocale */.t.twB3fz);
    obj15.label = callback(require(7495) /* Form */.FormLabel, obj16);
    obj15.onPress = handleRemoveAvatarSelect;
    flag = callback(require(5165) /* TableRowInner */.TableRow, obj15);
  }
  items2[4] = flag;
  obj1.children = items2;
  items1[1] = callback2(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj1);
  obj.children = items1;
  return callback2(require(5500) /* ActionSheet */.ActionSheet, obj);
};
