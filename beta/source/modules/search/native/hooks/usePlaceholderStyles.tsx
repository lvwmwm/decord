// Module ID: 16462
// Function ID: 16463
// Name: usePlaceholderStyles
// Dependencies: [4825, 7303, 1479, 504, 4566, 4837, 1177, 2]
// Exports: useFullscreenPlaceholderCount, usePlaceholderAnimatedStyle

// Module 16462 (usePlaceholderStyles)
import native from "native" /* 1177 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import SearchConstants from "SearchConstants" /* 7303 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const duration = SearchConstants.FADE_LAYOUT_ANIMATION_DURATION;
const __initData = { code: "function usePlaceholderStylesTsx1(){const{useReducedMotion,visible,withRepeat,withSequence,withTiming,STANDARD_EASING,FADE_LAYOUT_ANIMATION_DURATION}=this.__closure;if(useReducedMotion){return{opacity:visible?1:0};}if(visible){return{opacity:withRepeat(withSequence(withTiming(0.5,{duration:0}),withTiming(1,{duration:1300,easing:STANDARD_EASING}),withTiming(0.5,{duration:1300,easing:STANDARD_EASING})),-1)};}return{opacity:withTiming(0,{duration:FADE_LAYOUT_ANIMATION_DURATION})};}" };
const result = size.fileFinishedImporting("modules/search/native/hooks/usePlaceholderStyles.tsx");

export const useFullscreenPlaceholderCount = function useFullscreenPlaceholderCount(arg0) {
  let numColumns;
  let placeholderHeight;
  ({ placeholderHeight, numColumns } = arg0);
  return Math.ceil(useWindowDimensionsDefault({ ignoreKeyboard: true }).height / placeholderHeight) * numColumns;
};
export const usePlaceholderAnimatedStyle = function usePlaceholderAnimatedStyle(visible) {
  let useReducedMotion;
  _require = visible;
  let obj = require("get initialized");
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = require("ReanimatedRexport");
  class A {
    constructor() {
      let tmp5;
      const obj = { opacity: null };
      if (stateFromStores) {
        let num5 = 0;
        if (visible) {
          num5 = 1;
        }
        obj.opacity = num5;
        tmp5 = obj;
      } else if (visible) {
        const withRepeat = ReanimatedRexport.withRepeat;
        ReanimatedRexport;
        const withSequence = ReanimatedRexport.withSequence;
        ReanimatedRexport;
        const obj4 = timing;
        const withTimingResult = obj4.withTiming(0.5, { duration: 0 });
        const obj2 = { duration: 1300, easing: native.STANDARD_EASING };
        const withTiming = timing.withTiming;
        timing;
        const withTimingResult1 = withTiming(1, obj2);
        const obj3 = { duration: 1300, easing: native.STANDARD_EASING };
        const withTiming2 = timing.withTiming;
        timing;
        obj.opacity = withRepeat(withSequence(withTimingResult, withTimingResult1, withTiming2(0.5, obj3)), -1);
        tmp5 = obj;
      } else {
        const obj5 = { duration };
        const tmp2Result2 = timing;
        obj.opacity = tmp2Result2.withTiming(0, obj5);
        tmp5 = obj;
      }
      return tmp5;
    }
  }
  let obj3 = { useReducedMotion: stateFromStores, visible, withRepeat: require("ReanimatedRexport").withRepeat, withSequence: require("ReanimatedRexport").withSequence, withTiming: require("timing").withTiming, STANDARD_EASING: require("native").STANDARD_EASING, FADE_LAYOUT_ANIMATION_DURATION: duration };
  A.__closure = obj3;
  A.__workletHash = 9750536800906;
  A.__initData = __initData;
  return obj2.useAnimatedStyle(A);
};
