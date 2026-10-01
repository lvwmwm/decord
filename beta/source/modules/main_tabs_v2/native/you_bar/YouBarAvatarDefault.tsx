// Module ID: 16023
// Function ID: 16024
// Name: YouBarAvatarDefault
// Dependencies: [19, 17, 14627, 1074, 21, 4836, 576, 4531, 1177, 8276, 8219, 2]

// Module 16023 (YouBarAvatarDefault)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import native from "native" /* 1177 */;
import useToken from "useToken" /* 4531 */;
import ReactionIcon2 from "ReactionIcon" /* 8219 */;
import ClipView from "ClipView" /* 8276 */;
import react from "react" /* 19 */;
import YouBarConstants from "YouBarConstants" /* 14627 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c10;
let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let rect;
let tmp4;
const ClipViewDefault = tmp4(8276);
function AvatarDefault() {
  let items;
  let items1;
  let items2;
  let items3;
  let obj5;
  let rect;
  const tmp = closure_14();
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  const obj2 = native;
  let num = obj2.getStatusSize(hasOwnProperty);
  if (num == null) {
    num = 0;
  }
  const tmp7 = native.AVATAR_SIZE_MAP[hasOwnProperty];
  const result = num / 2;
  const sum = result + tmp2(1177).STATUS_PADDING;
  const diff = tmp7 - sum - num / 4 * 2;
  const point = { shape: tmp2(8276).CutoutShape.Circle, x: diff, y: diff, size: 2 * sum };
  const obj3 = { style: size, children: items3 };
  size = { height: tmp2(1177).AVATAR_SIZE_MAP[tmp6], width: tmp2(1177).AVATAR_SIZE_MAP[tmp6], position: "relative" };
  const obj4 = { cutouts: items, children: map1(View, obj5) };
  items = [point];
  obj5 = { style: items1, children: items2 };
  items1 = [tmp.placeholderAvatar, { width: tmp7, height: tmp7, backgroundColor: token }];
  items2 = [, ];
  const obj6 = { style: tmp.placeholderAvatarBackground };
  const tmp4Result = ClipViewDefault;
  items2[0] = closure_12(View, obj6);
  const obj7 = { size: "custom", style: { width: tmp7, height: tmp7 }, color: "background-mod-strong" };
  items2[1] = closure_12(ReactionIcon2.ReactionIcon, obj7);
  items3 = [closure_12(tmp4Result, obj4), ];
  const obj8 = { size: num, status: StatusTypes.OFFLINE, isMobileOnline: false, isVROnline: false, streaming: false, style: rect };
  rect = { position: "absolute", right: bottom, bottom };
  items3[1] = closure_12(native.Status, obj8);
  return map1(View, obj3);
}
function AvatarDefaultLarge() {
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj3;
  let obj5;
  let rect;
  let size2;
  let tmp7;
  const tmp = closure_14();
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  const tmp3 = native.AVATAR_SIZE_MAP[React3];
  const result = metroImportAll / 2;
  const sum = result + native.STATUS_PADDING;
  const diff = tmp3 - sum - metroImportAll / 4 * 2;
  const point = { shape: ClipView.CutoutShape.Circle, x: diff + authStore, y: diff + authStore, size: 2 * sum };
  const obj2 = { style: metroImportAll, children: map1(View, obj3) };
  metroImportAll = { height: native.AVATAR_SIZE_MAP[hasOwnProperty], width: native.AVATAR_SIZE_MAP[hasOwnProperty], position: "relative" };
  obj3 = { style: items, children: items4 };
  items = [tmp.avatarShadow, ];
  const size1 = { position: "absolute", width: tmp3, height: tmp3, top: tmp7 - (native.AVATAR_SIZE_MAP[React3] - metroImportDefault) / 2, left: -React4 };
  tmp7 = -React4;
  items[1] = size1;
  const obj4 = { cutouts: items1, children: map1(View, obj5) };
  items1 = [point];
  obj5 = { style: items2, children: items3 };
  items2 = [tmp.placeholderAvatar, { width: tmp3, height: tmp3, backgroundColor: token }];
  items3 = [, ];
  const obj6 = { style: tmp.placeholderAvatarBackground };
  const tmp8 = ClipViewDefault;
  items3[0] = closure_12(View, obj6);
  const obj7 = { size: "custom", style: size2, color: "background-mod-strong" };
  size2 = { width: native.AVATAR_SIZE_MAP[hasOwnProperty], height: native.AVATAR_SIZE_MAP[hasOwnProperty] };
  const ReactionIcon = ReactionIcon2.ReactionIcon;
  items3[1] = closure_12(ReactionIcon, obj7);
  items4 = [closure_12(tmp8, obj4), ];
  const obj8 = { size: metroImportAll, status: StatusTypes.OFFLINE, isMobileOnline: false, isVROnline: false, streaming: false, style: rect };
  rect = { position: "absolute", right: metroRequire - authStore, bottom: metroRequire - authStore };
  items4[1] = closure_12(native.Status, obj8);
  return closure_12(View, obj2);
}
const View = react_native.View;
({ YOU_BAR_AVATAR_LARGE_SIZE: closure_4, YOU_BAR_AVATAR_PLACEHOLDER_SIZE: hasOwnProperty, YOU_BAR_STATUS_INSET: metroRequire, YOU_BAR_HEIGHT: metroImportDefault, YOU_BAR_LARGE_STATUS_SIZE: metroImportAll, YOU_BAR_PADDING: c9, YOU_BAR_STATUS_OFFSET: c10 } = YouBarConstants);
const StatusTypes = Constants.StatusTypes;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { placeholderAvatar: obj2, placeholderAvatarBackground: rect, avatarShadow: obj3 };
obj2 = { borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, justifyContent: "center", alignItems: "center" };
createStyles = createStyles.createStyles;
rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round };
obj3 = {};
const merged = Object.assign(nativeDefault.shadows.SHADOW_MEDIUM);
let closure_14 = createStyles(obj);
const memoResult = react.memo(function YouBarAvatarDefault(isLarge) {
  return closure_12(isLarge.isLarge ? AvatarDefaultLarge : AvatarDefault, {});
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarAvatarDefault.tsx");

export default memoResult;
