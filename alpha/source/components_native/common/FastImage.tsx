// Module ID: 5717
// Function ID: 5718
// Name: FastImage
// Dependencies: [19, 17, 21, 5718, 1375, 5719, 2]

// Module 5717 (FastImage)
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import FastImageNativeComponentDefault from "FastImageNativeComponent" /* 5719 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import FastImageApngExperiment_mod from "FastImageApngExperiment" /* 5718 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
({ Image: c3, StyleSheet: closure_4 } = react_native);
const jsx = Fragment.jsx;
let FastImageApngExperiment = FastImageApngExperiment_mod;
FastImageApngExperiment = FastImageApngExperiment.initializeFastImageApngExperiment();
const memoResult = react.memo(function FastImage(enableAnimation) {
  let accessibilityLabel;
  let accessible;
  let autoPlay;
  let items2;
  let num2;
  let paused;
  let placeholder;
  let resizeMode;
  let source;
  let style;
  let tintColor;
  let tmp2;
  let tmp23;
  let uri;
  let usesSmallCache;
  ({ accessible, accessibilityLabel, autoPlay } = enableAnimation);
  if (autoPlay === undefined) {
    autoPlay = true;
  }
  let flag = enableAnimation.enableAnimation;
  if (flag === undefined) {
    flag = true;
  }
  let num = enableAnimation.fadeDuration;
  if (num === undefined) {
    num = 200;
  }
  ({ placeholder, resizeMode, source, style, tintColor, usesSmallCache, paused } = enableAnimation);
  if (usesSmallCache === undefined) {
    usesSmallCache = false;
  }
  const merged = Object.assign(enableAnimation, Object.assign({ accessible: 0, accessibilityLabel: 0, autoPlay: 0, enableAnimation: 0, fadeDuration: 0, paused: 0, placeholder: 0, resizeMode: 0, source: 0, style: 0, tintColor: 0, usesSmallCache: 0 }));
  if (null != source) {
    if (typeof source !== "number") {
      const _Array = Array;
      let tmp3 = source;
      if (!Array.isArray(source)) {
        const items = [source];
        tmp3 = items;
      }
      tmp2 = tmp3;
    }
  }
  const items1 = [{ overflow: "hidden" }, style, , ];
  let tmp4;
  if (null != tintColor) {
    tmp4 = { tintColor };
    const obj = { tintColor };
  }
  items1[2] = tmp4;
  let tmp5;
  if (null != resizeMode) {
    tmp5 = { resizeMode };
    const obj2 = { resizeMode };
  }
  items1[3] = tmp5;
  if (accessible == null) {
    accessible = null != accessibilityLabel || undefined;
  }
  const tmp7 = null != source && typeof source === "object" && "__packager_asset" in source && true === source.__packager_asset;
  React3.flatten(style);
  if (typeof source !== "number") {
    let tmp20Result;
    if (!tmp7) {
      const obj3 = { accessible, accessibilityLabel, shouldNotifyLoadEvents: null != merged.onLoadStart || null != merged.onLoad || null != merged.onLoadEnd || null != merged.onError || null != merged.onProgress, source: tmp2, style: items2, placeholder: uri, autoPlay, enableAnimation: flag, paused, fadeDuration: num, usesSmallCache };
      const tmp12 = FastImageNativeComponentDefault;
      const merged1 = Object.assign(merged);
      size = { width: null, height: null };
      ({ width: obj4.width, height: obj4.height } = merged);
      items2 = [size, items1];
      let assetSource = null;
      const tmp9 = jsx;
      if (null != placeholder) {
        assetSource = _false.resolveAssetSource(placeholder);
      }
      uri = undefined;
      if (assetSource != null) {
        uri = assetSource.uri;
      }
      tmp20Result = tmp9(tmp12, obj3);
    }
    return tmp20Result;
  }
  const obj5 = { resizeMode, source, style: items1, tintColor, accessible, accessibilityLabel, defaultSource: tmp23, fadeDuration: num2 };
  const merged2 = Object.assign(merged);
  tmp23 = undefined;
  const obj6 = PlatformUtils;
  const tmp20 = jsx;
  const tmp21 = _false;
  if (obj6.isAndroid()) {
    tmp23 = placeholder;
  }
  num2 = 0;
  if (typeof source !== "number") {
    num2 = 0;
    if (!tmp7) {
      num2 = num;
    }
  }
  tmp20Result = tmp20(tmp21, obj5);
});
let size = size_mod;
const result1 = size.fileFinishedImporting("components_native/common/FastImage.tsx");

export default memoResult;
