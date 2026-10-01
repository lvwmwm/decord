// Module ID: 12136
// Function ID: 12137
// Name: useChatPlaceholderAnimatedStyles
// Dependencies: [4825, 1177, 504, 4566, 4837, 4840, 2]
// Exports: default

// Module 12136 (useChatPlaceholderAnimatedStyles)
import native from "native" /* 1177 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import timingPresets from "timingPresets" /* 4840 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import size from "module_2" /* 2 */;

let TIMING_CONFIG = { duration: 1300, easing: native.STANDARD_EASING };
const __initData = { code: "function useChatPlaceholderAnimatedStylesTsx1(){const{visible,animated,useReducedMotion,withRepeat,withSequence,withTiming,timingNone,TIMING_CONFIG}=this.__closure;if(!visible){return{opacity:0};}else if(!animated||useReducedMotion){return{opacity:0.7};}return{opacity:withRepeat(withSequence(withTiming(0.3,timingNone),withTiming(0.7,TIMING_CONFIG),withTiming(0.3,TIMING_CONFIG)),-1)};}" };
const result = size.fileFinishedImporting("modules/chat/native/placeholder/useChatPlaceholderAnimatedStyles.tsx");

export default function useChatPlaceholderAnimatedStyles(visible) {
  visible = visible.visible;
  const animated = visible.animated;
  let stateFromStores;
  TIMING_CONFIG = visible(animated[2]);
  const items = [stateFromStores];
  stateFromStores = TIMING_CONFIG.useStateFromStores(items, () => stateFromStores.useReducedMotion);
  let obj2 = visible(animated[3]);
  const fn = function c() {
    let obj;
    let obj5;
    let withRepeat;
    let withSequence;
    let withTimingResult;
    let withTimingResult1;
    const tmp = visible;
    if (tmp) {
      const tmp2 = animated;
      if (tmp2) {
        let obj2;
        const tmp3 = stateFromStores;
        if (!tmp3) {
          obj2 = { opacity: withRepeat(withSequence(withTimingResult, withTimingResult1, obj5.withTiming(0.3, obj)), -1) };
          withRepeat = ReanimatedRexport.withRepeat;
          ReanimatedRexport;
          withSequence = ReanimatedRexport.withSequence;
          ReanimatedRexport;
          const obj3 = timing;
          withTimingResult = obj3.withTiming(0.3, timingPresets.timingNone);
          const obj4 = timing;
          withTimingResult1 = obj4.withTiming(0.7, obj);
          obj5 = timing;
        }
        obj = obj2;
      }
      obj2 = { opacity: 0.7 };
    } else {
      obj = { opacity: 0 };
    }
    return obj;
  };
  let obj3 = { visible, animated, useReducedMotion: stateFromStores, withRepeat: visible(animated[3]).withRepeat, withSequence: visible(animated[3]).withSequence, withTiming: visible(animated[4]).withTiming, timingNone: visible(animated[5]).timingNone, TIMING_CONFIG };
  fn.__closure = obj3;
  fn.__workletHash = 3375288363194;
  fn.__initData = __initData;
  return obj2.useAnimatedStyle(fn);
};
