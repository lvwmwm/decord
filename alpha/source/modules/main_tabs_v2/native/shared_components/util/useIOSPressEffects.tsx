// Module ID: 7123
// Function ID: 7124
// Name: useIOSPressEffects
// Dependencies: [19, 1493, 1652, 1377, 5771, 2]
// Exports: useIOSPressEffects

// Module 7123 (useIOSPressEffects)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const SPRING_CONFIG = { overshootClamping: true, damping: 35, stiffness: 450, mass: 0.5 };
let closure_5 = { code: "(function useIOSPressEffectsTsx1(){let[withSpring,interpolate,sharedPressState,sharedWidthScale,SPRING_CONFIG,withOpacity]=this.__closure;const scale=withSpring(interpolate(sharedPressState.get(),[0,1],[1,sharedWidthScale.get()]),SPRING_CONFIG);if(withOpacity){return{transform:[{scale:scale}],opacity:withSpring(interpolate(sharedPressState.get(),[0,1],[1,0.5]),SPRING_CONFIG)};}else{return{transform:[{scale:scale}]};}})" };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/util/useIOSPressEffects.tsx");

export { SPRING_CONFIG };
export function useIOSPressEffects(arg0) {
  let closure_0;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp7;
  let tmp8;
  let tmp9;
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let width;
  let sharedValue;
  let sharedValue1;
  width = width(sharedValue[1])().width;
  let obj = require("module_1652");
  sharedValue = obj.useSharedValue(1 - arg0 / width);
  let items = [width, arg0, sharedValue];
  const effect = sharedValue1.useEffect(() => {
    const result = sharedValue.set(1 - closure_0 / width);
  }, items);
  let obj2 = require("module_1652");
  sharedValue1 = obj2.useSharedValue(0);
  let items1 = [sharedValue1];
  let items2 = [sharedValue1];
  const callback = sharedValue1.useCallback(() => {
    const obj = PlatformUtils;
    const isIOSResult = obj.isIOS() && sharedValue1.set(1);
    return isIOSResult;
  }, items1);
  const callback1 = sharedValue1.useCallback(() => {
    const obj = PlatformUtils;
    const isIOSResult = obj.isIOS() && sharedValue1.set(0);
    return isIOSResult;
  }, items2);
  let tmp6 = require("module_1652");
  const items3 = [closure_5, , , , , , ];
  const useAnimatedStyle = tmp6.useAnimatedStyle;
  items3[1] = require("spring/spring").withSpring;
  items3[2] = require("module_1652").interpolate;
  items3[3] = sharedValue1;
  items3[4] = sharedValue;
  items3[5] = obj;
  items3[6] = flag;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items3;
  function useIOSPressEffectsTsx1() {
    let items1;
    let items2;
    let obj4;
    const value = _undefined3.get();
    const items = [1, _undefined4.get()];
    const tmp5 = _undefined(_undefined2(value, [0, 1], items), c4);
    const obj = _undefined3;
    const tmp = _undefined;
    const tmp2 = _undefined2;
    const tmp4 = c4;
    const tmp6 = c5;
    if (tmp6) {
      const obj2 = { transform: items1, opacity: tmp(tmp2(obj.get(), [0, 1], [1, 0.5]), tmp4) };
      items1 = [{ scale: tmp5 }];
      obj4 = obj2;
      const obj3 = { scale: tmp5 };
    } else {
      obj4 = { transform: items2 };
      items2 = [{ scale: tmp5 }];
      const obj5 = { scale: tmp5 };
    }
    return obj4;
  }
  const items4 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13];
  useIOSPressEffectsTsx1.__closure = items4;
  useIOSPressEffectsTsx1.__workletHash = 16251534857998;
  useIOSPressEffectsTsx1.__initData = tmp7;
  let obj3 = { sharedPressState: sharedValue1, onPressOut: callback1, onPressIn: callback, pressableStyles: useAnimatedStyle(useIOSPressEffectsTsx1) };
  return obj3;
}
