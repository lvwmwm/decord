// Module ID: 12927
// Function ID: 12928
// Name: useMediaItemSpoilerState
// Dependencies: [32, 19, 558, 576, 8367, 4810, 5091, 1200, 2]

// Module 12927 (useMediaItemSpoilerState)
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import timing from "timing" /* 5091 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let set;

let closure_4 = { code: "function useMediaItemSpoilerStateTsx1(){const{runOnJS,setSpoilerActive,hasSpoiler}=this.__closure;runOnJS(setSpoilerActive)(hasSpoiler);}" };
const __initData = { code: "function useMediaItemSpoilerStateTsx2(){const{spoilerOpacity}=this.__closure;return{opacity:spoilerOpacity.get()};}" };
let closure_6 = { code: "function useMediaItemSpoilerStateTsx3(){const{runOnJS,setSpoilerActive,hasSpoiler}=this.__closure;runOnJS(setSpoilerActive)(hasSpoiler);}" };
const __initData2 = { code: "function useMediaItemSpoilerStateTsx4(){const{spoilerOpacity}=this.__closure;return{opacity:spoilerOpacity.get()};}" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMediaItemSpoilerState(arg0) {
  let mediaItemHasSpoiler;
  let setSpoilerActive;
  let sharedValue;
  let tmp6;
  const tmp = mediaItemHasSpoiler;
  const tmp2 = dependencyMap;
  let obj = mediaItemHasSpoiler(576);
  const cResult = obj.c(7);
  const obj2 = mediaItemHasSpoiler(8367);
  mediaItemHasSpoiler = obj2.useMediaItemHasSpoiler(arg0);
  [tmp6, dependencyMap] = sharedValue(react.useState(mediaItemHasSpoiler), 2);
  let num = 0;
  const tmp5 = sharedValue(react.useState(mediaItemHasSpoiler), 2);
  const useSharedValue = mediaItemHasSpoiler(4810).useSharedValue;
  mediaItemHasSpoiler(4810);
  const obj3 = react;
  if (mediaItemHasSpoiler) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  if (cResult[0] === mediaItemHasSpoiler) {
    let tmp9;
    let tmp10;
    if (cResult[1] === sharedValue) {
      tmp9 = cResult[2];
      tmp10 = cResult[3];
    }
    const effect = obj3.useEffect(tmp9, tmp10);
    const tmpResult = tmp(4810);
    class A {
      constructor() {
        const obj = { opacity: sharedValue.get() };
        return obj;
      }
    }
    const obj4 = { spoilerOpacity: sharedValue };
    A.__closure = obj4;
    A.__workletHash = 8496335051493;
    A.__initData = __initData;
    const animatedStyle = tmpResult.useAnimatedStyle(A);
    if (cResult[4] === tmp6) {
      let tmp14;
      if (cResult[5] === animatedStyle) {
        tmp14 = cResult[6];
      }
      return tmp14;
    }
    const items = [tmp6, animatedStyle];
    cResult[4] = tmp6;
    cResult[5] = animatedStyle;
    cResult[6] = items;
    tmp14 = items;
  }
  let fn = function c() {
    let num = 0;
    set = sharedValue.set;
    const withTiming = timing.withTiming;
    timing;
    if (mediaItemHasSpoiler) {
      num = 1;
    }
    let obj = { duration: 200, easing: tmp2(1200).STANDARD_EASING };
    const fn = function t() {
      const obj = mediaItemHasSpoiler(dependencyMap[5]);
      obj.runOnJS(setSpoilerActive)(closure_1_0);
    };
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setSpoilerActive: dependencyMap, hasSpoiler: mediaItemHasSpoiler };
    fn.__workletHash = 15930548853488;
    fn.__initData = __initData;
    ({ runOnJS: ReanimatedRexport.runOnJS, setSpoilerActive: dependencyMap, hasSpoiler: mediaItemHasSpoiler });
    const result = set(withTiming(num, obj, "respect-motion-settings", fn));
  };
  const items1 = [mediaItemHasSpoiler, sharedValue];
  cResult[0] = mediaItemHasSpoiler;
  cResult[1] = sharedValue;
  cResult[2] = fn;
  cResult[3] = items1;
  tmp10 = items1;
  tmp9 = fn;
}) : (function useMediaItemSpoilerState(arg0) {
  let mediaItemHasSpoiler;
  let setSpoilerActive;
  let sharedValue;
  let tmp5;
  const tmp = mediaItemHasSpoiler;
  const tmp2 = dependencyMap;
  let obj = mediaItemHasSpoiler(8367);
  mediaItemHasSpoiler = obj.useMediaItemHasSpoiler(arg0);
  const obj2 = react;
  const tmp4 = sharedValue(react.useState(mediaItemHasSpoiler), 2);
  [tmp5, dependencyMap] = tmp4;
  let num = 0;
  const useSharedValue = mediaItemHasSpoiler(4810).useSharedValue;
  mediaItemHasSpoiler(4810);
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
    let obj = { duration: 200, easing: tmp2(1200).STANDARD_EASING };
    const fn = function t() {
      const obj = mediaItemHasSpoiler(dependencyMap[5]);
      obj.runOnJS(setSpoilerActive)(closure_1_0);
    };
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setSpoilerActive: dependencyMap, hasSpoiler: mediaItemHasSpoiler };
    fn.__workletHash = 9328207925106;
    fn.__initData = __initData;
    ({ runOnJS: ReanimatedRexport.runOnJS, setSpoilerActive: dependencyMap, hasSpoiler: mediaItemHasSpoiler });
    const result = set(withTiming(num, obj, "respect-motion-settings", fn));
  }, items);
  const items1 = [tmp5, ];
  let fn = function n() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { spoilerOpacity: sharedValue };
  fn.__workletHash = 11024579603555;
  fn.__initData = __initData2;
  const tmpResult = tmp(4810);
  items1[1] = tmpResult.useAnimatedStyle(fn);
  return items1;
});
let result = size.fileFinishedImporting("modules/media_viewer/native/useMediaItemSpoilerState.tsx");

export const useMediaItemSpoilerState = tmp2;
