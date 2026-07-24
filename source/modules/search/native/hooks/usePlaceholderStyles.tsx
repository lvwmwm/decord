// Module ID: 15387
// Function ID: 117443
// Name: useFullscreenPlaceholderCount
// Dependencies: [4122, 9141, 1450, 566, 3991, 4131, 1273, 2]
// Exports: useFullscreenPlaceholderCount, usePlaceholderAnimatedStyle

// Module 15387 (useFullscreenPlaceholderCount)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { FADE_LAYOUT_ANIMATION_DURATION as closure_4 } from "SearchAutocompleteSelectAnalyticsActions";

const require = arg1;
let closure_5 = { code: "function usePlaceholderStylesTsx1(){const{useReducedMotion,visible,withRepeat,withSequence,withTiming,STANDARD_EASING,FADE_LAYOUT_ANIMATION_DURATION}=this.__closure;if(useReducedMotion){return{opacity:visible?1:0};}if(visible){return{opacity:withRepeat(withSequence(withTiming(0.5,{duration:0}),withTiming(1,{duration:1300,easing:STANDARD_EASING}),withTiming(0.5,{duration:1300,easing:STANDARD_EASING})),-1)};}return{opacity:withTiming(0,{duration:FADE_LAYOUT_ANIMATION_DURATION})};}" };
const result = require("useWindowDimensions").fileFinishedImporting("modules/search/native/hooks/usePlaceholderStyles.tsx");

export const useFullscreenPlaceholderCount = function useFullscreenPlaceholderCount(arg0) {
  let numColumns;
  let placeholderHeight;
  ({ placeholderHeight, numColumns } = arg0);
  return Math.ceil(importDefault(1450)({ ignoreKeyboard: true }).height / placeholderHeight) * numColumns;
};
export const usePlaceholderAnimatedStyle = function usePlaceholderAnimatedStyle(visible) {
  const _require = visible;
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.useReducedMotion);
  class A {
    constructor() {
      obj = {};
      tmp = closure_0;
      if (closure_1) {
        num11 = 0;
        if (tmp) {
          num11 = 1;
        }
        obj.opacity = num11;
        tmp5 = obj;
      } else {
        tmp2 = closure_0;
        tmp3 = outer1_2;
        if (tmp) {
          num3 = 4;
          tmp2Result = tmp2(tmp3[4]);
          tmp2Result1 = tmp2(tmp3[4]);
          num4 = 5;
          tmp2Result2 = tmp2(tmp3[5]);
          obj = {};
          num5 = 0;
          obj.duration = 0;
          num6 = 0.5;
          withTimingResult = tmp2Result2.withTiming(0.5, obj);
          tmp2Result3 = tmp2(tmp3[5]);
          obj1 = {};
          num7 = 1300;
          obj1.duration = 1300;
          num8 = 6;
          obj1.easing = tmp2(tmp3[6]).STANDARD_EASING;
          num9 = 1;
          withTimingResult1 = tmp2Result3.withTiming(1, obj1);
          tmp2Result4 = tmp2(tmp3[5]);
          obj2 = {};
          obj2.duration = 1300;
          obj2.easing = tmp2(tmp3[6]).STANDARD_EASING;
          num10 = -1;
          obj.opacity = tmp2Result.withRepeat(tmp2Result1.withSequence(withTimingResult, withTimingResult1, tmp2Result4.withTiming(0.5, obj2)), -1);
          tmp5 = obj;
        } else {
          num = 5;
          tmp2Result5 = tmp2(tmp3[5]);
          obj3 = {};
          tmp4 = outer1_4;
          obj3.duration = outer1_4;
          num2 = 0;
          obj.opacity = tmp2Result5.withTiming(0, obj3);
          tmp5 = obj;
        }
      }
      return tmp5;
    }
  }
  obj = { useReducedMotion: stateFromStores, visible, withRepeat: _require(3991).withRepeat, withSequence: _require(3991).withSequence, withTiming: _require(4131).withTiming, STANDARD_EASING: _require(1273).STANDARD_EASING, FADE_LAYOUT_ANIMATION_DURATION: closure_4 };
  A.__closure = obj;
  A.__workletHash = 9750536800906;
  A.__initData = closure_5;
  return _require(3991).useAnimatedStyle(A);
};
