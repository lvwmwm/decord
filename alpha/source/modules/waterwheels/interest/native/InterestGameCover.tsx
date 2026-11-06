// Module ID: 18706
// Function ID: 18707
// Name: InterestGameCover
// Dependencies: [32, 19, 17, 18705, 21, 575, 5170, 18707, 5872, 18708, 2]
// Exports: default

// Module 18706 (InterestGameCover)
import nativeDefault from "native" /* 575 */;
import FastImageDefault from "FastImage" /* 5872 */;
import InterestGamePickerConstants from "InterestGamePickerConstants" /* 18705 */;
import useInterestCoverColor from "useInterestCoverColor" /* 18707 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let rect;
let rect1;
function NoCover(arg0) {
  let PX_32;
  let c1;
  let compact;
  let game;
  let items1;
  let items2;
  let items3;
  let obj10;
  let obj3;
  let obj5;
  let obj6;
  let obj8;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp32;
  let tmp4;
  let tmp4Result;
  let width;
  ({ game, width, compact } = arg0);
  let iconURL;
  c1 = undefined;
  const _Math = Math;
  const space = nativeDefault.space;
  if (compact) {
    PX_32 = space.PX_24;
    tmp4 = tmp;
  } else {
    PX_32 = space.PX_32;
    tmp4 = tmp;
  }
  const minResult = min(PX_32, Math.max(0, width - tmp4(575).space.PX_16));
  const tmp6 = closure_13();
  let tmp7 = width;
  const getIconURL = game.getIconURL;
  if (compact) {
    tmp7 = minResult;
  }
  iconURL = getIconURL(tmp7);
  const iconURL1 = game.getIconURL(16);
  [tmp11, c1] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  let tmp15 = null != iconURL;
  [tmp13, tmp14] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  if (tmp15) {
    tmp15 = iconURL !== tmp11;
  }
  const tmp16 = tmp4(18707)(game.id, iconURL1);
  const tmp18 = closure_14(width, minResult, Math.max(width / TILE_ASPECT_RATIO - width + closure_12, tmp13 + PX_6 + PX_8), tmp16);
  const items = [tmp6.fallback, , ];
  let titleOnly = tmp21;
  const tmp19 = React4;
  if (!tmp15) {
    titleOnly = tmp6.titleOnly;
  }
  items[1] = titleOnly;
  let background = tmp22;
  if (!(!compact && tmp15)) {
    background = tmp18.background;
  }
  const obj = { style: items, children: items1 };
  items[2] = background;
  let tmp23 = tmp15 && null != tmp16 && tmp22;
  if (tmp23) {
    const obj2 = { accessible: false, source: obj3, style: tmp6.texture, blurRadius: 32, resizeMode: "cover", fadeDuration: 0 };
    obj3 = { uri: iconURL };
    tmp23 = metroImportAll(tmp4(5872), obj2);
  }
  items1 = [tmp23, , , ];
  let tmp25 = tmp17;
  if (tmp25) {
    const obj4 = { style: items2, children: metroImportAll(tmp4(5872), obj5) };
    items2 = [tmp6.art, tmp18.art];
    obj5 = {
      source: obj6,
      style: tmp18.image,
      resizeMode: "contain",
      onError() {
          return _undefined(iconURL);
        }
    };
    obj6 = { uri: iconURL };
    tmp25 = metroImportAll(tmp20, obj4);
  }
  items1[1] = tmp25;
  if (tmp15) {
    tmp15 = tmp22;
  }
  if (tmp15) {
    const obj7 = {
      source: obj8,
      style: items3,
      resizeMode: "contain",
      onError() {
          return _undefined(iconURL);
        }
    };
    items3 = [tmp6.icon, tmp18.icon];
    obj8 = { uri: iconURL };
    tmp15 = metroImportAll(tmp4(5872), obj7);
  }
  items1[2] = tmp15;
  let tmp29Result = !compact;
  if (compact) {
    tmp29Result = tmp21;
  }
  if (tmp29Result) {
    let tmp30;
    if (!compact && tmp15) {
      const items4 = [tmp6.banner, , ];
      ({ banner: arr5[1], background: arr5[2] } = tmp18);
      tmp30 = items4;
    }
    const obj9 = { style: tmp30, children: metroImportAll(tmp4Result, obj10) };
    const _Math2 = Math;
    obj10 = { name: game.name, width: Math.max(0, width - tmp4(575).space.PX_16), alignLastBaseline: !compact && tmp15, onHeightChange: tmp32 };
    tmp32 = undefined;
    tmp4Result = tmp4(18708);
    if (!compact && tmp15) {
      tmp32 = tmp14;
    }
    tmp29Result = tmp29(tmp20, obj9);
  }
  items1[3] = tmp29Result;
  return tmp19(metroRequire, obj);
}
({ PixelRatio: hasOwnProperty, StyleSheet, View: metroRequire } = react_native);
const TILE_ASPECT_RATIO = InterestGamePickerConstants.TILE_ASPECT_RATIO;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const PX_6 = nativeDefault.space.PX_6;
const PX_8 = nativeDefault.space.PX_8;
let closure_12 = nativeDefault.space.PX_4 / 2;
let createStyles = createStyles_mod;
let obj = { cover: obj2, image: StyleSheet.absoluteFillObject, fallback: obj3, titleOnly: { paddingBottom: 0 }, icon: obj4, texture: obj5, art: rect, banner: rect1 };
obj2 = { overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { flex: 1, justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_ACCENT };
obj4 = { borderRadius: nativeDefault.radii.xs };
obj5 = { opacity: useInterestCoverColor.COVER_TEXTURE_OPACITY };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
rect = { position: "absolute", top: 0, left: 0, right: 0, overflow: "hidden", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
rect1 = { position: "absolute", left: 0, right: 0, bottom: 0, justifyContent: "flex-end", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8, paddingTop: PX_6, paddingBottom: PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_ACCENT };
let closure_13 = createStyles(obj);
createStyles = createStyles_mod;
let closure_14 = createStyles.createStyles((height, width, height2, backgroundColor) => {
  let obj;
  let obj3;
  let obj4;
  let obj5;
  if (null == backgroundColor) {
    obj = {};
  } else {
    obj = { backgroundColor };
  }
  const obj2 = { background: obj, art: obj3, image: { width: height, height }, icon: { width, height: width }, banner: { height: height2 } };
  obj3 = { height };
  if (null == backgroundColor) {
    obj4 = {};
  } else {
    obj4 = { backgroundColor: obj5.coverArtColor(backgroundColor) };
    obj5 = useInterestCoverColor;
  }
  const merged = Object.assign(obj4);
  return obj2;
});
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGameCover.tsx");

export default function InterestGameCover(arg0) {
  let compact;
  let game;
  let items;
  let obj3;
  let width;
  ({ game, width, compact } = arg0);
  if (compact === undefined) {
    compact = false;
  }
  const tmp = closure_13();
  const coverURL = game.getCoverURL(Math.ceil(width * hasOwnProperty.get()));
  const tmp3 = _slicedToArray(react.useState(null), 2);
  let closure_1 = tmp3[1];
  let tmp4 = null == coverURL || coverURL === tmp3[0];
  let tmp7 = !tmp4;
  const obj = { accessible: false, pointerEvents: "none", style: tmp.cover, children: items };
  const tmp5 = React4;
  const tmp6 = metroRequire;
  if (!tmp4) {
    const obj2 = {
      source: obj3,
      style: tmp.image,
      resizeMode: "cover",
      fadeDuration: 0,
      onError() {
          return closure_1(coverURL);
        }
    };
    obj3 = { uri: coverURL };
    tmp7 = metroImportAll(FastImageDefault, obj2);
  }
  items = [tmp7, ];
  if (tmp4) {
    const obj4 = { game, width, compact };
    tmp4 = metroImportAll(NoCover, obj4);
  }
  items[1] = tmp4;
  return tmp5(tmp6, obj);
};
export const BIG_ICON_BANNER_PADDING_TOP = PX_6;
export const BIG_ICON_BANNER_PADDING_BOTTOM = PX_8;
export const COVER_TEXTURE_BLUR_RADIUS = 32;
