// Module ID: 5922
// Function ID: 5923
// Name: useIOSPressEffects
// Dependencies: [19, 1479, 4566, 1364, 5280, 2]
// Exports: useIOSPressEffects

// Module 5922 (useIOSPressEffects)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const SPRING_CONFIG = { overshootClamping: true, damping: 35, stiffness: 450, mass: 0.5, restDisplacementThreshold: 0.001 };
const __initData = { code: "function useIOSPressEffectsTsx1(){const{withSpring,interpolate,sharedPressState,sharedWidthScale,SPRING_CONFIG,withOpacity}=this.__closure;const scale=withSpring(interpolate(sharedPressState.get(),[0,1],[1,sharedWidthScale.get()]),SPRING_CONFIG);if(withOpacity){return{transform:[{scale:scale}],opacity:withSpring(interpolate(sharedPressState.get(),[0,1],[1,0.5]),SPRING_CONFIG)};}else{return{transform:[{scale:scale}]};}}" };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/util/useIOSPressEffects.tsx");

export { SPRING_CONFIG };
export const useIOSPressEffects = function useIOSPressEffects(arg0) {
  let closure_0;
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let width;
  width = flag(width[1])().width;
  let obj = require("ReanimatedRexport");
  const sharedValue = obj.useSharedValue(1 - arg0 / width);
  let items = [width, arg0, sharedValue];
  const effect = sharedValue.useEffect(() => {
    const result = sharedValue.set(1 - closure_0 / width);
  }, items);
  let obj2 = require("ReanimatedRexport");
  const sharedValue1 = obj2.useSharedValue(0);
  let items1 = [sharedValue1];
  let items2 = [sharedValue1];
  const callback = sharedValue.useCallback(() => {
    const obj = PlatformUtils;
    const isIOSResult = obj.isIOS() && sharedValue1.set(1);
    return isIOSResult;
  }, items1);
  const callback1 = sharedValue.useCallback(() => {
    const obj = PlatformUtils;
    const isIOSResult = obj.isIOS() && sharedValue1.set(0);
    return isIOSResult;
  }, items2);
  let obj3 = require("ReanimatedRexport");
  class S {
    constructor() {
      let items1;
      let items2;
      let obj4;
      let tmpResult2;
      let withSpring2;
      const withSpring = spring.withSpring;
      spring;
      const interpolate = ReanimatedRexport.interpolate;
      ReanimatedRexport;
      const value = sharedValue1.get();
      const items = [1, sharedValue.get()];
      const withSpringResult = withSpring(interpolate(value, [0, 1], items), sharedValue1);
      const tmp6 = sharedValue1;
      const tmp8 = flag;
      if (tmp8) {
        const obj2 = { transform: items1, opacity: withSpring2(tmpResult2.interpolate(sharedValue1.get(), [0, 1], [1, 0.5]), tmp6) };
        items1 = [{ scale: withSpringResult }];
        const obj3 = { scale: withSpringResult };
        withSpring2 = spring.withSpring;
        spring;
        obj4 = obj2;
        tmpResult2 = ReanimatedRexport;
      } else {
        obj4 = { transform: items2 };
        items2 = [{ scale: withSpringResult }];
        const obj5 = { scale: withSpringResult };
      }
      return obj4;
    }
  }
  let obj4 = { withSpring: require("spring").withSpring, interpolate: require("ReanimatedRexport").interpolate, sharedPressState: sharedValue1, sharedWidthScale: sharedValue, SPRING_CONFIG: sharedValue1, withOpacity: flag };
  S.__closure = obj4;
  S.__workletHash = 1305898392151;
  S.__initData = __initData;
  let obj5 = { sharedPressState: sharedValue1, onPressOut: callback1, onPressIn: callback, pressableStyles: obj3.useAnimatedStyle(S) };
  return obj5;
};
