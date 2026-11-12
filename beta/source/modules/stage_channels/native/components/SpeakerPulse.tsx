// Module ID: 16344
// Function ID: 16345
// Name: SpeakerPulse
// Dependencies: [19, 17, 5171, 21, 5170, 575, 504, 1652, 5402, 2]
// Exports: default

// Module 16344 (SpeakerPulse)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5402 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
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
let closure_11 = { code: "(function SpeakerPulseTsx1(){let[animatedInnerOpacity]=this.__closure;return{opacity:animatedInnerOpacity.get()};})" };
let closure_12 = { code: "(function SpeakerPulseTsx2(){let[animatedOuterOpacity]=this.__closure;return{opacity:animatedOuterOpacity.get()};})" };
let result = size.fileFinishedImporting("modules/stage_channels/native/components/SpeakerPulse.tsx");

export default function SpeakerPulse(style) {
  let items10;
  let items11;
  let items6;
  let items7;
  let items8;
  let items9;
  let tmp11;
  let tmp12;
  let tmp8;
  let tmp9;
  let useReducedMotion;
  style = style.style;
  let stateFromStores;
  let sharedValue1;
  const tmp = closure_10();
  let obj = stateFromStores(sharedValue1[6]);
  const items = [AccessibilityStore];
  const tmp2 = stateFromStores;
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
      const withRepeat = _mod1652.withRepeat;
      _mod1652;
      const withSequence = _mod1652.withSequence;
      _mod1652;
      const withDelay = _mod1652.withDelay;
      _mod1652;
      const obj2 = timing_timing;
      const withDelayResult = withDelay(100, obj2.withTiming(c9, { duration: 250 }));
      const withDelay2 = _mod1652.withDelay;
      _mod1652;
      const obj3 = timing_timing;
      const withRepeatResult = withRepeat(withSequence(withDelayResult, withDelay2(250, obj3.withTiming(0, { duration: 500 }))), -1, false);
      const withRepeat2 = _mod1652.withRepeat;
      _mod1652;
      const withSequence2 = _mod1652.withSequence;
      _mod1652;
      const withDelay3 = _mod1652.withDelay;
      _mod1652;
      const obj4 = timing_timing;
      const withDelay3Result = withDelay3(350, obj4.withTiming(c9, { duration: 250 }));
      const obj5 = timing_timing;
      const withRepeat2Result = withRepeat2(withSequence2(withDelay3Result, obj5.withTiming(0, { duration: 500 })), -1, false);
      const result2 = obj.set(withRepeatResult);
      const result3 = sharedValue1.set(withRepeat2Result);
    } else {
      const result4 = set(c9);
      const result5 = sharedValue1.set(c9);
    }
  }, items1);
  let obj4 = stateFromStores(sharedValue1[7]);
  const items2 = [closure_11, sharedValue];
  let c0;
  [tmp8, tmp9] = items2;
  class SpeakerPulseTsx1 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items3 = [tmp9];
  SpeakerPulseTsx1.__closure = items3;
  SpeakerPulseTsx1.__workletHash = 867418052896;
  SpeakerPulseTsx1.__initData = tmp8;
  const animatedStyle = obj4.useAnimatedStyle(SpeakerPulseTsx1);
  const items4 = [closure_12, sharedValue1];
  c0 = undefined;
  [tmp11, tmp12] = items4;
  const tmp2Result = tmp2(sharedValue1[7]);
  class SpeakerPulseTsx2 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items5 = [tmp12];
  SpeakerPulseTsx2.__closure = items5;
  SpeakerPulseTsx2.__workletHash = 12945159140547;
  SpeakerPulseTsx2.__initData = tmp11;
  let obj5 = { children: items7 };
  const obj6 = { style: items6 };
  items6 = [tmp.border, style];
  const animatedStyle1 = tmp2Result.useAnimatedStyle(SpeakerPulseTsx2);
  items7 = [closure_6(View, obj6), , ];
  const obj7 = { style: items8 };
  items8 = [tmp.pulse, style, animatedStyle, ];
  const obj8 = { transform: items9 };
  items9 = [{ scale: 1.5 }];
  items8[3] = obj8;
  items7[1] = closure_6(sharedValue(sharedValue1[7]).View, obj7);
  const obj9 = { style: items10 };
  items10 = [tmp.pulse, style, animatedStyle1, ];
  const obj10 = { transform: items11 };
  items11 = [{ scale: 2 }];
  items10[3] = obj10;
  items7[2] = closure_6(sharedValue(sharedValue1[7]).View, obj9);
  return closure_8(closure_7, obj5);
};
