// Module ID: 11653
// Function ID: 90402
// Name: useChatPlaceholderAnimatedStyles
// Dependencies: []
// Exports: default

// Module 11653 (useChatPlaceholderAnimatedStyles)
let closure_2 = importDefault(dependencyMap[0]);
const obj = { duration: 1300, easing: arg1(dependencyMap[1]).STANDARD_EASING };
let closure_4 = { code: "function useChatPlaceholderAnimatedStylesTsx1(){const{visible,animated,useReducedMotion,withRepeat,withSequence,withTiming,timingNone,TIMING_CONFIG}=this.__closure;if(!visible){return{opacity:0};}else if(!animated||useReducedMotion){return{opacity:0.7};}return{opacity:withRepeat(withSequence(withTiming(0.3,timingNone),withTiming(0.7,TIMING_CONFIG),withTiming(0.3,TIMING_CONFIG)),-1)};}" };
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/chat/native/placeholder/useChatPlaceholderAnimatedStyles.tsx");

export default function useChatPlaceholderAnimatedStyles(visible) {
  visible = visible.visible;
  const arg1 = visible;
  const animated = visible.animated;
  const dependencyMap = animated;
  let obj = arg1(dependencyMap[2]);
  const items = [closure_2];
  const stateFromStores = obj.useStateFromStores(items, () => stateFromStores.useReducedMotion);
  closure_2 = stateFromStores;
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
          const withTimingResult1 = visible(animated[4]).withTiming(0.7, closure_3);
          obj.opacity = obj3.withRepeat(obj4.withSequence(withTimingResult, withTimingResult1, visible(animated[4]).withTiming(0.3, closure_3)), -1);
          const obj7 = visible(animated[4]);
        }
      }
      obj = { opacity: 0.7 };
    } else {
      obj = { opacity: 0 };
      return obj;
    }
  };
  obj = { visible, animated, useReducedMotion: stateFromStores, withRepeat: arg1(dependencyMap[3]).withRepeat, withSequence: arg1(dependencyMap[3]).withSequence, withTiming: arg1(dependencyMap[4]).withTiming, timingNone: arg1(dependencyMap[5]).timingNone, TIMING_CONFIG: obj };
  fn.__closure = obj;
  fn.__workletHash = 3375288363194;
  fn.__initData = closure_4;
  return arg1(dependencyMap[3]).useAnimatedStyle(fn);
};
