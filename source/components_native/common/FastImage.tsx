// Module ID: 5085
// Function ID: 44278
// Name: preload
// Dependencies: [31, 27, 33, 4130, 5086, 477, 2]

// Module 5085 (preload)
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "jsxProd";

let closure_2;
let closure_3;
class FastImageAndroid {
  constructor(arg0) {
    obj = {};
    merged = Object.assign(global);
    obj["defaultSource"] = global.placeholder;
    obj["fadeDuration"] = 0;
    return jsx(Image, obj);
  }
}
({ Image: closure_2, NativeModules: closure_3 } = get_ActivityIndicator);
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ base: { overflow: "hidden" } });
let merged = Object.assign(require("result").memo((fade) => {
  let enableAnimation;
  let manualPlayback;
  let paused;
  let placeholder;
  let source;
  let style;
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
  if ("number" === typeof source) {
    let obj = {};
    const merged = Object.assign(fade);
    return <closure_2 />;
  } else {
    let assetSource = null;
    if (null != placeholder) {
      assetSource = closure_2.resolveAssetSource(placeholder);
    }
    obj = {};
    const merged1 = Object.assign(fade);
    const items = [tmp.base, style];
    obj["style"] = items;
    let uri;
    if (null != assetSource) {
      uri = assetSource.uri;
    }
    obj["placeholder"] = uri;
    obj["enableAnimation"] = tmp2;
    obj["paused"] = paused;
    obj["manualPlayback"] = manualPlayback;
    obj["fade"] = tmp3;
    obj["usesSmallCache"] = tmp4;
    return jsx(importDefault(5086), {});
  }
  tmp = callback();
  tmp4 = undefined !== usesSmallCache && usesSmallCache;
}), {
  preload(arg0) {
    let closure_0 = arg0;
    let promise = new Promise((arg0) => {
      const DCDFastImageViewManager = outer1_3.DCDFastImageViewManager;
      DCDFastImageViewManager.preload(closure_0, arg0);
    });
    const items = [promise, ];
    promise = new Promise((arg0) => setTimeout(arg0, 2000));
    items[1] = promise;
    return Promise.race(items);
  }
});
FastImageAndroid.preload = (arg0) => closure_2.prefetch(arg0).catch(() => {

});
if (set.isAndroid()) {
  merged = FastImageAndroid;
}
const result = set.fileFinishedImporting("components_native/common/FastImage.tsx");

export default merged;
