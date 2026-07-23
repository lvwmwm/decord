// Module ID: 11151
// Function ID: 86707
// Dependencies: [57, 31, 4122, 33, 4130, 689, 566, 3991, 4131, 5167, 2]

// Module 11151
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let obj = {};
obj = { height: 2 * require("_createForOfIteratorHelperLoose").space.PX_64, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.postPlaceholder = obj;
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_8 = { code: "function ForumPostPlaceholderTsx1(){const{reducedMotion,ROW_OPACITY_END,withDelay,INITIAL_DELAY_MS,withRepeat,withSequence,withTiming,timingConfig}=this.__closure;if(reducedMotion){return{opacity:ROW_OPACITY_END};}return{opacity:withDelay(INITIAL_DELAY_MS,withRepeat(withSequence(withTiming(ROW_OPACITY_END,timingConfig),withTiming(1,timingConfig)),-1,true))};}" };
const memoResult = importAllResult.memo(() => {
  let obj = stateFromStores(566);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_5.useReducedMotion);
  const timingConfig = callback(importAllResult.useState(() => {
    let obj = {};
    obj = { duration: 1000 + 500 * Math.random() };
    const Easing = stateFromStores(outer1_2[7]).Easing;
    obj.easing = Easing.inOut(stateFromStores(outer1_2[7]).Easing.sin);
    obj.timingConfig = obj;
    return obj;
  }), 1)[0].timingConfig;
  let obj1 = stateFromStores(3991);
  const fn = function _() {
    const obj = {};
    if (stateFromStores) {
      obj.opacity = 0.55;
      let tmp5 = obj;
    } else {
      const obj2 = stateFromStores(outer1_2[7]);
      const obj3 = stateFromStores(outer1_2[7]);
      const obj4 = stateFromStores(outer1_2[7]);
      const obj5 = stateFromStores(outer1_2[8]);
      const withTimingResult = stateFromStores(outer1_2[8]).withTiming(0.55, timingConfig);
      obj.opacity = obj2.withDelay(1000, obj3.withRepeat(obj4.withSequence(withTimingResult, stateFromStores(outer1_2[8]).withTiming(1, timingConfig)), -1, true));
      tmp5 = obj;
      const obj6 = stateFromStores(outer1_2[8]);
    }
    return tmp5;
  };
  obj = { reducedMotion: stateFromStores, ROW_OPACITY_END: 0.55, withDelay: stateFromStores(3991).withDelay, INITIAL_DELAY_MS: 1000, withRepeat: stateFromStores(3991).withRepeat, withSequence: stateFromStores(3991).withSequence, withTiming: stateFromStores(4131).withTiming, timingConfig };
  fn.__closure = obj;
  fn.__workletHash = 9488742940898;
  fn.__initData = closure_8;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { style: animatedStyle, pointerEvents: "none" };
  obj1 = { variant: "secondary", style: callback2().postPlaceholder };
  obj.children = jsx(stateFromStores(5167).Card, { variant: "secondary", style: callback2().postPlaceholder });
  return jsx(timingConfig(3991).View, { style: animatedStyle, pointerEvents: "none" });
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/forums/native/ForumPostPlaceholder.tsx");

export default memoResult;
