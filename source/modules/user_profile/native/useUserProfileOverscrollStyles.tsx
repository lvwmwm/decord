// Module ID: 8509
// Function ID: 67896
// Name: useUserProfileOverscrollStyles
// Dependencies: [57, 31, 4122, 1450, 566, 3991, 2]
// Exports: default

// Module 8509 (useUserProfileOverscrollStyles)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
let closure_6 = { code: "function useUserProfileOverscrollStylesTsx1(){const{position}=this.__closure;return position.get()<=0;}" };
let closure_7 = { code: "function useUserProfileOverscrollStylesTsx2(){const{isNegativeScrollPosition,position}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:position.get()}]:[];return{transform:transform};}" };
let closure_8 = { code: "function useUserProfileOverscrollStylesTsx3(){const{interpolate,position,minScrollPosition,SCALE_FACTOR,translateOnScale,isNegativeScrollPosition}=this.__closure;const scale=interpolate(position.get(),[minScrollPosition,0],[SCALE_FACTOR,1]);const translateY=interpolate(position.get(),[minScrollPosition,0],[translateOnScale,0]);const transform=isNegativeScrollPosition.get()?[{scale:scale},{translateY:translateY}]:[];return{transform:transform};}" };
let closure_9 = { code: "function useUserProfileOverscrollStylesTsx4(){const{isNegativeScrollPosition,position,coefficient}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:position.get()*(1/coefficient)}]:[];return{transform:transform};}" };
let closure_10 = { code: "function useUserProfileOverscrollStylesTsx5(){const{clamp,interpolate,position,windowHeight,coefficient}=this.__closure;return{blurAmount:clamp(interpolate(position.get(),[0,-windowHeight*coefficient],[0,1]),0,1)};}" };
let closure_11 = { code: "function useUserProfileOverscrollStylesTsx6(){const{position}=this.__closure;return position.get()<0;}" };
let closure_12 = { code: "function useUserProfileOverscrollStylesTsx7(result,previous){const{runOnJS,setShowBlur}=this.__closure;return result!==previous&&runOnJS(setShowBlur)(result);}" };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/native/useUserProfileOverscrollStyles.tsx");

export default function useUserProfileOverscrollStyles(arg0) {
  let bannerHeight;
  let scrollPosition;
  ({ scrollPosition, bannerHeight } = arg0);
  let sharedValue;
  let callback;
  let React;
  let derivedValue;
  let c6;
  const height = stateFromStores(sharedValue[3])().height;
  let obj = height(sharedValue[4]);
  let items = [derivedValue];
  stateFromStores = obj.useStateFromStores(items, () => {
    let num = 1.5;
    if (derivedValue.useReducedMotion) {
      num = 1;
    }
    return num;
  }, []);
  let obj1 = height(sharedValue[5]);
  sharedValue = obj1.useSharedValue(0);
  if (null != scrollPosition) {
    sharedValue = scrollPosition;
  }
  callback = tmp2;
  const result = 0.125 * bannerHeight;
  React = result;
  let obj3 = height(sharedValue[5]);
  const fn = function v() {
    return sharedValue.get() <= 0;
  };
  obj = { position: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 11756661427383;
  fn.__initData = c6;
  derivedValue = obj3.useDerivedValue(fn);
  let obj5 = height(sharedValue[5]);
  class P {
    constructor() {
      obj = {};
      if (useStateFromStores.get()) {
        obj = {};
        tmp = c2;
        obj.translateY = c2.get();
        items = [];
        items[0] = obj;
        items1 = items;
      } else {
        items1 = [];
      }
      obj.transform = items1;
      return obj;
    }
  }
  obj = { isNegativeScrollPosition: derivedValue, position: sharedValue };
  P.__closure = obj;
  P.__workletHash = 2642279626533;
  P.__initData = closure_7;
  const bannerAnimatedStyle = obj5.useAnimatedStyle(P);
  class O {
    constructor() {
      obj = height(c2[5]);
      items = [, ];
      items[0] = c3;
      items[1] = 0;
      interpolateResult = obj.interpolate(c2.get(), items, [1.5, 1]);
      obj2 = height(c2[5]);
      items1 = [, ];
      items1[0] = c3;
      items1[1] = 0;
      items2 = [, ];
      items2[0] = c4;
      items2[1] = 0;
      obj = {};
      interpolateResult1 = obj2.interpolate(c2.get(), items1, items2);
      if (useStateFromStores.get()) {
        obj1 = {};
        obj1.scale = interpolateResult;
        items3 = [, ];
        items3[0] = obj1;
        obj2 = {};
        obj2.translateY = interpolateResult1;
        items3[1] = obj2;
        items4 = items3;
      } else {
        items4 = [];
      }
      obj.transform = items4;
      return obj;
    }
  }
  obj1 = { interpolate: height(sharedValue[5]).interpolate, position: sharedValue, minScrollPosition: -bannerHeight, SCALE_FACTOR: 1.5, translateOnScale: result, isNegativeScrollPosition: derivedValue };
  O.__closure = obj1;
  O.__workletHash = 5375176079092;
  O.__initData = closure_8;
  const bannerImageAnimatedStyle = height(sharedValue[5]).useAnimatedStyle(O);
  const obj8 = height(sharedValue[5]);
  const fn2 = function w() {
    let obj = {};
    if (derivedValue.get()) {
      obj = { translateY: sharedValue.get() * (1 / stateFromStores) };
      const items = [obj];
      let items1 = items;
    } else {
      items1 = [];
    }
    obj.transform = items1;
    return obj;
  };
  let obj2 = { isNegativeScrollPosition: derivedValue, position: sharedValue, coefficient: stateFromStores };
  fn2.__closure = obj2;
  fn2.__workletHash = 16539417859130;
  fn2.__initData = closure_9;
  const contentAnimatedStyle = height(sharedValue[5]).useAnimatedStyle(fn2);
  const obj10 = height(sharedValue[5]);
  class A {
    constructor() {
      obj = {};
      obj2 = height(c2[5]);
      obj3 = height(c2[5]);
      items = [0];
      items[1] = -height * closure_1;
      obj.blurAmount = obj2.clamp(obj3.interpolate(c2.get(), items, [0, 1]), 0, 1);
      return obj;
    }
  }
  obj3 = { clamp: height(sharedValue[5]).clamp, interpolate: height(sharedValue[5]).interpolate, position: sharedValue, windowHeight: height, coefficient: stateFromStores };
  A.__closure = obj3;
  A.__workletHash = 849678936428;
  A.__initData = closure_10;
  const blurAnimatedProps = height(sharedValue[5]).useAnimatedProps(A);
  const showBlur = callback(React.useState(sharedValue.get() < 0), 2);
  c6 = tmp10;
  const obj12 = height(sharedValue[5]);
  class H {
    constructor() {
      return c2.get() < 0;
    }
  }
  const obj4 = { position: sharedValue };
  H.__closure = obj4;
  H.__workletHash = 3867620644429;
  H.__initData = closure_11;
  const fn3 = function y(arg0, arg1) {
    let tmp = arg0 !== arg1;
    if (tmp) {
      tmp = height(sharedValue[5]).runOnJS(c6)(arg0);
      const obj = height(sharedValue[5]);
    }
    return tmp;
  };
  obj5 = { runOnJS: height(sharedValue[5]).runOnJS, setShowBlur: tmp10 };
  fn3.__closure = obj5;
  fn3.__workletHash = 6548835412849;
  fn3.__initData = closure_12;
  const animatedReaction = height(sharedValue[5]).useAnimatedReaction(H, fn3);
  return { bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur: showBlur[0] };
};
