// Module ID: 8272
// Function ID: 65237
// Name: NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG
// Dependencies: [31, 27, 1278, 33, 1273, 689, 4130, 566, 3840, 8273, 8275, 8276, 2]
// Exports: NameplateDummyUserPreview

// Module 8272 (NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = {};
obj = { padding: require("_createForOfIteratorHelperLoose").space.PX_4, avatarMarginRight: require("_createForOfIteratorHelperLoose").space.PX_4, placeholderBarHeight: 6 };
obj[require("Button").AvatarSizes.XSMALL_20] = obj;
obj[require("Button").AvatarSizes.XSMALL] = { padding: 6, avatarMarginRight: 6, placeholderBarHeight: 8 };
obj = { padding: require("_createForOfIteratorHelperLoose").space.PX_8, avatarMarginRight: require("_createForOfIteratorHelperLoose").space.PX_8, placeholderBarHeight: 14 };
obj[require("Button").AvatarSizes.NORMAL] = obj;
let closure_8 = _createForOfIteratorHelperLoose.createStyles((arg0, arg1) => {
  let obj = {};
  obj = { padding: null, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "100%", position: "relative" };
  obj.padding = obj[arg0].padding;
  obj.borderRadius = importDefault(689).radii.sm;
  obj.container = obj;
  obj = { borderRadius: importDefault(689).radii.round, marginRight: tmp.avatarMarginRight };
  let str = "transparent";
  if (arg1) {
    str = importDefault(689).colors.BORDER_STRONG;
  }
  obj.backgroundColor = str;
  obj.avatarContainer = obj;
  const obj1 = {};
  let num = 0.5;
  if (arg1) {
    num = 0;
  }
  obj1.opacity = num;
  obj.avatar = obj1;
  obj.placeholderBar = { borderRadius: importDefault(689).radii.md, height: obj[arg0].placeholderBarHeight, backgroundColor: importDefault(689).colors.BORDER_STRONG };
  const obj2 = { borderRadius: importDefault(689).radii.md, height: obj[arg0].placeholderBarHeight, backgroundColor: importDefault(689).colors.BORDER_STRONG };
  obj.nameplate = { borderRadius: importDefault(689).radii.sm };
  return obj;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/nameplates/native/NameplateDummyUserPreview.tsx");

export const NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG = obj;
export const NameplateDummyUserPreview = function NameplateDummyUserPreview(hideAvatar) {
  let animate;
  let nameplate;
  let style;
  let flag = hideAvatar.hideAvatar;
  if (flag === undefined) {
    flag = false;
  }
  let NORMAL = hideAvatar.avatarSize;
  if (NORMAL === undefined) {
    NORMAL = require(1273) /* Button */.AvatarSizes.NORMAL;
  }
  ({ animate, nameplate, style } = hideAvatar);
  if (animate === undefined) {
    animate = false;
  }
  const tmp3 = callback2(NORMAL, flag);
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  obj = { style: items1 };
  items1 = [tmp3.container, style];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_0(outer1_2[8]).isThemeDark(outer1_4.theme));
  obj = { nameplate, fullOpacity: true, style: tmp3.nameplate, animate };
  const items2 = [callback(importDefault(8273), obj), , ];
  const obj1 = { style: tmp3.avatarContainer };
  const obj2 = {};
  if (stateFromStores) {
    let tmp10 = 8275;
  } else {
    tmp10 = 8276;
  }
  obj2.source = importDefault(tmp10);
  obj2.size = NORMAL;
  obj2["aria-hidden"] = true;
  obj2.style = tmp3.avatar;
  obj1.children = callback(require(1273) /* Button */.Avatar, obj2);
  items2[1] = callback(View, obj1);
  const items3 = [tmp3.placeholderBar, { width: hideAvatar.width }];
  items2[2] = callback(View, { style: items3 });
  obj.children = items2;
  return closure_6(View, obj);
};
