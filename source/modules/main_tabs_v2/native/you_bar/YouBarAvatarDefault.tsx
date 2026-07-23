// Module ID: 15114
// Function ID: 115106
// Name: AvatarDefault
// Dependencies: [31, 27, 13997, 653, 33, 4130, 689, 3834, 1273, 7873, 8007, 2]

// Module 15114 (AvatarDefault)
import { View } from "get ActivityIndicator";
import CONNECTION_BANNER_HEIGHT from "CONNECTION_BANNER_HEIGHT";
import { StatusTypes } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_10;
let closure_12;
let closure_13;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function AvatarDefault() {
  const tmp = callback3();
  let obj = require(3834) /* map */;
  const token = obj.useToken(importDefault(689).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  let obj1 = require(1273) /* Button */;
  const statusSize = obj1.getStatusSize(closure_5);
  let num = 0;
  if (null != statusSize) {
    num = statusSize;
  }
  const tmp4 = require(1273) /* Button */.AVATAR_SIZE_MAP[closure_5];
  const result = num / 2;
  const sum = result + require(1273) /* Button */.STATUS_PADDING;
  const diff = tmp4 - sum - num / 4 * 2;
  obj = { shape: require(7873) /* SolidCutout */.CutoutShape.Circle, x: diff, y: diff, size: 2 * sum };
  obj = {};
  obj1 = { height: require(1273) /* Button */.AVATAR_SIZE_MAP[closure_5], width: require(1273) /* Button */.AVATAR_SIZE_MAP[closure_5], position: "relative" };
  obj.style = obj1;
  const obj2 = { cutouts: items };
  items = [obj];
  const obj3 = { style: items1 };
  items1 = [tmp.placeholderAvatar, { width: tmp4, height: tmp4, backgroundColor: token }];
  const items2 = [callback(View, { style: tmp.placeholderAvatarBackground }), ];
  const obj5 = { size: "custom", style: { width: tmp4, height: tmp4 }, color: "background-mod-strong" };
  items2[1] = callback(require(8007) /* ReactionIcon */.ReactionIcon, obj5);
  obj3.children = items2;
  obj2.children = callback2(View, obj3);
  const items3 = [callback(importDefault(7873), obj2), ];
  const obj6 = { size: num, status: StatusTypes.OFFLINE, isMobileOnline: false, isVROnline: false, streaming: false, style: { position: "absolute", right: closure_6, bottom: closure_6 } };
  items3[1] = callback(require(1273) /* Button */.Status, obj6);
  obj.children = items3;
  return callback2(View, obj);
}
function AvatarDefaultLarge() {
  const tmp = callback3();
  let obj = require(3834) /* map */;
  const token = obj.useToken(importDefault(689).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  const tmp3 = require(1273) /* Button */.AVATAR_SIZE_MAP[closure_4];
  const result = closure_8 / 2;
  const sum = result + require(1273) /* Button */.STATUS_PADDING;
  const diff = tmp3 - sum - closure_8 / 4 * 2;
  obj = { shape: require(7873) /* SolidCutout */.CutoutShape.Circle, x: diff + closure_10, y: diff + closure_10, size: 2 * sum };
  obj = { style: { height: require(1273) /* Button */.AVATAR_SIZE_MAP[closure_5], width: require(1273) /* Button */.AVATAR_SIZE_MAP[closure_5], position: "relative" } };
  const obj2 = {};
  const items = [tmp.avatarShadow, ];
  const obj1 = { height: require(1273) /* Button */.AVATAR_SIZE_MAP[closure_5], width: require(1273) /* Button */.AVATAR_SIZE_MAP[closure_5], position: "relative" };
  items[1] = { position: "absolute", width: tmp3, height: tmp3, top: tmp7 - (require(1273) /* Button */.AVATAR_SIZE_MAP[closure_4] - closure_7) / 2, left: -closure_9 };
  obj2.style = items;
  const obj4 = { cutouts: items1 };
  items1 = [obj];
  const obj5 = { style: items2 };
  items2 = [tmp.placeholderAvatar, { width: tmp3, height: tmp3, backgroundColor: token }];
  const obj3 = { position: "absolute", width: tmp3, height: tmp3, top: tmp7 - (require(1273) /* Button */.AVATAR_SIZE_MAP[closure_4] - closure_7) / 2, left: -closure_9 };
  const obj6 = { style: tmp.placeholderAvatarBackground };
  const items3 = [callback(View, obj6), ];
  const obj7 = { size: "custom", style: null, color: "background-mod-strong" };
  const obj8 = { width: require(1273) /* Button */.AVATAR_SIZE_MAP[closure_5], height: require(1273) /* Button */.AVATAR_SIZE_MAP[closure_5] };
  obj7.style = obj8;
  items3[1] = callback(require(8007) /* ReactionIcon */.ReactionIcon, obj7);
  obj5.children = items3;
  obj4.children = callback2(View, obj5);
  const items4 = [callback(importDefault(7873), obj4), ];
  const obj9 = { size: closure_8, status: StatusTypes.OFFLINE, isMobileOnline: false, isVROnline: false, streaming: false, style: { position: "absolute", right: closure_6 - closure_10, bottom: closure_6 - closure_10 } };
  items4[1] = callback(require(1273) /* Button */.Status, obj9);
  obj2.children = items4;
  obj.children = callback2(View, obj2);
  return callback(View, obj);
}
({ YOU_BAR_AVATAR_LARGE_SIZE: closure_4, YOU_BAR_AVATAR_PLACEHOLDER_SIZE: closure_5, YOU_BAR_STATUS_INSET: closure_6, YOU_BAR_HEIGHT: closure_7, YOU_BAR_LARGE_STATUS_SIZE: closure_8, YOU_BAR_PADDING: closure_9, YOU_BAR_STATUS_OFFSET: closure_10 } = CONNECTION_BANNER_HEIGHT);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
let obj = {};
obj = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, justifyContent: "center", alignItems: "center" };
obj.placeholderAvatar = obj;
_createForOfIteratorHelperLoose = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
obj.placeholderAvatarBackground = _createForOfIteratorHelperLoose;
const merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_MEDIUM);
obj.avatarShadow = {};
let closure_14 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj2 = {};
const memoResult = require("result").memo(function YouBarAvatarDefault(isLarge) {
  return callback(isLarge.isLarge ? AvatarDefaultLarge : AvatarDefault, {});
});
let result = require("CONNECTION_BANNER_HEIGHT").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarAvatarDefault.tsx");

export default memoResult;
