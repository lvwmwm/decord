// Module ID: 5707
// Function ID: 5708
// Name: FastImage
// Dependencies: [109, 19, 17, 21, 5708, 558, 576, 1381, 5709, 2]

// Module 5707 (FastImage)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import FastImageNativeComponentDefault from "FastImageNativeComponent" /* 5709 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import FastImageApngExperiment_mod from "FastImageApngExperiment" /* 5708 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let tmp;
const PlatformUtils = tmp(1381);
let closure_3 = ["accessible", "accessibilityLabel", "autoPlay", "enableAnimation", "fadeDuration", "paused", "placeholder", "resizeMode", "source", "style", "tintColor", "usesSmallCache"];
({ Image: hasOwnProperty, StyleSheet: metroRequire } = react_native);
const jsx = Fragment.jsx;
let FastImageApngExperiment = FastImageApngExperiment_mod;
FastImageApngExperiment = FastImageApngExperiment.initializeFastImageApngExperiment();
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
  let tmp22;
  let tmp26;
  let tmp27;
  let tmp30;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let usesSmallCache;
  const obj = react2;
  const cResult = obj.c(56);
  if (cResult[0] !== arg0) {
    ({ accessible, accessibilityLabel, autoPlay, enableAnimation, fadeDuration, paused, placeholder, resizeMode, source, style, tintColor, usesSmallCache } = arg0);
    const tmp18 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = accessibilityLabel;
    cResult[2] = accessible;
    cResult[3] = paused;
    cResult[4] = placeholder;
    cResult[5] = tmp18;
    cResult[6] = resizeMode;
    cResult[7] = source;
    cResult[8] = style;
    cResult[9] = autoPlay;
    cResult[10] = enableAnimation;
    cResult[11] = fadeDuration;
    cResult[12] = usesSmallCache;
    cResult[13] = tintColor;
    tmp15 = tintColor;
    tmp14 = usesSmallCache;
    tmp13 = fadeDuration;
    tmp12 = enableAnimation;
    tmp11 = autoPlay;
    tmp10 = style;
    tmp9 = source;
    tmp8 = resizeMode;
    size = tmp18;
    tmp7 = placeholder;
    tmp6 = paused;
    tmp5 = accessible;
    tmp4 = accessibilityLabel;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    size = cResult[5];
    tmp8 = cResult[6];
    tmp9 = cResult[7];
    tmp10 = cResult[8];
    tmp11 = cResult[9];
    tmp12 = cResult[10];
    tmp13 = cResult[11];
    tmp14 = cResult[12];
    tmp15 = cResult[13];
  }
  let num15 = 200;
  if (undefined !== tmp13) {
    num15 = tmp13;
  }
  if (cResult[14] !== tmp9) {
    let tmp24;
    if (null != tmp9) {
      if (typeof tmp9 !== "number") {
        const _Array = Array;
        let tmp25 = tmp9;
        if (!Array.isArray(tmp9)) {
          const items = [tmp9];
          tmp25 = items;
        }
        tmp24 = tmp25;
      }
    }
    cResult[14] = tmp9;
    cResult[15] = tmp24;
    tmp22 = tmp24;
  } else {
    tmp22 = cResult[15];
  }
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { overflow: "hidden" };
    cResult[16] = obj2;
    tmp26 = obj2;
  } else {
    tmp26 = cResult[16];
  }
  if (cResult[17] !== tmp15) {
    let tmp29;
    if (null != tmp15) {
      tmp29 = { tintColor: tmp15 };
      const obj3 = { tintColor: tmp15 };
    }
    cResult[17] = tmp15;
    cResult[18] = tmp29;
    tmp27 = tmp29;
  } else {
    tmp27 = cResult[18];
  }
  if (cResult[19] !== tmp8) {
    let tmp32;
    if (null != tmp8) {
      tmp32 = { resizeMode: tmp8 };
      const obj4 = { resizeMode: tmp8 };
    }
    cResult[19] = tmp8;
    cResult[20] = tmp32;
    tmp30 = tmp32;
  } else {
    tmp30 = cResult[20];
  }
  if (cResult[21] === tmp10) {
    if (cResult[22] === tmp27) {
      let tmp33;
      if (cResult[23] === tmp30) {
        tmp33 = cResult[24];
      }
      if (tmp5 == null) {
        tmp5 = null != tmp4 || undefined;
      }
      const tmp36 = null != tmp9 && typeof tmp9 === "object" && "__packager_asset" in tmp9 && true === tmp9.__packager_asset;
      metroRequire.flatten(tmp10);
      if (typeof tmp9 !== "number") {
        if (!tmp36) {
          const tmp39 = null != size.onLoadStart || null != size.onLoad || null != size.onLoadEnd || null != size.onError || null != size.onProgress;
          if (cResult[35] === size.height) {
            let tmp40;
            if (cResult[36] === size.width) {
              tmp40 = cResult[37];
            }
            if (cResult[38] === tmp33) {
              let tmp41;
              let tmp42;
              if (cResult[39] === tmp40) {
                tmp41 = cResult[40];
              }
              if (cResult[41] !== tmp7) {
                let assetSource = null;
                if (null != tmp7) {
                  assetSource = hasOwnProperty.resolveAssetSource(tmp7);
                }
                let uri;
                if (assetSource != null) {
                  uri = assetSource.uri;
                }
                cResult[41] = tmp7;
                cResult[42] = uri;
                tmp42 = uri;
              } else {
                tmp42 = cResult[42];
              }
              if (cResult[43] === tmp4) {
                if (cResult[44] === tmp5) {
                  if (cResult[45] === (undefined === tmp11 || tmp11)) {
                    if (cResult[46] === (undefined === tmp12 || tmp12)) {
                      if (cResult[47] === num15) {
                        if (cResult[48] === tmp6) {
                          if (cResult[49] === size) {
                            if (cResult[50] === tmp22) {
                              if (cResult[51] === tmp39) {
                                if (cResult[52] === tmp41) {
                                  if (cResult[53] === tmp42) {
                                    let tmp46;
                                    if (cResult[54] === (undefined !== tmp14 && tmp14)) {
                                      tmp46 = cResult[55];
                                    }
                                    return tmp46;
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
              }
              FastImageNativeComponentDefault;
              const merged = Object.assign(size);
              const tmp53 = <tmp49 accessible={tmp5} accessibilityLabel={tmp4} shouldNotifyLoadEvents={tmp39} source={tmp22} style={tmp41} placeholder={tmp42} autoPlay={undefined === tmp11 || tmp11} enableAnimation={undefined === tmp12 || tmp12} paused={tmp6} fadeDuration={num15} usesSmallCache={undefined !== tmp14 && tmp14} />;
              cResult[43] = tmp4;
              cResult[44] = tmp5;
              cResult[45] = undefined === tmp11 || tmp11;
              cResult[46] = undefined === tmp12 || tmp12;
              cResult[47] = num15;
              cResult[48] = tmp6;
              cResult[49] = size;
              cResult[50] = tmp22;
              cResult[51] = tmp39;
              cResult[52] = tmp41;
              cResult[53] = tmp42;
              cResult[54] = undefined !== tmp14 && tmp14;
              cResult[55] = tmp53;
              tmp46 = tmp53;
            }
            const items1 = [tmp40, tmp33];
            cResult[38] = tmp33;
            cResult[39] = tmp40;
            cResult[40] = items1;
            tmp41 = items1;
          }
          const size1 = { width: null, height: null };
          ({ width: obj5.width, height: obj5.height } = size);
          cResult[35] = size.height;
          cResult[36] = size.width;
          cResult[37] = size1;
          tmp40 = size1;
        }
      }
      let tmp54;
      const tmpResult = PlatformUtils;
      if (tmpResult.isAndroid()) {
        tmp54 = tmp7;
      }
      let num44 = 0;
      if (typeof tmp9 !== "number") {
        num44 = 0;
        if (!tmp36) {
          num44 = num15;
        }
      }
      if (cResult[25] === tmp4) {
        if (cResult[26] === tmp5) {
          if (cResult[27] === size) {
            if (cResult[28] === tmp8) {
              if (cResult[29] === tmp9) {
                if (cResult[30] === tmp33) {
                  if (cResult[31] === tmp54) {
                    if (cResult[32] === num44) {
                      let tmp55;
                      if (cResult[33] === tmp15) {
                        tmp55 = cResult[34];
                      }
                      return tmp55;
                    }
                  }
                }
              }
            }
          }
        }
      }
      const merged1 = Object.assign(size);
      const tmp61 = <hasOwnProperty resizeMode={tmp8} source={tmp9} style={tmp33} tintColor={tmp15} accessible={tmp5} accessibilityLabel={tmp4} defaultSource={tmp54} fadeDuration={num44} />;
      cResult[25] = tmp4;
      cResult[26] = tmp5;
      cResult[27] = size;
      cResult[28] = tmp8;
      cResult[29] = tmp9;
      cResult[30] = tmp33;
      cResult[31] = tmp54;
      cResult[32] = num44;
      cResult[33] = tmp15;
      cResult[34] = tmp61;
      tmp55 = tmp61;
    }
  }
  const items2 = [tmp26, tmp10, tmp27, tmp30];
  cResult[21] = tmp10;
  cResult[22] = tmp27;
  cResult[23] = tmp30;
  cResult[24] = items2;
  tmp33 = items2;
}) : (function FastImage(enableAnimation) {
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
  metroRequire.flatten(style);
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
        assetSource = hasOwnProperty.resolveAssetSource(placeholder);
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
  const tmp21 = hasOwnProperty;
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
}));
let size = size_mod;
const result1 = size.fileFinishedImporting("components_native/common/FastImage.tsx");

export default memoResult;
