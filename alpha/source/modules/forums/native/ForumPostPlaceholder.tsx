// Module ID: 13775
// Function ID: 13776
// Name: ForumPostPlaceholder
// Dependencies: [32, 19, 5015, 21, 5014, 575, 504, 5095, 5254, 6977, 2]

// Module 13775 (ForumPostPlaceholder)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import timing from "timing" /* 5254 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let obj2;
const jsx = Fragment.jsx;
let obj = { postPlaceholder: obj2 };
obj2 = { height: 2 * nativeDefault.space.PX_64, marginBottom: nativeDefault.space.PX_12 };
let closure_7 = createStyles.createStyles(obj);
let c8 = 0.55;
const __initData = { code: "function ForumPostPlaceholderTsx1(){const{reducedMotion,ROW_OPACITY_END,withDelay,INITIAL_DELAY_MS,withRepeat,withSequence,withTiming,timingConfig}=this.__closure;if(reducedMotion){return{opacity:ROW_OPACITY_END};}return{opacity:withDelay(INITIAL_DELAY_MS,withRepeat(withSequence(withTiming(ROW_OPACITY_END,timingConfig),withTiming(1,timingConfig)),-1,true))};}" };
const memoResult = react.memo(function ForumPostPlaceholder() {
  let opacity;
  let stateFromStores;
  let useReducedMotion;
  const tmp = closure_7();
  let obj = stateFromStores(504);
  const items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const timingConfig = _slicedToArray(react.useState(() => {
    let Easing;
    let obj2;
    const obj = { timingConfig: obj2 };
    obj2 = { duration: 1000 + 500 * Math.random(), easing: Easing.inOut(stateFromStores(dependencyMap[7]).Easing.sin) };
    Easing = stateFromStores(dependencyMap[7]).Easing;
    return obj;
  }), 1)[0].timingConfig;
  let obj2 = stateFromStores(5095);
  const fn = function l() {
    let tmp9;
    const obj = { opacity: null };
    if (stateFromStores) {
      obj.opacity = opacity;
      tmp9 = obj;
    } else {
      const withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      const withSequence = ReanimatedRexport.withSequence;
      ReanimatedRexport;
      const obj2 = timing;
      const withTimingResult = obj2.withTiming(opacity, timingConfig);
      const obj3 = timing;
      obj.opacity = withDelay(1000, withRepeat(withSequence(withTimingResult, obj3.withTiming(1, timingConfig)), -1, true));
      tmp9 = obj;
    }
    return tmp9;
  };
  let obj3 = { reducedMotion: stateFromStores, ROW_OPACITY_END, withDelay: stateFromStores(5095).withDelay, INITIAL_DELAY_MS: 1000, withRepeat: stateFromStores(5095).withRepeat, withSequence: stateFromStores(5095).withSequence, withTiming: stateFromStores(5254).withTiming, timingConfig };
  fn.__closure = obj3;
  fn.__workletHash = 9488742940898;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const View = timingConfig(5095).View;
  return <View style={animatedStyle} pointerEvents="none">{null}</View>;
});
const result = size.fileFinishedImporting("modules/forums/native/ForumPostPlaceholder.tsx");

export default memoResult;
