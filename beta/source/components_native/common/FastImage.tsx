// Module ID: 5802
// Function ID: 5803
// Name: FastImage
// Dependencies: [19, 17, 21, 4758, 558, 568, 5803, 1368, 2]

// Module 5802 (FastImage)
import c from "c" /* 568 */;
import FastImageNativeComponentDefault from "FastImageNativeComponent" /* 5803 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, NativeModules: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let closure_6 = createStyles.createStyles({ base: { overflow: "hidden" } });
let ReactCompilerGating = fn(558);
let merged = Object.assign(noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((source) => {
  const cResult = c.c(16);
  const tmp3 = closure_6();
  ({ style, placeholder, enableAnimation, paused, manualPlayback, fade, usesSmallCache } = source);
  let tmp4 = undefined === enableAnimation;
  if (!tmp4) {
    tmp4 = enableAnimation;
  }
  if (typeof source.source === "number") {
    if (cResult[0] !== source) {
      const obj2 = {};
      const merged = Object.assign(source);
      const tmp27 = <React3 />;
      cResult[0] = source;
      cResult[1] = tmp27;
      let tmp21 = tmp27;
    } else {
      tmp21 = cResult[1];
    }
    return tmp21;
  } else {
    if (cResult[2] !== placeholder) {
      let assetSource = null;
      if (null != placeholder) {
        assetSource = React3.resolveAssetSource(placeholder);
      }
      cResult[2] = placeholder;
      cResult[3] = assetSource;
      let tmp7 = assetSource;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] === style) {
      if (cResult[5] === tmp3.base) {
        let tmp10 = cResult[6];
      }
      let uri;
      if (tmp7 != null) {
        uri = tmp7.uri;
      }
      if (cResult[7] === tmp4) {
        if (cResult[8] === tmp5) {
          if (cResult[9] === manualPlayback) {
            if (cResult[10] === paused) {
              if (cResult[11] === source) {
                if (cResult[12] === tmp10) {
                  if (cResult[13] === uri) {
                    if (cResult[14] === tmp6) {
                      let tmp13 = cResult[15];
                    }
                    return tmp13;
                  }
                }
              }
            }
          }
        }
      }
      const obj3 = {};
      const merged1 = Object.assign(source);
      obj3.style = tmp10;
      obj3.placeholder = uri;
      obj3.enableAnimation = tmp4;
      obj3.paused = paused;
      obj3.manualPlayback = manualPlayback;
      obj3.fade = tmp5;
      obj3.usesSmallCache = tmp6;
      const tmp20 = jsx(FastImageNativeComponentDefault, {});
      cResult[7] = tmp4;
      cResult[8] = tmp5;
      cResult[9] = manualPlayback;
      cResult[10] = paused;
      cResult[11] = source;
      cResult[12] = tmp10;
      cResult[13] = uri;
      cResult[14] = tmp6;
      cResult[15] = tmp20;
      tmp13 = tmp20;
    }
    const items = [tmp3.base, style];
    cResult[4] = style;
    cResult[5] = tmp3.base;
    cResult[6] = items;
    tmp10 = items;
  }
}) : ((fade) => {
  ({ placeholder, enableAnimation } = fade);
  let tmp2 = undefined === enableAnimation;
  ({ source, style } = fade);
  if (!tmp2) {
    tmp2 = enableAnimation;
  }
  fade = fade.fade;
  let tmp3 = undefined === fade;
  ({ paused, manualPlayback } = fade);
  if (!tmp3) {
    tmp3 = fade;
  }
  const usesSmallCache = fade.usesSmallCache;
  if (typeof source === "number") {
    const obj2 = {};
    const merged = Object.assign(fade);
    return <React3 />;
  } else {
    let assetSource = null;
    if (null != placeholder) {
      assetSource = React3.resolveAssetSource(placeholder);
    }
    const obj = {};
    const merged1 = Object.assign(fade);
    const items = [tmp.base, style];
    obj.style = items;
    let uri;
    if (assetSource != null) {
      uri = assetSource.uri;
    }
    obj.placeholder = uri;
    obj.enableAnimation = tmp2;
    obj.paused = paused;
    obj.manualPlayback = manualPlayback;
    obj.fade = tmp3;
    obj.usesSmallCache = tmp4;
    return jsx(FastImageNativeComponentDefault, {});
  }
  tmp = closure_6();
  tmp4 = undefined !== usesSmallCache && usesSmallCache;
})), {
  preload(arg0) {
    closure_0 = arg0;
    const items = [
      new Promise((arg0) => {
        ImageManager = ImageManager.ImageManager;
        ImageManager.preload(closure_0, arg0);
      }),

    ];
    const promise = new Promise((arg0) => {
      ImageManager = ImageManager.ImageManager;
      ImageManager.preload(closure_0, arg0);
    });
    items[1] = new Promise((arg0) => setTimeout(arg0, num));
    return Promise.race(items);
  }
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((placeholder) => {
  const cResult = c.c(2);
  if (cResult[0] !== placeholder) {
    const obj2 = {};
    const merged = Object.assign(placeholder);
    obj2.defaultSource = placeholder.placeholder;
    obj2.fadeDuration = 0;
    const tmp8 = <React3 />;
    cResult[0] = placeholder;
    cResult[1] = tmp8;
    let tmp2 = tmp8;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((placeholder) => {
  const obj = {};
  const merged = Object.assign(placeholder);
  obj.defaultSource = placeholder.placeholder;
  obj.fadeDuration = 0;
  return <React3 />;
});
tmp4.preload = (arg0, arg1) => {
  closure_0 = arg1;
  const catchPromise = React3.prefetch(arg0).catch(() => {

  });
  let racePromise = catchPromise;
  if (null != arg1) {
    const items = [catchPromise, ];
    const promise = new Promise((arg0) => setTimeout(arg0, closure_0));
    items[1] = promise;
    racePromise = Promise.race(items);
  }
  return racePromise;
};
const PlatformUtils = fn(1368);
if (PlatformUtils.isAndroid()) {
  merged = tmp4;
}
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/FastImage.tsx");

export default merged;
