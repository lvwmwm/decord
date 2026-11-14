// Module ID: 12259
// Function ID: 12260
// Name: UserProfileApplicationWidgetHeroImage
// Dependencies: [19, 17, 1072, 21, 5306, 7533, 5893, 6020, 2]
// Exports: default

// Module 12259 (UserProfileApplicationWidgetHeroImage)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import LinearGradientDefault from "LinearGradient" /* 5893 */;
import FastImageDefault from "FastImage" /* 6020 */;
import _modDef7533 from "module_7533" /* 7533 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
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
  let height;
  let items;
  let items1;
  let media;
  let obj2;
  let obj5;
  let obj6;
  let result1;
  let tmp12;
  let tmp8Result;
  let width;
  ({ media, width, height } = arg0);
  const tmp = closure_7();
  let str;
  if (null != width) {
    const _Math = Math;
    str = Math.min(width, 212);
  }
  let result;
  if (null != str) {
    result = str * media.height / media.width;
  }
  let minResult = height;
  if (null != result) {
    let tmp6 = height;
    const _Math2 = Math;
    if (height == null) {
      tmp6 = result;
    }
    minResult = min(tmp6, result);
  }
  let str2 = str;
  const tmp10 = _modDef7533;
  if (str == null) {
    str2 = "100%";
  }
  size = { width: str2, maxWidth: 212, alignSelf: "flex-end", height: minResult, aspectRatio: result1, overflow: "hidden" };
  result1 = undefined;
  if (null == minResult) {
    result1 = media.width / media.height;
  }
  const obj = { style: size, androidRenderingMode: "hardware", maskElement: hasOwnProperty(View, obj2), children: React3(tmp12, obj5) };
  obj2 = { style: tmp.mask, children: items };
  items = [, ];
  const obj3 = { start: HorizontalGradient.START, end: HorizontalGradient.END, colors, style: tmp.gradient };
  items[0] = React3(LinearGradientDefault, obj3);
  const obj4 = { style: tmp.remainder };
  items[1] = React3(View, obj4);
  obj5 = { style: tmp.imageClip, collapsable: false, children: React3(tmp8Result, obj6) };
  obj6 = { source: { uri: media.url }, style: items1, resizeMode: "cover" };
  items1 = [tmp.image, ];
  tmp12 = View;
  tmp8Result = FastImageDefault;
  if (str == null) {
    str = "100%";
  }
  items1[1] = { width: str, height: result, aspectRatio: media.width / media.height };
  return React3(tmp10, obj);
};
