// Module ID: 6156
// Function ID: 6157
// Name: FastImage
// Dependencies: [109, 19, 17, 21, 558, 576, 1382, 6157, 2]

// Module 6156 (FastImage)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import FastImageNativeComponentDefault from "FastImageNativeComponent" /* 6157 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let closure_3 = ["accessible", "accessibilityLabel", "autoPlay", "enableAnimation", "fadeDuration", "paused", "placeholder", "resizeMode", "source", "style", "tintColor", "usesSmallCache"];
({ Image: hasOwnProperty, StyleSheet: metroRequire } = react_native);
const jsx = Fragment.jsx;
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function FastImage(arg0) {
  let accessibilityLabel;
  let accessible;
  let autoPlay;
  let enableAnimation;
  let fadeDuration;
  let paused;
  let placeholder;
  let resizeMode;
  let source;
  let style;
  let tintColor;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp23;
  let tmp24;
  let tmp27;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let usesSmallCache;
  const obj = react2;
  const cResult = obj.c(47);
  if (cResult[0] !== arg0) {
    ({ accessible, accessibilityLabel, autoPlay, enableAnimation, fadeDuration, paused, placeholder, resizeMode, source, style, tintColor, usesSmallCache } = arg0);
    const tmp19 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = accessibilityLabel;
    cResult[2] = accessible;
    cResult[3] = paused;
    cResult[4] = placeholder;
    cResult[5] = tmp19;
    cResult[6] = resizeMode;
    cResult[7] = source;
    cResult[8] = style;
    cResult[9] = autoPlay;
    cResult[10] = enableAnimation;
    cResult[11] = fadeDuration;
    cResult[12] = usesSmallCache;
    cResult[13] = tintColor;
    tmp16 = tintColor;
    tmp15 = usesSmallCache;
    tmp14 = fadeDuration;
    tmp13 = enableAnimation;
    tmp12 = autoPlay;
    tmp11 = style;
    tmp10 = source;
    tmp9 = resizeMode;
    tmp8 = tmp19;
    tmp7 = placeholder;
    tmp6 = paused;
    tmp5 = accessible;
    tmp4 = accessibilityLabel;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
    tmp11 = cResult[8];
    tmp12 = cResult[9];
    tmp13 = cResult[10];
    tmp14 = cResult[11];
    tmp15 = cResult[12];
    tmp16 = cResult[13];
  }
  let num15 = 200;
  if (undefined !== tmp14) {
    num15 = tmp14;
  }
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { overflow: "hidden" };
    cResult[14] = obj2;
    tmp23 = obj2;
  } else {
    tmp23 = cResult[14];
  }
  if (cResult[15] !== tmp16) {
    let tmp26;
    if (null != tmp16) {
      tmp26 = { tintColor: tmp16 };
      const obj3 = { tintColor: tmp16 };
    }
    cResult[15] = tmp16;
    cResult[16] = tmp26;
    tmp24 = tmp26;
  } else {
    tmp24 = cResult[16];
  }
  if (cResult[17] !== tmp9) {
    let tmp29;
    if (null != tmp9) {
      tmp29 = { resizeMode: tmp9 };
      const obj4 = { resizeMode: tmp9 };
    }
    cResult[17] = tmp9;
    cResult[18] = tmp29;
    tmp27 = tmp29;
  } else {
    tmp27 = cResult[18];
  }
  if (cResult[19] === tmp11) {
    if (cResult[20] === tmp24) {
      let tmp30;
      if (cResult[21] === tmp27) {
        tmp30 = cResult[22];
      }
      if (tmp5 == null) {
        tmp5 = null != tmp4 || undefined;
      }
      const tmp33 = null != tmp10 && typeof tmp10 === "object" && "__packager_asset" in tmp10 && true === tmp10.__packager_asset;
      const _Array = Array;
      const isArray = Array.isArray(tmp10);
      metroRequire.flatten(tmp11);
      const tmpResult = PlatformUtils;
      if (!tmpResult.isAndroid()) {
        if (typeof tmp10 !== "number") {
          if (!tmp33) {
            let tmp38;
            const _Array2 = Array;
            let first = tmp10;
            if (Array.isArray(tmp10)) {
              first = tmp10[0];
            }
            if (cResult[33] !== tmp7) {
              let assetSource = null;
              if (null != tmp7) {
                assetSource = hasOwnProperty.resolveAssetSource(tmp7);
              }
              let uri;
              if (assetSource != null) {
                uri = assetSource.uri;
              }
              cResult[33] = tmp7;
              cResult[34] = uri;
              tmp38 = uri;
            } else {
              tmp38 = cResult[34];
            }
            if (cResult[35] === tmp4) {
              if (cResult[36] === tmp5) {
                if (cResult[37] === (undefined === tmp12 || tmp12)) {
                  if (cResult[38] === (undefined === tmp13 || tmp13)) {
                    if (cResult[39] === num15) {
                      if (cResult[40] === tmp6) {
                        if (cResult[41] === tmp8) {
                          if (cResult[42] === tmp30) {
                            if (cResult[43] === tmp38) {
                              if (cResult[44] === first) {
                                let tmp42;
                                if (cResult[45] === (undefined !== tmp15 && tmp15)) {
                                  tmp42 = cResult[46];
                                }
                                return tmp42;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            FastImageNativeComponentDefault;
            const merged = Object.assign(tmp8);
            const tmp49 = <tmp45 accessible={tmp5} accessibilityLabel={tmp4} source={first} style={tmp30} placeholder={tmp38} autoPlay={undefined === tmp12 || tmp12} enableAnimation={undefined === tmp13 || tmp13} paused={tmp6} fadeDuration={num15} usesSmallCache={undefined !== tmp15 && tmp15} />;
            cResult[35] = tmp4;
            cResult[36] = tmp5;
            cResult[37] = undefined === tmp12 || tmp12;
            cResult[38] = undefined === tmp13 || tmp13;
            cResult[39] = num15;
            cResult[40] = tmp6;
            cResult[41] = tmp8;
            cResult[42] = tmp30;
            cResult[43] = tmp38;
            cResult[44] = first;
            cResult[45] = undefined !== tmp15 && tmp15;
            cResult[46] = tmp49;
            tmp42 = tmp49;
          }
        }
      }
      let tmp50;
      const tmpResult2 = PlatformUtils;
      if (tmpResult2.isAndroid()) {
        tmp50 = tmp7;
      }
      let num35 = 0;
      if (typeof tmp10 !== "number") {
        num35 = 0;
        if (!tmp33) {
          num35 = num15;
        }
      }
      if (cResult[23] === tmp4) {
        if (cResult[24] === tmp5) {
          if (cResult[25] === tmp8) {
            if (cResult[26] === tmp9) {
              if (cResult[27] === tmp10) {
                if (cResult[28] === tmp30) {
                  if (cResult[29] === num35) {
                    if (cResult[30] === tmp50) {
                      let tmp51;
                      if (cResult[31] === tmp16) {
                        tmp51 = cResult[32];
                      }
                      return tmp51;
                    }
                  }
                }
              }
            }
          }
        }
      }
      const merged1 = Object.assign(tmp8);
      const tmp57 = <hasOwnProperty resizeMode={tmp9} source={tmp10} style={tmp30} tintColor={tmp16} accessible={tmp5} accessibilityLabel={tmp4} defaultSource={tmp50} fadeDuration={num35} />;
      cResult[23] = tmp4;
      cResult[24] = tmp5;
      cResult[25] = tmp8;
      cResult[26] = tmp9;
      cResult[27] = tmp10;
      cResult[28] = tmp30;
      cResult[29] = num35;
      cResult[30] = tmp50;
      cResult[31] = tmp16;
      cResult[32] = tmp57;
      tmp51 = tmp57;
    }
  }
  const items = [tmp23, tmp11, tmp24, tmp27];
  cResult[19] = tmp11;
  cResult[20] = tmp24;
  cResult[21] = tmp27;
  cResult[22] = items;
  tmp30 = items;
}) : (function FastImage(enableAnimation) {
  let accessibilityLabel;
  let accessible;
  let autoPlay;
  let first;
  let num2;
  let paused;
  let placeholder;
  let resizeMode;
  let source;
  let style;
  let tintColor;
  let tmp24;
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
  const items = [{ overflow: "hidden" }, style, , ];
  let tmp2;
  if (null != tintColor) {
    tmp2 = { tintColor };
    const obj = { tintColor };
  }
  items[2] = tmp2;
  let tmp3;
  if (null != resizeMode) {
    tmp3 = { resizeMode };
    const obj2 = { resizeMode };
  }
  items[3] = tmp3;
  if (accessible == null) {
    accessible = null != accessibilityLabel || undefined;
  }
  const tmp5 = null != source && typeof source === "object" && "__packager_asset" in source && true === source.__packager_asset;
  const isArray = Array.isArray(source);
  metroRequire.flatten(style);
  const obj3 = PlatformUtils;
  if (!obj3.isAndroid()) {
    if (typeof source !== "number") {
      let tmp21Result;
      if (!tmp5) {
        const obj4 = { accessible, accessibilityLabel, source: first, style: items, placeholder: uri, autoPlay, enableAnimation: flag, paused, fadeDuration: num, usesSmallCache };
        const tmp12 = FastImageNativeComponentDefault;
        const merged1 = Object.assign(merged);
        const _Array = Array;
        first = source;
        const tmp10 = jsx;
        if (Array.isArray(source)) {
          first = source[0];
        }
        let assetSource = null;
        if (null != placeholder) {
          assetSource = hasOwnProperty.resolveAssetSource(placeholder);
        }
        uri = undefined;
        if (assetSource != null) {
          uri = assetSource.uri;
        }
        tmp21Result = tmp10(tmp12, obj4);
      }
      return tmp21Result;
    }
  }
  const obj5 = { resizeMode, source, style: items, tintColor, accessible, accessibilityLabel, defaultSource: tmp24, fadeDuration: num2 };
  const merged2 = Object.assign(merged);
  tmp24 = undefined;
  const tmp21 = jsx;
  const tmp22 = hasOwnProperty;
  const tmp8Result = PlatformUtils;
  if (tmp8Result.isAndroid()) {
    tmp24 = placeholder;
  }
  num2 = 0;
  if (typeof source !== "number") {
    num2 = 0;
    if (!tmp5) {
      num2 = num;
    }
  }
  tmp21Result = tmp21(tmp22, obj5);
}));
const result = size.fileFinishedImporting("components_native/common/FastImage.tsx");

export default memoResult;
