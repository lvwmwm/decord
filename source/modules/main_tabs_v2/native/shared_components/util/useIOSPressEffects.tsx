// Module ID: 5430
// Function ID: 46483
// Name: SPRING_CONFIG
// Dependencies: []
// Exports: useIOSPressEffects

// Module 5430 (SPRING_CONFIG)
let closure_3 = importAll(dependencyMap[0]);
const obj = {};
let closure_5 = { code: "function useIOSPressEffectsTsx1(){const{withSpring,interpolate,sharedPressState,sharedWidthScale,SPRING_CONFIG,withOpacity}=this.__closure;const scale=withSpring(interpolate(sharedPressState.get(),[0,1],[1,sharedWidthScale.get()]),SPRING_CONFIG);if(withOpacity){return{transform:[{scale:scale}],opacity:withSpring(interpolate(sharedPressState.get(),[0,1],[1,0.5]),SPRING_CONFIG)};}else{return{transform:[{scale:scale}]};}}" };
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/util/useIOSPressEffects.tsx");

export const SPRING_CONFIG = obj;
export const useIOSPressEffects = function useIOSPressEffects(arg0) {
  let flag = arg1;
  const arg1 = arg0;
  if (arg1 === undefined) {
    flag = false;
  }
  const importDefault = flag;
  let dependencyMap;
  let React;
  let obj;
  const width = importDefault(dependencyMap[1])().width;
  dependencyMap = width;
  obj = arg1(dependencyMap[2]);
  const sharedValue = obj.useSharedValue(1 - arg0 / width);
  React = sharedValue;
  const items = [width, arg0, sharedValue];
  const effect = React.useEffect(() => {
    const result = sharedValue.set(1 - arg0 / width);
  }, items);
  const sharedValue1 = arg1(dependencyMap[2]).useSharedValue(0);
  obj = sharedValue1;
  const items1 = [sharedValue1];
  const items2 = [sharedValue1];
  const callback = React.useCallback(() => {
    let isIOSResult = arg0(width[3]).isIOS();
    if (isIOSResult) {
      isIOSResult = sharedValue1.set(1);
    }
    return isIOSResult;
  }, items1);
  const callback1 = React.useCallback(() => {
    let isIOSResult = arg0(width[3]).isIOS();
    if (isIOSResult) {
      isIOSResult = sharedValue1.set(0);
    }
    return isIOSResult;
  }, items2);
  const obj2 = arg1(dependencyMap[2]);
  class S {
    constructor() {
      obj = arg0(width[4]);
      obj2 = arg0(width[2]);
      value = width.get();
      items = [24573934974154670000000000000000000000000000000000000000000000000000000000000];
      items[1] = closure_3.get();
      withSpringResult = obj.withSpring(obj2.interpolate(value, [null, null], items), width);
      obj = {};
      if (closure_1) {
        obj1 = {};
        obj.scale = withSpringResult;
        items1 = [];
        items1[0] = obj;
        obj1.transform = items1;
        tmp4 = arg0;
        tmp5 = width;
        obj6 = arg0(width[4]);
        obj7 = arg0(width[2]);
        tmp6 = width;
        tmp7 = width;
        obj1.opacity = obj6.withSpring(obj7.interpolate(width.get(), [null, null], [null, null]), width);
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
  obj = { withSpring: arg1(dependencyMap[4]).withSpring, interpolate: arg1(dependencyMap[2]).interpolate, sharedPressState: sharedValue1, sharedWidthScale: sharedValue, SPRING_CONFIG: obj, withOpacity: flag };
  S.__closure = obj;
  S.__workletHash = 1305898392151;
  S.__initData = closure_5;
  obj = { sharedPressState: sharedValue1, onPressOut: callback1, onPressIn: callback, pressableStyles: arg1(dependencyMap[2]).useAnimatedStyle(S) };
  return obj;
};
