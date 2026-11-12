// Module ID: 18980
// Function ID: 18981
// Name: InterestGameCover
// Dependencies: [32, 19, 17, 18979, 21, 575, 5867, 5243, 18981, 5957, 18982, 2]
// Exports: default

// Module 18980 (InterestGameCover)
import nativeDefault from "native" /* 575 */;
import TextVariants from "TextVariants" /* 5867 */;
import FastImageDefault from "FastImage" /* 5957 */;
import InterestGamePickerConstants from "InterestGamePickerConstants" /* 18979 */;
import useInterestCoverColor from "useInterestCoverColor" /* 18981 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
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
function NoCover(imageWidth) {
  let PX_32;
  let compact;
  let game;
  let items1;
  let items2;
  let items3;
  let num;
  let obj10;
  let obj3;
  let obj5;
  let obj6;
  let obj8;
  let tmp4;
  let tmp4Result;
  let width;
  ({ game, width, compact } = imageWidth);
  let iconURL;
  let closure_1;
  imageWidth = imageWidth.imageWidth;
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
  const tmp6 = closure_11();
  iconURL = game.getIconURL(Math.min(1024 / hasOwnProperty.get(), imageWidth));
  const iconURL1 = game.getIconURL(16);
  const tmp9 = _slicedToArray(react.useState(null), 2);
  closure_1 = tmp9[1];
  let tmp10 = null != iconURL && iconURL !== tmp9[0];
  const tmp11 = tmp4(18981)(game.id, iconURL1);
  const tmp13 = closure_12(width, minResult, Math.max(width / TILE_ASPECT_RATIO - width, c10), tmp11);
  const items = [tmp6.fallback, , ];
  let titleOnly = tmp16;
  const tmp14 = React4;
  if (!tmp10) {
    titleOnly = tmp6.titleOnly;
  }
  items[1] = titleOnly;
  let background = tmp17;
  if (!(!compact && tmp10)) {
    background = tmp13.background;
  }
  const obj = { style: items, children: items1 };
  items[2] = background;
  let tmp18 = tmp10 && null != tmp11 && tmp17;
  if (tmp18) {
    const obj2 = { accessible: false, source: obj3, style: tmp6.texture, blurRadius: 32, resizeMode: "cover", fadeDuration: 0 };
    obj3 = { uri: iconURL };
    tmp18 = metroImportAll(tmp4(5957), obj2);
  }
  items1 = [tmp18, , , ];
  let tmp20 = tmp12;
  if (tmp20) {
    const obj4 = { style: items2, children: metroImportAll(tmp4(5957), obj5) };
    items2 = [tmp6.art, tmp13.art];
    obj5 = {
      source: obj6,
      style: tmp13.image,
      resizeMode: "contain",
      onError() {
          return closure_1(iconURL);
        }
    };
    obj6 = { uri: iconURL };
    tmp20 = metroImportAll(tmp15, obj4);
  }
  items1[1] = tmp20;
  if (tmp10) {
    tmp10 = tmp17;
  }
  if (tmp10) {
    const obj7 = {
      source: obj8,
      style: items3,
      resizeMode: "contain",
      onError() {
          return closure_1(iconURL);
        }
    };
    items3 = [tmp6.icon, tmp13.icon];
    obj8 = { uri: iconURL };
    tmp10 = metroImportAll(tmp4(5957), obj7);
  }
  items1[2] = tmp10;
  let tmp24Result = !compact;
  if (compact) {
    tmp24Result = tmp16;
  }
  if (tmp24Result) {
    let tmp25;
    if (!compact && tmp10) {
      const items4 = [tmp6.banner, , ];
      ({ banner: arr5[1], background: arr5[2] } = tmp13);
      tmp25 = items4;
    }
    const obj9 = { style: tmp25, children: metroImportAll(tmp4Result, obj10) };
    const _Math2 = Math;
    obj10 = { name: game.name, width: Math.max(0, width - tmp4(575).space.PX_16), maxLines: num };
    num = undefined;
    tmp4Result = tmp4(18982);
    if (!compact && tmp10) {
      num = 2;
    }
    tmp24Result = tmp24(tmp15, obj9);
  }
  items1[3] = tmp24Result;
  return tmp14(metroRequire, obj);
}
({ PixelRatio: hasOwnProperty, StyleSheet, View: metroRequire } = react_native);
const TILE_ASPECT_RATIO = InterestGamePickerConstants.TILE_ASPECT_RATIO;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const PX_6 = nativeDefault.space.PX_6;
const PX_8 = nativeDefault.space.PX_8;
const TextVariantsFlat = TextVariants.TextVariantsFlat;
const found = TextVariantsFlat.find((name) => "body-xs/semibold" === name.name);
let num;
if (found != null) {
  num = found.lineHeight;
}
if (num == null) {
  num = 16;
}
const sum = 2 * num + PX_6 + PX_8;
let c10 = sum;
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
rect1 = { position: "absolute", left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8, paddingTop: PX_6, paddingBottom: PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_ACCENT };
let closure_11 = createStyles(obj);
createStyles = createStyles_mod;
let closure_12 = createStyles.createStyles((height, width, minHeight, backgroundColor) => {
  let obj;
  let obj3;
  let obj4;
  let obj5;
  if (null == backgroundColor) {
    obj = {};
  } else {
    obj = { backgroundColor };
  }
  const obj2 = { background: obj, art: obj3, image: { width: height, height }, icon: { width, height: width }, banner: { minHeight } };
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

export default function InterestGameCover(imageWidth) {
  let compact;
  let game;
  let items;
  let obj3;
  let width;
  ({ game, width, compact } = imageWidth);
  if (compact === undefined) {
    compact = false;
  }
  imageWidth = imageWidth.imageWidth;
  if (imageWidth === undefined) {
    imageWidth = width;
  }
  const tmp = closure_11();
  const coverURL = game.getCoverURL(Math.ceil(imageWidth * hasOwnProperty.get()));
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
    const obj4 = { game, width, compact, imageWidth };
    tmp4 = metroImportAll(NoCover, obj4);
  }
  items[1] = tmp4;
  return tmp5(tmp6, obj);
};
export const BIG_ICON_BANNER_PADDING_TOP = PX_6;
export const BIG_ICON_BANNER_PADDING_BOTTOM = PX_8;
export const BIG_ICON_TITLE_LINES = 2;
export const BIG_ICON_TITLE_AREA_HEIGHT = sum;
export const COVER_TEXTURE_BLUR_RADIUS = 32;
