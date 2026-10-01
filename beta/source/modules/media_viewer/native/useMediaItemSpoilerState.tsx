// Module ID: 12520
// Function ID: 12521
// Name: useMediaItemSpoilerState
// Dependencies: [32, 19, 7712, 4566, 4837, 1177, 2]
// Exports: useMediaItemSpoilerState

// Module 12520 (useMediaItemSpoilerState)
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set;

let closure_4 = { code: "function useMediaItemSpoilerStateTsx1(){const{runOnJS,setSpoilerActive,hasSpoiler}=this.__closure;runOnJS(setSpoilerActive)(hasSpoiler);}" };
const __initData = { code: "function useMediaItemSpoilerStateTsx2(){const{spoilerOpacity}=this.__closure;return{opacity:spoilerOpacity.get()};}" };
let result = size.fileFinishedImporting("modules/media_viewer/native/useMediaItemSpoilerState.tsx");

export const useMediaItemSpoilerState = function useMediaItemSpoilerState(index) {
  let mediaItemHasSpoiler;
  let setSpoilerActive;
  let sharedValue;
  let tmp5;
  const tmp = mediaItemHasSpoiler;
  const tmp2 = dependencyMap;
  let obj = mediaItemHasSpoiler(7712);
  mediaItemHasSpoiler = obj.useMediaItemHasSpoiler(index);
  const obj2 = react;
  const tmp4 = sharedValue(react.useState(mediaItemHasSpoiler), 2);
  [tmp5, dependencyMap] = tmp4;
  let num = 0;
  const useSharedValue = mediaItemHasSpoiler(4566).useSharedValue;
  mediaItemHasSpoiler(4566);
  if (mediaItemHasSpoiler) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  const items = [mediaItemHasSpoiler, sharedValue];
  const effect = obj2.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    const withTiming = timing.withTiming;
    timing;
    if (mediaItemHasSpoiler) {
      num = 1;
    }
    let obj = { duration: 200, easing: tmp2(1177).STANDARD_EASING };
    const fn = function t() {
      const obj = mediaItemHasSpoiler(dependencyMap[3]);
      obj.runOnJS(setSpoilerActive)(closure_1_0);
    };
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setSpoilerActive: dependencyMap, hasSpoiler: mediaItemHasSpoiler };
    fn.__workletHash = 15930548853488;
    fn.__initData = __initData;
    ({ runOnJS: ReanimatedRexport.runOnJS, setSpoilerActive: dependencyMap, hasSpoiler: mediaItemHasSpoiler });
    const result = set(withTiming(num, obj, "respect-motion-settings", fn));
  }, items);
  const items1 = [tmp5, ];
  let fn = function l() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { spoilerOpacity: sharedValue };
  fn.__workletHash = 8496335051493;
  fn.__initData = __initData;
  const tmpResult = tmp(4566);
  items1[1] = tmpResult.useAnimatedStyle(fn);
  return items1;
};
