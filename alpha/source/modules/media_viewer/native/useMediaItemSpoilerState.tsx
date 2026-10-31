// Module ID: 14770
// Function ID: 14771
// Name: useMediaItemSpoilerState
// Dependencies: [32, 19, 8838, 5095, 5254, 1187, 2]
// Exports: useMediaItemSpoilerState

// Module 14770 (useMediaItemSpoilerState)
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import timing from "timing" /* 5254 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set;

let closure_4 = { code: "function useMediaItemSpoilerStateTsx1(){const{runOnJS,setSpoilerActive,hasSpoiler}=this.__closure;runOnJS(setSpoilerActive)(hasSpoiler);}" };
const __initData = { code: "function useMediaItemSpoilerStateTsx2(){const{spoilerOpacity}=this.__closure;return{opacity:spoilerOpacity.get()};}" };
let result = size.fileFinishedImporting("modules/media_viewer/native/useMediaItemSpoilerState.tsx");

export function useMediaItemSpoilerState(index) {
  let mediaItemHasSpoiler;
  let setSpoilerActive;
  let sharedValue;
  let tmp5;
  const tmp = mediaItemHasSpoiler;
  const tmp2 = dependencyMap;
  let obj = mediaItemHasSpoiler(8838);
  mediaItemHasSpoiler = obj.useMediaItemHasSpoiler(index);
  const obj2 = react;
  const tmp4 = sharedValue(react.useState(mediaItemHasSpoiler), 2);
  [tmp5, dependencyMap] = tmp4;
  let num = 0;
  const useSharedValue = mediaItemHasSpoiler(5095).useSharedValue;
  mediaItemHasSpoiler(5095);
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
    let obj = { duration: 200, easing: tmp2(1187).STANDARD_EASING };
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
  const tmpResult = tmp(5095);
  items1[1] = tmpResult.useAnimatedStyle(fn);
  return items1;
}
