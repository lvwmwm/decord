// Module ID: 5169
// Function ID: 44989
// Name: SPRING_CONFIG
// Dependencies: [31, 1450, 3991, 477, 4542, 2]
// Exports: useIOSPressEffects

// Module 5169 (SPRING_CONFIG)
import result from "result";

const require = arg1;
let obj = { overshootClamping: true, damping: 35, stiffness: 450, mass: 0.5, restDisplacementThreshold: 0.001 };
let closure_5 = { code: "function useIOSPressEffectsTsx1(){const{withSpring,interpolate,sharedPressState,sharedWidthScale,SPRING_CONFIG,withOpacity}=this.__closure;const scale=withSpring(interpolate(sharedPressState.get(),[0,1],[1,sharedWidthScale.get()]),SPRING_CONFIG);if(withOpacity){return{transform:[{scale:scale}],opacity:withSpring(interpolate(sharedPressState.get(),[0,1],[1,0.5]),SPRING_CONFIG)};}else{return{transform:[{scale:scale}]};}}" };
let result = require("module_3991").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/util/useIOSPressEffects.tsx");

export const SPRING_CONFIG = obj;
export const useIOSPressEffects = function useIOSPressEffects(arg0) {
  let flag = arg1;
  const _require = arg0;
  if (arg1 === undefined) {
    flag = false;
  }
  let width;
  let sharedValue;
  let sharedValue1;
  width = flag(width[1])().width;
  let obj = _require(width[2]);
  sharedValue = obj.useSharedValue(1 - arg0 / width);
  let items = [width, arg0, sharedValue];
  const effect = sharedValue.useEffect(() => {
    const result = sharedValue.set(1 - closure_0 / width);
  }, items);
  sharedValue1 = _require(width[2]).useSharedValue(0);
  let items1 = [sharedValue1];
  let items2 = [sharedValue1];
  const callback = sharedValue.useCallback(() => {
    let isIOSResult = callback(width[3]).isIOS();
    if (isIOSResult) {
      isIOSResult = sharedValue1.set(1);
    }
    return isIOSResult;
  }, items1);
  const callback1 = sharedValue.useCallback(() => {
    let isIOSResult = callback(width[3]).isIOS();
    if (isIOSResult) {
      isIOSResult = sharedValue1.set(0);
    }
    return isIOSResult;
  }, items2);
  const obj2 = _require(width[2]);
  class S {
    constructor() {
      obj = closure_0(width[4]);
      obj2 = closure_0(width[2]);
      value = width.get();
      items = [1];
      items[1] = c3.get();
      withSpringResult = obj.withSpring(obj2.interpolate(value, [0, 1], items), width);
      obj = {};
      if (c1) {
        obj1 = {};
        obj.scale = withSpringResult;
        items1 = [];
        items1[0] = obj;
        obj1.transform = items1;
        tmp4 = closure_0;
        tmp5 = width;
        obj6 = closure_0(width[4]);
        obj7 = closure_0(width[2]);
        tmp6 = width;
        tmp7 = width;
        obj1.opacity = obj6.withSpring(obj7.interpolate(width.get(), [0, 1], [1, 0.5]), width);
        tmp3 = obj1;
      } else {
        obj2 = {};
        obj2.scale = withSpringResult;
        items2 = [];
        items2[0] = obj2;
        obj.transform = items2;
        tmp3 = obj;
      }
      return tmp3;
    }
  }
  obj = { withSpring: _require(width[4]).withSpring, interpolate: _require(width[2]).interpolate, sharedPressState: sharedValue1, sharedWidthScale: sharedValue, SPRING_CONFIG: sharedValue1, withOpacity: flag };
  S.__closure = obj;
  S.__workletHash = 1305898392151;
  S.__initData = closure_5;
  obj = { sharedPressState: sharedValue1, onPressOut: callback1, onPressIn: callback, pressableStyles: _require(width[2]).useAnimatedStyle(S) };
  return obj;
};
