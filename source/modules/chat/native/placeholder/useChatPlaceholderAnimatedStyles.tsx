// Module ID: 11671
// Function ID: 90499
// Name: useChatPlaceholderAnimatedStyles
// Dependencies: [4122, 1273, 566, 3991, 4131, 4134, 2]
// Exports: default

// Module 11671 (useChatPlaceholderAnimatedStyles)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
let obj = { duration: 1300, easing: require("Button").STANDARD_EASING };
let closure_4 = { code: "function useChatPlaceholderAnimatedStylesTsx1(){const{visible,animated,useReducedMotion,withRepeat,withSequence,withTiming,timingNone,TIMING_CONFIG}=this.__closure;if(!visible){return{opacity:0};}else if(!animated||useReducedMotion){return{opacity:0.7};}return{opacity:withRepeat(withSequence(withTiming(0.3,timingNone),withTiming(0.7,TIMING_CONFIG),withTiming(0.3,TIMING_CONFIG)),-1)};}" };
const result = require("initialize").fileFinishedImporting("modules/chat/native/placeholder/useChatPlaceholderAnimatedStyles.tsx");

export default function useChatPlaceholderAnimatedStyles(visible) {
  visible = visible.visible;
  const animated = visible.animated;
  let obj = visible(animated[2]);
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores.useReducedMotion);
  const fn = function c() {
    if (visible) {
      if (animated) {
        if (!stateFromStores) {
          let obj = {};
          const obj3 = visible(animated[3]);
          const obj4 = visible(animated[3]);
          const obj5 = visible(animated[4]);
          const withTimingResult = visible(animated[4]).withTiming(0.3, visible(animated[5]).timingNone);
          const obj6 = visible(animated[4]);
          const withTimingResult1 = visible(animated[4]).withTiming(0.7, outer1_3);
          obj.opacity = obj3.withRepeat(obj4.withSequence(withTimingResult, withTimingResult1, visible(animated[4]).withTiming(0.3, outer1_3)), -1);
          const obj7 = visible(animated[4]);
        }
      }
      obj = { opacity: 0.7 };
    } else {
      obj = { opacity: 0 };
      return obj;
    }
  };
  obj = { visible, animated, useReducedMotion: stateFromStores, withRepeat: visible(animated[3]).withRepeat, withSequence: visible(animated[3]).withSequence, withTiming: visible(animated[4]).withTiming, timingNone: visible(animated[5]).timingNone, TIMING_CONFIG: obj };
  fn.__closure = obj;
  fn.__workletHash = 3375288363194;
  fn.__initData = closure_4;
  return visible(animated[3]).useAnimatedStyle(fn);
};
