// Module ID: 14452
// Function ID: 14453
// Name: useChatPlaceholderAnimatedStyles
// Dependencies: [5141, 1187, 504, 1652, 5370, 5373, 2]
// Exports: default

// Module 14452 (useChatPlaceholderAnimatedStyles)
import get_initialized from "get initialized" /* 504 */;
import native from "native" /* 1187 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5370 */;
import timingPresets from "timingPresets" /* 5373 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import size from "module_2" /* 2 */;

let obj = { duration: 1300, easing: native.STANDARD_EASING };
let closure_4 = { code: "(function useChatPlaceholderAnimatedStylesTsx1(){let[visible,animated,useReducedMotion,withRepeat,withSequence,withTiming,timingNone,TIMING_CONFIG]=this.__closure;if(!visible){return{opacity:0};}else if(!animated||useReducedMotion){return{opacity:0.7};}return{opacity:withRepeat(withSequence(withTiming(0.3,timingNone),withTiming(0.7,TIMING_CONFIG),withTiming(0.3,TIMING_CONFIG)),-1)};})" };
const result = size.fileFinishedImporting("modules/chat/native/placeholder/useChatPlaceholderAnimatedStyles.tsx");

export default function useChatPlaceholderAnimatedStyles(arg0) {
  let animated;
  let tmp10;
  let tmp11;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let useReducedMotion;
  let visible;
  ({ visible, animated } = arg0);
  obj = get_initialized;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let tmp2 = _mod1652;
  const items1 = [closure_4, visible, animated, stateFromStores, , , , , ];
  const useAnimatedStyle = tmp2.useAnimatedStyle;
  items1[4] = _mod1652.withRepeat;
  items1[5] = _mod1652.withSequence;
  items1[6] = timing_timing.withTiming;
  items1[7] = timingPresets.timingNone;
  items1[8] = obj;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items1;
  function useChatPlaceholderAnimatedStylesTsx1() {
    let tmp10;
    let tmp8;
    const tmp = c0;
    if (tmp) {
      const tmp2 = c1;
      if (tmp2) {
        let obj2;
        const tmp3 = c2;
        if (!tmp3) {
          obj2 = { opacity: _undefined(_undefined2(tmp8, tmp10, _undefined3(0.3, c7)), -1) };
          tmp8 = _undefined3(0.3, c6);
          tmp10 = _undefined3(0.7, c7);
        }
        obj = obj2;
      }
      obj2 = { opacity: 0.7 };
    } else {
      obj = { opacity: 0 };
    }
    return obj;
  }
  const items2 = [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11];
  useChatPlaceholderAnimatedStylesTsx1.__closure = items2;
  useChatPlaceholderAnimatedStylesTsx1.__workletHash = 17414638142691;
  useChatPlaceholderAnimatedStylesTsx1.__initData = tmp3;
  return useAnimatedStyle(useChatPlaceholderAnimatedStylesTsx1);
};
