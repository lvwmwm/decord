// Module ID: 15995
// Function ID: 15996
// Name: SpeakerPulse
// Dependencies: [19, 17, 5015, 21, 5014, 575, 504, 5095, 5254, 2]
// Exports: default

// Module 15995 (SpeakerPulse)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import timing from "timing" /* 5254 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = 0.16;
let createStyles = createStyles_mod;
let obj = { pulse: obj2, border: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.WHITE };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.STATUS_SPEAKING };
let closure_10 = createStyles(obj);
const __initData = { code: "function SpeakerPulseTsx1(){const{animatedInnerOpacity}=this.__closure;return{opacity:animatedInnerOpacity.get()};}" };
const __initData2 = { code: "function SpeakerPulseTsx2(){const{animatedOuterOpacity}=this.__closure;return{opacity:animatedOuterOpacity.get()};}" };
let result = size.fileFinishedImporting("modules/stage_channels/native/components/SpeakerPulse.tsx");

export default function SpeakerPulse(style) {
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let useReducedMotion;
  style = style.style;
  let stateFromStores;
  let sharedValue1;
  const tmp = closure_10();
  let obj = stateFromStores(sharedValue1[6]);
  const items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => !useReducedMotion.useReducedMotion, []);
  let obj2 = stateFromStores(sharedValue1[7]);
  const sharedValue = obj2.useSharedValue(c9);
  let obj3 = stateFromStores(sharedValue1[7]);
  sharedValue1 = obj3.useSharedValue(c9);
  const items1 = [stateFromStores, sharedValue, sharedValue1];
  const effect = react.useEffect(() => {
    const obj = sharedValue;
    if (stateFromStores) {
      const result = set(0);
      const result1 = sharedValue1.set(0);
      const withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      const withSequence = ReanimatedRexport.withSequence;
      ReanimatedRexport;
      const withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const obj2 = timing;
      const withDelayResult = withDelay(100, obj2.withTiming(c9, { duration: 250 }));
      const withDelay2 = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const obj3 = timing;
      const withRepeatResult = withRepeat(withSequence(withDelayResult, withDelay2(250, obj3.withTiming(0, { duration: 500 }))), -1, false);
      const withRepeat2 = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      const withSequence2 = ReanimatedRexport.withSequence;
      ReanimatedRexport;
      const withDelay3 = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const obj4 = timing;
      const withDelay3Result = withDelay3(350, obj4.withTiming(c9, { duration: 250 }));
      const obj5 = timing;
      const withRepeat2Result = withRepeat2(withSequence2(withDelay3Result, obj5.withTiming(0, { duration: 500 })), -1, false);
      const result2 = obj.set(withRepeatResult);
      const result3 = sharedValue1.set(withRepeat2Result);
    } else {
      const result4 = set(c9);
      const result5 = sharedValue1.set(c9);
    }
  }, items1);
  let obj4 = stateFromStores(sharedValue1[7]);
  class T {
    constructor() {
      const obj = { opacity: sharedValue.get() };
      return obj;
    }
  }
  T.__closure = { animatedInnerOpacity: sharedValue };
  T.__workletHash = 202297893401;
  T.__initData = __initData;
  const animatedStyle = obj4.useAnimatedStyle(T);
  let obj5 = stateFromStores(sharedValue1[7]);
  const fn = function k() {
    const obj = { opacity: sharedValue1.get() };
    return obj;
  };
  fn.__closure = { animatedOuterOpacity: sharedValue1 };
  fn.__workletHash = 13537504931930;
  fn.__initData = __initData2;
  const obj7 = { style: items2 };
  items2 = [tmp.border, style];
  const obj6 = { children: items3 };
  const animatedStyle1 = obj5.useAnimatedStyle(fn);
  items3 = [closure_6(View, obj7), , ];
  const obj8 = { style: items4 };
  items4 = [tmp.pulse, style, animatedStyle, ];
  const obj9 = { transform: items5 };
  items5 = [{ scale: 1.5 }];
  items4[3] = obj9;
  items3[1] = closure_6(sharedValue(sharedValue1[7]).View, obj8);
  const obj10 = { style: items6 };
  items6 = [tmp.pulse, style, animatedStyle1, ];
  const obj11 = { transform: items7 };
  items7 = [{ scale: 2 }];
  items6[3] = obj11;
  items3[2] = closure_6(sharedValue(sharedValue1[7]).View, obj10);
  return closure_8(closure_7, obj6);
};
