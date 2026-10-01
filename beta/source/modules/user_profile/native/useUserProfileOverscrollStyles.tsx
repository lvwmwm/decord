// Module ID: 7689
// Function ID: 7690
// Name: useUserProfileOverscrollStyles
// Dependencies: [32, 19, 4825, 1479, 504, 4566, 2]
// Exports: default

// Module 7689 (useUserProfileOverscrollStyles)
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import size from "module_2" /* 2 */;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let __initData = { code: "function useUserProfileOverscrollStylesTsx1(){const{position}=this.__closure;return position.get()<=0;}" };
const __initData2 = { code: "function useUserProfileOverscrollStylesTsx2(){const{isNegativeScrollPosition,position}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:position.get()}]:[];return{transform:transform};}" };
const __initData3 = { code: "function useUserProfileOverscrollStylesTsx3(){const{interpolate,position,minScrollPosition,SCALE_FACTOR,translateOnScale,isNegativeScrollPosition}=this.__closure;const scale=interpolate(position.get(),[minScrollPosition,0],[SCALE_FACTOR,1]);const translateY=interpolate(position.get(),[minScrollPosition,0],[translateOnScale,0]);const transform=isNegativeScrollPosition.get()?[{scale:scale},{translateY:translateY}]:[];return{transform:transform};}" };
const __initData4 = { code: "function useUserProfileOverscrollStylesTsx4(){const{isNegativeScrollPosition,position,coefficient}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:position.get()*(1/coefficient)}]:[];return{transform:transform};}" };
const __initData5 = { code: "function useUserProfileOverscrollStylesTsx5(){const{clamp,interpolate,position,windowHeight,coefficient}=this.__closure;return{blurAmount:clamp(interpolate(position.get(),[0,-windowHeight*coefficient],[0,1]),0,1)};}" };
const __initData6 = { code: "function useUserProfileOverscrollStylesTsx6(){const{position}=this.__closure;return position.get()<0;}" };
const __initData7 = { code: "function useUserProfileOverscrollStylesTsx7(result,previous){const{runOnJS,setShowBlur}=this.__closure;return result!==previous&&runOnJS(setShowBlur)(result);}" };
let result = size.fileFinishedImporting("modules/user_profile/native/useUserProfileOverscrollStyles.tsx");

export default function useUserProfileOverscrollStyles(arg0) {
  let bannerHeight;
  let c4;
  let closure_3;
  let closure_6;
  let scrollPosition;
  ({ scrollPosition, bannerHeight } = arg0);
  let stateFromStores;
  scrollPosition = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let derivedValue;
  __initData = undefined;
  let tmp = scrollPosition;
  const height = stateFromStores(scrollPosition[3])().height;
  let obj = height(scrollPosition[4]);
  let items = [derivedValue];
  stateFromStores = obj.useStateFromStores(items, () => {
    let num = 1.5;
    if (derivedValue.useReducedMotion) {
      num = 1;
    }
    return num;
  }, []);
  let obj2 = height(scrollPosition[5]);
  if (scrollPosition == null) {
    scrollPosition = obj2.useSharedValue(0);
  }
  _slicedToArray = tmp4;
  const result = 0.125 * bannerHeight;
  react = result;
  const fn = function v() {
    return scrollPosition.get() <= 0;
  };
  fn.__closure = { position: scrollPosition };
  fn.__workletHash = 11756661427383;
  fn.__initData = __initData;
  const tmp2Result = height(tmp[5]);
  derivedValue = tmp2Result.useDerivedValue(fn);
  const tmp2Result6 = height(tmp[5]);
  class P {
    constructor() {
      let transform;
      if (derivedValue.get()) {
        const items = [{ translateY: scrollPosition.get() }];
        transform = items;
        const obj = { translateY: scrollPosition.get() };
      } else {
        transform = [];
      }
      return { transform };
    }
  }
  P.__closure = { isNegativeScrollPosition: derivedValue, position: scrollPosition };
  P.__workletHash = 2642279626533;
  P.__initData = __initData2;
  const bannerAnimatedStyle = tmp2Result6.useAnimatedStyle(P);
  const tmp2Result7 = height(tmp[5]);
  class O {
    constructor() {
      let transform;
      const items = [closure_3, 0];
      const obj = ReanimatedRexport;
      const items1 = [closure_3, 0];
      const items2 = [c4, 0];
      const interpolateResult = obj.interpolate(scrollPosition.get(), items, [1.5, 1]);
      const obj2 = ReanimatedRexport;
      const interpolateResult1 = obj2.interpolate(scrollPosition.get(), items1, items2);
      if (derivedValue.get()) {
        const items3 = [{ scale: interpolateResult }, ];
        const obj3 = { scale: interpolateResult };
        const obj4 = { translateY: interpolateResult1 };
        items3[1] = obj4;
        transform = items3;
      } else {
        transform = [];
      }
      return { transform };
    }
  }
  let obj3 = { interpolate: tmp2(tmp[5]).interpolate, position: scrollPosition, minScrollPosition: tmp4, SCALE_FACTOR: 1.5, translateOnScale: result, isNegativeScrollPosition: derivedValue };
  O.__closure = obj3;
  O.__workletHash = 5375176079092;
  O.__initData = __initData3;
  const bannerImageAnimatedStyle = tmp2Result7.useAnimatedStyle(O);
  const fn2 = function w() {
    let transform;
    if (derivedValue.get()) {
      const items = [{ translateY: scrollPosition.get() * (1 / stateFromStores) }];
      transform = items;
      const obj = { translateY: scrollPosition.get() * (1 / stateFromStores) };
    } else {
      transform = [];
    }
    return { transform };
  };
  fn2.__closure = { isNegativeScrollPosition: derivedValue, position: scrollPosition, coefficient: stateFromStores };
  fn2.__workletHash = 16539417859130;
  fn2.__initData = __initData4;
  const tmp2Result8 = height(tmp[5]);
  const contentAnimatedStyle = tmp2Result8.useAnimatedStyle(fn2);
  const tmp2Result9 = height(tmp[5]);
  class A {
    constructor() {
      let clamp;
      let items;
      let obj2;
      const obj = { blurAmount: clamp(obj2.interpolate(scrollPosition.get(), items, [0, 1]), 0, 1) };
      clamp = ReanimatedRexport.clamp;
      ReanimatedRexport;
      items = [0, -height * stateFromStores];
      obj2 = ReanimatedRexport;
      return obj;
    }
  }
  let obj4 = { clamp: tmp2(tmp[5]).clamp, interpolate: tmp2(tmp[5]).interpolate, position: scrollPosition, windowHeight: height, coefficient: stateFromStores };
  A.__closure = obj4;
  A.__workletHash = 849678936428;
  A.__initData = __initData5;
  const blurAnimatedProps = tmp2Result9.useAnimatedProps(A);
  const tmp11 = _slicedToArray(react.useState(scrollPosition.get() < 0), 2);
  __initData = tmp13;
  const showBlur = tmp11[0];
  const tmp2Result10 = height(tmp[5]);
  class H {
    constructor() {
      return scrollPosition.get() < 0;
    }
  }
  H.__closure = { position: scrollPosition };
  H.__workletHash = 3867620644429;
  H.__initData = __initData6;
  const fn3 = function y(arg0, arg1) {
    let tmp = arg0 !== arg1;
    if (tmp) {
      const obj = ReanimatedRexport;
      tmp = obj.runOnJS(closure_6)(arg0);
    }
    return tmp;
  };
  fn3.__closure = { runOnJS: height(tmp[5]).runOnJS, setShowBlur: tmp11[1] };
  fn3.__workletHash = 6548835412849;
  fn3.__initData = __initData7;
  ({ runOnJS: height(tmp[5]).runOnJS, setShowBlur: tmp11[1] });
  const animatedReaction = tmp2Result10.useAnimatedReaction(H, fn3);
  return { bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur };
};
