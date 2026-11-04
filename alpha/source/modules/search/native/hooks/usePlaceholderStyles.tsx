// Module ID: 18972
// Function ID: 18973
// Name: usePlaceholderStyles
// Dependencies: [5142, 9976, 1493, 504, 1652, 5378, 1187, 2]
// Exports: useFullscreenPlaceholderCount, usePlaceholderAnimatedStyle

// Module 18972 (usePlaceholderStyles)
import get_initialized from "get initialized" /* 504 */;
import native from "native" /* 1187 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5378 */;
import SearchConstants from "SearchConstants" /* 9976 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import size from "module_2" /* 2 */;

let closure_4 = SearchConstants.FADE_LAYOUT_ANIMATION_DURATION;
let closure_5 = { code: "(function usePlaceholderStylesTsx1(){let[useReducedMotion,visible,withRepeat,withSequence,withTiming,STANDARD_EASING,FADE_LAYOUT_ANIMATION_DURATION]=this.__closure;if(useReducedMotion){return{opacity:visible?1:0};}if(visible){return{opacity:withRepeat(withSequence(withTiming(0.5,{duration:0}),withTiming(1,{duration:1300,easing:STANDARD_EASING}),withTiming(0.5,{duration:1300,easing:STANDARD_EASING})),-1)};}return{opacity:withTiming(0,{duration:FADE_LAYOUT_ANIMATION_DURATION})};})" };
const result = size.fileFinishedImporting("modules/search/native/hooks/usePlaceholderStyles.tsx");

export function useFullscreenPlaceholderCount(arg0) {
  let numColumns;
  let placeholderHeight;
  ({ placeholderHeight, numColumns } = arg0);
  return Math.ceil(useWindowDimensionsDefault({ ignoreKeyboard: true }).height / placeholderHeight) * numColumns;
}
export function usePlaceholderAnimatedStyle(visible) {
  let tmp10;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let useReducedMotion;
  let obj = get_initialized;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [closure_5, stateFromStores, visible, , , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  items1[3] = _mod1652.withRepeat;
  items1[4] = _mod1652.withSequence;
  items1[5] = timing_timing.withTiming;
  items1[6] = native.STANDARD_EASING;
  items1[7] = closure_4;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items1;
  function usePlaceholderStylesTsx1() {
    let tmp4;
    const obj = { opacity: null };
    if (c0) {
      let num5 = 0;
      if (c1) {
        num5 = 1;
      }
      obj.opacity = num5;
      tmp4 = obj;
    } else if (c1) {
      const obj2 = { duration: 1300, easing };
      const obj3 = { duration: 1300, easing };
      const tmp8 = _undefined3(0.5, { duration: 0 });
      const tmp10 = _undefined3(1, obj2);
      obj.opacity = _undefined(_undefined2(tmp8, tmp10, _undefined3(0.5, obj3)), -1);
      tmp4 = obj;
    } else {
      const obj4 = { duration };
      obj.opacity = _undefined3(0, obj4);
      tmp4 = obj;
    }
    return tmp4;
  }
  const items2 = [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10];
  usePlaceholderStylesTsx1.__closure = items2;
  usePlaceholderStylesTsx1.__workletHash = 3033147489043;
  usePlaceholderStylesTsx1.__initData = tmp3;
  return useAnimatedStyle(usePlaceholderStylesTsx1);
}
