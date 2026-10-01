// Module ID: 13657
// Function ID: 13658
// Name: SpeakerPulse
// Dependencies: [19, 17, 4825, 21, 4836, 576, 504, 4566, 4837, 2]
// Exports: default

// Module 13657 (SpeakerPulse)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
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

export default function SpeakerPulse(arg0) {
  let color;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let style;
  let useReducedMotion;
  ({ color, style } = arg0);
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
  const fn = function b() {
    const obj = { opacity: sharedValue1.get() };
    return obj;
  };
  fn.__closure = { animatedOuterOpacity: sharedValue1 };
  fn.__workletHash = 13537504931930;
  fn.__initData = __initData2;
  const tmp11 = closure_6;
  const items2 = [tmp.border, , ];
  let tmp13 = null;
  const animatedStyle1 = obj5.useAnimatedStyle(fn);
  const tmp12 = View;
  const tmp10 = closure_7;
  const tmp9 = closure_8;
  if (null != color) {
    tmp13 = { backgroundColor: color };
    const obj6 = { backgroundColor: color };
  }
  const obj7 = { children: items3 };
  items2[1] = tmp13;
  items2[2] = style;
  items3 = [tmp11(tmp12, { style: items2 }), , ];
  const obj8 = { style: items4 };
  items4 = [tmp.pulse, style, animatedStyle, ];
  const obj9 = { transform: items5 };
  items5 = [{ scale: 1.5 }];
  items4[3] = obj9;
  items3[1] = tmp11(sharedValue(sharedValue1[7]).View, obj8);
  const obj10 = { style: items6 };
  items6 = [tmp.pulse, style, animatedStyle1, ];
  const obj11 = { transform: items7 };
  items7 = [{ scale: 2 }];
  items6[3] = obj11;
  items3[2] = tmp11(sharedValue(sharedValue1[7]).View, obj10);
  return tmp9(tmp10, obj7);
};
