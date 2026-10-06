// Module ID: 5896
// Function ID: 5897
// Name: FastImage
// Dependencies: [19, 17, 21, 4837, 558, 576, 5897, 1370, 2]

// Module 5896 (FastImage)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import FastImageNativeComponentDefault from "FastImageNativeComponent" /* 5897 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ Image: c3, NativeModules: closure_4 } = react_native);
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ base: { overflow: "hidden" } });
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let obj = {
  preload(arg0) {
    const f90313 = (arg0) => {
      closure_4 = closure_4.ImageManager;
      closure_4.preload(closure_0, arg0);
    };
    const f90314 = (arg0) => setTimeout(arg0, num);
    let closure_0 = arg0;
    let num = arg1;
    if (arg1 === undefined) {
      num = 2000;
    }
    const items = [new Promise(f90313), ];
    new Promise(f90313);
    items[1] = new Promise(f90314);
    new Promise(f90314);
    return race(items);
  }
};
let merged = Object.assign(memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let enableAnimation;
  let fade;
  let manualPlayback;
  let paused;
  let placeholder;
  let source;
  let style;
  let usesSmallCache;
  const obj = react2;
  const cResult = obj.c(17);
  const tmp3 = closure_6();
  ({ source, style, placeholder, enableAnimation, paused, manualPlayback, fade, usesSmallCache } = arg0);
  if (typeof source === "number") {
    let tmp23;
    if (cResult[0] !== arg0) {
      const merged = Object.assign(arg0);
      const tmp29 = <_false />;
      cResult[0] = arg0;
      cResult[1] = tmp29;
      tmp23 = tmp29;
    } else {
      tmp23 = cResult[1];
    }
    return tmp23;
  } else {
    let tmp7;
    if (cResult[2] !== placeholder) {
      let assetSource = null;
      if (null != placeholder) {
        assetSource = _false.resolveAssetSource(placeholder);
      }
      cResult[2] = placeholder;
      cResult[3] = assetSource;
      tmp7 = assetSource;
    } else {
      tmp7 = cResult[3];
    }
    const _Array = Array;
    let first = source;
    if (Array.isArray(source)) {
      first = source[0];
    }
    if (cResult[4] === style) {
      let tmp12;
      if (cResult[5] === tmp3.base) {
        tmp12 = cResult[6];
      }
      let uri;
      if (tmp7 != null) {
        uri = tmp7.uri;
      }
      if (cResult[7] === (undefined === enableAnimation || enableAnimation)) {
        if (cResult[8] === (undefined === fade || fade)) {
          if (cResult[9] === manualPlayback) {
            if (cResult[10] === paused) {
              if (cResult[11] === arg0) {
                if (cResult[12] === first) {
                  if (cResult[13] === tmp12) {
                    if (cResult[14] === uri) {
                      let tmp15;
                      if (cResult[15] === (undefined !== usesSmallCache && usesSmallCache)) {
                        tmp15 = cResult[16];
                      }
                      return tmp15;
                    }
                  }
                }
              }
            }
          }
        }
      }
      FastImageNativeComponentDefault;
      const merged1 = Object.assign(arg0);
      const tmp22 = <tmp18 source={first} style={tmp12} placeholder={uri} enableAnimation={undefined === enableAnimation || enableAnimation} paused={paused} manualPlayback={manualPlayback} fade={undefined === fade || fade} usesSmallCache={undefined !== usesSmallCache && usesSmallCache} />;
      cResult[7] = undefined === enableAnimation || enableAnimation;
      cResult[8] = undefined === fade || fade;
      cResult[9] = manualPlayback;
      cResult[10] = paused;
      cResult[11] = arg0;
      cResult[12] = first;
      cResult[13] = tmp12;
      cResult[14] = uri;
      cResult[15] = undefined !== usesSmallCache && usesSmallCache;
      cResult[16] = tmp22;
      tmp15 = tmp22;
    }
    const items = [tmp3.base, style];
    cResult[4] = style;
    cResult[5] = tmp3.base;
    cResult[6] = items;
    tmp12 = items;
  }
}) : ((style) => {
  let enableAnimation;
  let first;
  let items;
  let manualPlayback;
  let paused;
  let placeholder;
  let source;
  let uri;
  ({ source, placeholder, enableAnimation } = style);
  let tmp2 = undefined === enableAnimation;
  style = style.style;
  const tmp = closure_6();
  if (!tmp2) {
    tmp2 = enableAnimation;
  }
  const fade = style.fade;
  let tmp3 = undefined === fade;
  ({ paused, manualPlayback } = style);
  if (!tmp3) {
    tmp3 = fade;
  }
  const usesSmallCache = style.usesSmallCache;
  const tmp4 = undefined !== usesSmallCache && usesSmallCache;
  if (typeof source === "number") {
    const merged = Object.assign(style);
    return <_false />;
  } else {
    let assetSource = null;
    if (null != placeholder) {
      assetSource = _false.resolveAssetSource(placeholder);
    }
    const obj = { source: first, style: items, placeholder: uri, enableAnimation: tmp2, paused, manualPlayback, fade: tmp3, usesSmallCache: tmp4 };
    const tmp10 = FastImageNativeComponentDefault;
    const merged1 = Object.assign(style);
    const _Array = Array;
    first = source;
    const tmp7 = jsx;
    if (Array.isArray(source)) {
      first = source[0];
    }
    items = [tmp.base, style];
    uri = undefined;
    if (assetSource != null) {
      uri = assetSource.uri;
    }
    return tmp7(tmp10, obj);
  }
})), obj);
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((placeholder) => {
  let tmp2;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== placeholder) {
    const merged = Object.assign(placeholder);
    const tmp8 = <_false defaultSource={arg0.placeholder} fadeDuration={0} />;
    cResult[0] = placeholder;
    cResult[1] = tmp8;
    tmp2 = tmp8;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((placeholder) => {
  const merged = Object.assign(placeholder);
  return <_false defaultSource={arg0.placeholder} fadeDuration={0} />;
});
tmp5.preload = function(arg0, arg1) {
  const f90316 = (arg0) => setTimeout(arg0, closure_0);
  let closure_0 = arg1;
  const prefetchResult = _false.prefetch(arg0);
  const catchPromise = prefetchResult.catch(() => {

  });
  let raceResult = catchPromise;
  if (null != arg1) {
    const items = [catchPromise, ];
    const self = this;
    const self2 = this;
    items[1] = new Promise(f90316);
    const promise = new Promise(f90316);
    raceResult = race(items);
  }
  return raceResult;
};
if (PlatformUtils.isAndroid()) {
  merged = tmp5;
}
const result = size.fileFinishedImporting("components_native/common/FastImage.tsx");

export default merged;
