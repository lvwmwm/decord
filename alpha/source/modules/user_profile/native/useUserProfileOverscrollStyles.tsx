// Module ID: 8609
// Function ID: 8610
// Name: useUserProfileOverscrollStyles
// Dependencies: [32, 19, 5307, 1496, 504, 1655, 1708, 2]
// Exports: default

// Module 8609 (useUserProfileOverscrollStyles)
import get_initialized from "get initialized" /* 504 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import _mod1655 from "module_1655" /* 1655 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import size from "module_2" /* 2 */;

let tmp2;
const _mod1708 = tmp2(1708);
let closure_6 = { code: "(function useUserProfileOverscrollStylesTsx1(){let[position]=this.__closure;return position.get()<=0;})" };
let closure_7 = { code: "(function useUserProfileOverscrollStylesTsx2(){let[isNegativeScrollPosition,position]=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:position.get()}]:[];return{transform:transform};})" };
let closure_8 = { code: "(function useUserProfileOverscrollStylesTsx3(){let[interpolate,position,minScrollPosition,SCALE_FACTOR,translateOnScale,isNegativeScrollPosition]=this.__closure;const scale=interpolate(position.get(),[minScrollPosition,0],[SCALE_FACTOR,1]);const translateY=interpolate(position.get(),[minScrollPosition,0],[translateOnScale,0]);const transform=isNegativeScrollPosition.get()?[{scale:scale},{translateY:translateY}]:[];return{transform:transform};})" };
let closure_9 = { code: "(function useUserProfileOverscrollStylesTsx4(){let[isNegativeScrollPosition,position,coefficient]=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:position.get()*(1/coefficient)}]:[];return{transform:transform};})" };
let closure_10 = { code: "(function useUserProfileOverscrollStylesTsx5(){let[clamp,interpolate,position,windowHeight,coefficient]=this.__closure;return{blurAmount:clamp(interpolate(position.get(),[0,-windowHeight*coefficient],[0,1]),0,1)};})" };
let closure_11 = { code: "(function useUserProfileOverscrollStylesTsx6(){let[position]=this.__closure;return position.get()<0;})" };
let closure_12 = { code: "(function useUserProfileOverscrollStylesTsx7(result,previous){let[scheduleOnRN,setShowBlur]=this.__closure;return result!==previous&&scheduleOnRN(setShowBlur,result);})" };
const result = size.fileFinishedImporting("modules/user_profile/native/useUserProfileOverscrollStyles.tsx");

export default function useUserProfileOverscrollStyles(arg0) {
  let bannerHeight;
  let scrollPosition;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp34;
  let tmp35;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp4;
  let tmp40;
  let tmp41;
  let tmp5;
  let tmp7;
  let tmp8;
  let tmp9;
  let useReducedMotion;
  ({ scrollPosition, bannerHeight } = arg0);
  let tmp = dependencyMap;
  let tmp2 = require;
  const height = useWindowDimensionsDefault().height;
  let obj = get_initialized;
  let items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let num = 1.5;
    if (useReducedMotion.useReducedMotion) {
      num = 1;
    }
    return num;
  }, []);
  let obj2 = _mod1655;
  if (scrollPosition == null) {
    scrollPosition = obj2.useSharedValue(0);
  }
  let items1 = [closure_6, scrollPosition];
  [tmp4, tmp5] = items1;
  function useUserProfileOverscrollStylesTsx1() {
    return _undefined.get() <= 0;
  }
  let items2 = [tmp5];
  useUserProfileOverscrollStylesTsx1.__closure = items2;
  useUserProfileOverscrollStylesTsx1.__workletHash = 921106787598;
  useUserProfileOverscrollStylesTsx1.__initData = tmp4;
  const tmp2Result = _mod1655;
  const derivedValue = tmp2Result.useDerivedValue(useUserProfileOverscrollStylesTsx1);
  let items3 = [closure_7, derivedValue, scrollPosition];
  [tmp7, tmp8, tmp9] = items3;
  function useUserProfileOverscrollStylesTsx2() {
    let transform;
    if (_undefined.get()) {
      const items = [{ translateY: _undefined2.get() }];
      transform = items;
      const obj = { translateY: _undefined2.get() };
    } else {
      transform = [];
    }
    return { transform };
  }
  let items4 = [tmp8, tmp9];
  useUserProfileOverscrollStylesTsx2.__closure = items4;
  useUserProfileOverscrollStylesTsx2.__workletHash = 3658505627420;
  useUserProfileOverscrollStylesTsx2.__initData = tmp7;
  const tmp2Result6 = _mod1655;
  const bannerAnimatedStyle = tmp2Result6.useAnimatedStyle(useUserProfileOverscrollStylesTsx2);
  const items5 = [closure_8, , , , , , ];
  const useAnimatedStyle = _mod1655.useAnimatedStyle;
  _mod1655;
  items5[1] = _mod1655.interpolate;
  items5[2] = scrollPosition;
  items5[3] = -bannerHeight;
  items5[4] = 1.5;
  items5[5] = 0.125 * bannerHeight;
  items5[6] = derivedValue;
  let c5;
  [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items5;
  function useUserProfileOverscrollStylesTsx3() {
    let transform;
    const items = [c2, 0];
    const items1 = [c3, 1];
    const items2 = [c2, 0];
    const items3 = [c4, 0];
    const tmp = _undefined(_undefined2.get(), items, items1);
    const tmp2 = _undefined(_undefined2.get(), items2, items3);
    if (_undefined3.get()) {
      const items4 = [{ scale: tmp }, ];
      const obj = { scale: tmp };
      const obj2 = { translateY: tmp2 };
      items4[1] = obj2;
      transform = items4;
    } else {
      transform = [];
    }
    return { transform };
  }
  const items6 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
  useUserProfileOverscrollStylesTsx3.__closure = items6;
  useUserProfileOverscrollStylesTsx3.__workletHash = 1116167089549;
  useUserProfileOverscrollStylesTsx3.__initData = tmp12;
  const bannerImageAnimatedStyle = useAnimatedStyle(useUserProfileOverscrollStylesTsx3);
  const items7 = [closure_9, derivedValue, scrollPosition, stateFromStores];
  [tmp20, tmp21, tmp22, tmp23] = items7;
  function useUserProfileOverscrollStylesTsx4() {
    let transform;
    if (_undefined.get()) {
      const items = [{ translateY: _undefined2.get() * (1 / c2) }];
      transform = items;
      const obj = { translateY: _undefined2.get() * (1 / c2) };
    } else {
      transform = [];
    }
    return { transform };
  }
  const items8 = [tmp21, tmp22, tmp23];
  useUserProfileOverscrollStylesTsx4.__closure = items8;
  useUserProfileOverscrollStylesTsx4.__workletHash = 2257948482275;
  useUserProfileOverscrollStylesTsx4.__initData = tmp20;
  const tmp2Result8 = _mod1655;
  const contentAnimatedStyle = tmp2Result8.useAnimatedStyle(useUserProfileOverscrollStylesTsx4);
  const items9 = [closure_10, , , , , ];
  const useAnimatedProps = _mod1655.useAnimatedProps;
  _mod1655;
  items9[1] = _mod1655.clamp;
  items9[2] = _mod1655.interpolate;
  items9[3] = scrollPosition;
  items9[4] = height;
  items9[5] = stateFromStores;
  let c2;
  let c3;
  let c4;
  [tmp26, tmp27, tmp28, tmp29, tmp30, tmp31] = items9;
  function useUserProfileOverscrollStylesTsx5() {
    let items;
    const obj = { blurAmount: _undefined(_undefined2(_undefined3.get(), items, [0, 1]), 0, 1) };
    items = [0, -c3 * c4];
    return obj;
  }
  const items10 = [tmp27, tmp28, tmp29, tmp30, tmp31];
  useUserProfileOverscrollStylesTsx5.__closure = items10;
  useUserProfileOverscrollStylesTsx5.__workletHash = 2283448470325;
  useUserProfileOverscrollStylesTsx5.__initData = tmp26;
  const blurAnimatedProps = useAnimatedProps(useUserProfileOverscrollStylesTsx5);
  [tmp34, tmp35] = react.useState(scrollPosition.get() < 0);
  _slicedToArray(react.useState(scrollPosition.get() < 0), 2);
  const items11 = [closure_11, scrollPosition];
  [tmp37, tmp38] = items11;
  function useUserProfileOverscrollStylesTsx6() {
    return _undefined.get() < 0;
  }
  const items12 = [tmp38];
  useUserProfileOverscrollStylesTsx6.__closure = items12;
  useUserProfileOverscrollStylesTsx6.__workletHash = 4981140014420;
  useUserProfileOverscrollStylesTsx6.__initData = tmp37;
  const items13 = [closure_12, , ];
  const useAnimatedReaction = _mod1655.useAnimatedReaction;
  _mod1655;
  items13[1] = _mod1708.scheduleOnRN;
  items13[2] = tmp35;
  let c0;
  let c1;
  [tmp39, tmp40, tmp41] = items13;
  function useUserProfileOverscrollStylesTsx7(arg0, arg1) {
    const tmp = arg0 !== arg1 && _undefined(c1, arg0);
    return tmp;
  }
  const items14 = [tmp40, tmp41];
  useUserProfileOverscrollStylesTsx7.__closure = items14;
  useUserProfileOverscrollStylesTsx7.__workletHash = 9246370536613;
  useUserProfileOverscrollStylesTsx7.__initData = tmp39;
  const animatedReaction = useAnimatedReaction(useUserProfileOverscrollStylesTsx6, useUserProfileOverscrollStylesTsx7);
  return { bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur };
};
