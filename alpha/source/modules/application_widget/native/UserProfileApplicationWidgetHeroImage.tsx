// Module ID: 14658
// Function ID: 14659
// Name: UserProfileApplicationWidgetHeroImage
// Dependencies: [19, 17, 1071, 21, 5043, 7231, 5598, 5730, 2]
// Exports: default

// Module 14658 (UserProfileApplicationWidgetHeroImage)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1071 */;
import LinearGradientDefault from "LinearGradient" /* 5598 */;
import FastImageDefault from "FastImage" /* 5730 */;
import _modDef7231 from "module_7231" /* 7231 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
const HorizontalGradient = Constants.HorizontalGradient;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const colors = ["transparent", "black"];
let closure_7 = createStyles.createStyles({ mask: { flex: 1, flexDirection: "row" }, gradient: { width: 130 }, remainder: { flex: 1, backgroundColor: "black" }, imageClip: { width: "100%", height: "100%", overflow: "hidden" }, image: { position: "absolute", top: 0, right: 0, width: "100%" } });
let size = size_mod;
let result = size.fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetHeroImage.tsx");

export default function UserProfileApplicationWidgetHeroImage(arg0) {
  let fillContainer;
  let height;
  let items;
  let items1;
  let media;
  let obj2;
  let obj5;
  let obj6;
  let result1;
  let tmp10Result;
  let tmp14;
  let width;
  ({ media, width, height, fillContainer } = arg0);
  if (fillContainer === undefined) {
    fillContainer = false;
  }
  const tmp = closure_7();
  if (fillContainer) {
    fillContainer = media.width > 0;
  }
  if (fillContainer) {
    fillContainer = media.height > 0;
  }
  let bound;
  if (null != width) {
    const _Math = Math;
    bound = Math.min(width, 212);
  }
  let str = bound;
  if (fillContainer) {
    str = bound;
    if (null != bound) {
      str = bound;
      if (null != height) {
        const _Math2 = Math;
        str = Math.max(bound, height * media.width / media.height);
      }
    }
  }
  let result;
  if (null != str) {
    result = str * media.height / media.width;
  }
  let minResult = height;
  if (!fillContainer) {
    minResult = height;
    if (null != result) {
      let tmp8 = height;
      const _Math3 = Math;
      if (height == null) {
        tmp8 = result;
      }
      minResult = min(tmp8, result);
    }
  }
  let str2 = bound;
  const tmp12 = _modDef7231;
  if (bound == null) {
    str2 = "100%";
  }
  size = { width: str2, maxWidth: 212, alignSelf: "flex-end", height: minResult, aspectRatio: result1, overflow: "hidden" };
  result1 = undefined;
  if (null == minResult) {
    result1 = media.width / media.height;
  }
  const obj = { style: size, androidRenderingMode: "hardware", maskElement: hasOwnProperty(View, obj2), children: React3(tmp14, obj5) };
  obj2 = { style: tmp.mask, children: items };
  items = [, ];
  const obj3 = { start: HorizontalGradient.START, end: HorizontalGradient.END, colors, style: tmp.gradient };
  items[0] = React3(LinearGradientDefault, obj3);
  const obj4 = { style: tmp.remainder };
  items[1] = React3(View, obj4);
  obj5 = { style: tmp.imageClip, collapsable: false, children: React3(tmp10Result, obj6) };
  obj6 = { source: { uri: media.url }, style: items1, resizeMode: "cover" };
  items1 = [tmp.image, ];
  tmp10Result = FastImageDefault;
  tmp14 = View;
  if (str == null) {
    str = "100%";
  }
  items1[1] = { width: str, height: result, aspectRatio: media.width / media.height };
  return React3(tmp12, obj);
};
