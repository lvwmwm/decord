// Module ID: 5231
// Function ID: 44185
// Name: preload
// Dependencies: []

// Module 5231 (preload)
class FastImageAndroid {
  constructor(arg0) {
    obj = {};
    merged = Object.assign(global);
    obj["defaultSource"] = global.placeholder;
    obj["fadeDuration"] = 0;
    return jsx(Image, obj);
  }
}
const importAllResult = importAll(dependencyMap[0]);
({ Image: closure_2, NativeModules: closure_3 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const tmp2 = arg1(dependencyMap[1]);
let closure_5 = arg1(dependencyMap[3]).createStyles({ base: { overflow: "hidden" } });
let merged = Object.assign(importAllResult.memo((fade) => {
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
    return <closure_2 {...obj} />;
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
    return jsx(importDefault(dependencyMap[4]), obj);
  }
  const tmp = callback();
  const tmp4 = undefined !== usesSmallCache && usesSmallCache;
}), {
  preload(arg0) {
    const importDefault = arg0;
    let promise = new Promise((arg0) => {
      const DCDFastImageViewManager = obj.DCDFastImageViewManager;
      DCDFastImageViewManager.preload(arg0, arg0);
    });
    const items = [promise, ];
    promise = new Promise((arg0) => setTimeout(arg0, 2000));
    items[1] = promise;
    return Promise.race(items);
  }
});
FastImageAndroid.preload = (arg0) => closure_2.prefetch(arg0).catch(() => {

});
const obj = {
  preload(arg0) {
    const importDefault = arg0;
    let promise = new Promise((arg0) => {
      const DCDFastImageViewManager = obj.DCDFastImageViewManager;
      DCDFastImageViewManager.preload(arg0, arg0);
    });
    const items = [promise, ];
    promise = new Promise((arg0) => setTimeout(arg0, 2000));
    items[1] = promise;
    return Promise.race(items);
  }
};
const obj2 = arg1(dependencyMap[3]);
if (obj4.isAndroid()) {
  merged = FastImageAndroid;
}
const obj4 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("components_native/common/FastImage.tsx");

export default merged;
