// Module ID: 5899
// Function ID: 5900
// Name: FastImage
// Dependencies: [19, 17, 21, 4836, 5900, 1364, 2]

// Module 5899 (FastImage)
import Fragment from "Fragment" /* 21 */;
import FastImageNativeComponentDefault from "FastImageNativeComponent" /* 5900 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4836 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

let style;

let c2;
let c3;
class FastImageAndroid {
  constructor(placeholder) {
    const merged = Object.assign(placeholder);
    return <React2 defaultSource={arg0.placeholder} fadeDuration={0} />;
  }
}
({ Image: c2, NativeModules: c3 } = react_native);
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ base: { overflow: "hidden" } });
let obj = {
  preload(arg0) {
    const f81178 = (arg0) => {
      c3 = c3.ImageManager;
      c3.preload(closure_0, arg0);
    };
    const f81179 = (arg0) => setTimeout(arg0, num);
    let closure_0 = arg0;
    let num = arg1;
    if (arg1 === undefined) {
      num = 2000;
    }
    const items = [new Promise(f81178), ];
    new Promise(f81178);
    items[1] = new Promise(f81179);
    new Promise(f81179);
    return race(items);
  }
};
let merged = Object.assign(react.memo((style) => {
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
  const tmp = closure_5();
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
    return <React2 />;
  } else {
    let assetSource = null;
    if (null != placeholder) {
      assetSource = React2.resolveAssetSource(placeholder);
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
}), obj);
FastImageAndroid.preload = function(arg0, arg1) {
  const f81181 = (arg0) => setTimeout(arg0, closure_0);
  let closure_0 = arg1;
  const prefetchResult = React2.prefetch(arg0);
  const catchPromise = prefetchResult.catch(() => {

  });
  let raceResult = catchPromise;
  if (null != arg1) {
    const items = [catchPromise, ];
    const self = this;
    const self2 = this;
    items[1] = new Promise(f81181);
    const promise = new Promise(f81181);
    raceResult = race(items);
  }
  return raceResult;
};
if (PlatformUtils.isAndroid()) {
  merged = FastImageAndroid;
}
const result = size.fileFinishedImporting("components_native/common/FastImage.tsx");

export default merged;
