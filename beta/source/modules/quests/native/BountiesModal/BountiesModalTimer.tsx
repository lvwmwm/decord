// Module ID: 14579
// Function ID: 14580
// Name: BountiesModalTimer
// Dependencies: [19, 17, 21, 5286, 4566, 7909, 4836, 576, 1364, 4837, 4832, 8742, 2]
// Exports: default

// Module 14579 (BountiesModalTimer)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import ButtonConstants from "ButtonConstants" /* 5286 */;
import inlineStyles from "inlineStyles" /* 7909 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const ReanimatedRexport = ReanimatedRexport2;
let _require, importDefault, set, set2;

let hasOwnProperty;
let items;
let metroRequire;
let num;
let obj2;
let obj3;
let obj4;
let size;
let size1;
let View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let c7 = "#2ECC71";
let result = (ButtonConstants.SMALL_BUTTON_HEIGHT - 4) / 2;
const metroImportAll = result;
let closure_9 = 2 * Math.PI * result;
const Easing = ReanimatedRexport2.Easing;
let closure_10 = Easing.bezier(0.15, 0.21, 0.58, 1);
const Easing2 = ReanimatedRexport2.Easing;
let closure_11 = Easing2.bezier(0.61, 0, 0.58, 1);
const Easing3 = ReanimatedRexport2.Easing;
let closure_12 = Easing3.bezier(0.42, 0, 0.58, 1);
let closure_13 = ReanimatedRexport.createAnimatedComponent(inlineStyles.Circle);
let createStyles = createStyles_mod;
let obj = { progress: size, ring: obj2, trackPath: obj3, countdownText: obj4, checkmarkLayer: { position: "absolute", inset: 6, alignItems: "center", justifyContent: "center" }, checkmarkBackground: size1, checkmarkIcon: { width: 20, height: 20 } };
size = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, width: ButtonConstants.SMALL_BUTTON_HEIGHT, height: ButtonConstants.SMALL_BUTTON_HEIGHT };
createStyles = createStyles.createStyles;
obj2 = { position: "absolute", transform: items };
items = [{ rotate: "-90deg" }];
obj3 = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
obj4 = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, lineHeight: num };
num = undefined;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
size1 = { width: 20, height: 20, backgroundColor: "#2ECC71", borderRadius: nativeDefault.radii.round };
let closure_14 = createStyles(obj);
const __initData = { code: "function BountiesModalTimerTsx1(){const{PROGRESS_CIRCUMFERENCE,animatedProgress}=this.__closure;return{strokeDashoffset:PROGRESS_CIRCUMFERENCE-PROGRESS_CIRCUMFERENCE*animatedProgress.get()};}" };
const __initData2 = { code: "function BountiesModalTimerTsx2(){const{checkmarkBackgroundScale}=this.__closure;return{transform:[{scale:checkmarkBackgroundScale.get()}]};}" };
const __initData3 = { code: "function BountiesModalTimerTsx3(){const{checkmarkScale}=this.__closure;return{transform:[{scale:checkmarkScale.get()}]};}" };
size = size_mod;
let result1 = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalTimer.tsx");

export default function BountiesModalTimer(arg0) {
  let CheckmarkSmallBoldIcon;
  let c1;
  let closure_0;
  let easing;
  let easing2;
  let easing3;
  let isCompleted;
  let items2;
  let items3;
  let items4;
  let items5;
  let num2;
  let obj13;
  let obj15;
  let remainingSeconds;
  let totalSeconds;
  ({ isCompleted, totalSeconds, remainingSeconds } = arg0);
  _require = undefined;
  importDefault = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let ref;
  const tmp = closure_14();
  let tmp2 = isCompleted;
  if (!tmp2) {
    tmp2 = remainingSeconds <= 0;
  }
  _require = tmp2;
  importDefault = 0;
  const bound = Math.max(1, Math.ceil(remainingSeconds));
  if (isCompleted) {
    importDefault = 1;
    num2 = 1;
  } else {
    num2 = 0;
    if (totalSeconds > 0) {
      const diff = 1 - remainingSeconds / totalSeconds;
      importDefault = diff;
      num2 = diff;
    }
  }
  let tmp5 = _require;
  let obj = require("ReanimatedRexport");
  sharedValue = obj.useSharedValue(num2);
  let obj2 = require("ReanimatedRexport");
  sharedValue1 = obj2.useSharedValue(0);
  let obj3 = require("ReanimatedRexport");
  sharedValue2 = obj3.useSharedValue(0);
  let items = [sharedValue, num2];
  const effect = sharedValue1.useEffect(() => {
    set = sharedValue.set;
    const obj = timing;
    const result = set(obj.withTiming(c1, { duration: 500 }, "animate-always"));
  }, items);
  ref = sharedValue1.useRef(false);
  const items1 = [tmp2, sharedValue1, sharedValue2];
  const effect1 = sharedValue1.useEffect(() => {
    let tmp5;
    const current = ref.current;
    ref.current = true;
    if (closure_0) {
      if (current) {
        const withSequence = ReanimatedRexport2.withSequence;
        ReanimatedRexport2;
        const obj2 = { duration: 267, easing };
        const obj = timing;
        const obj4 = { duration: 233, easing: easing2 };
        const withTimingResult = obj.withTiming(1.65, obj2);
        const obj3 = timing;
        const result = set(withSequence(withTimingResult, obj3.withTiming(1, obj4)));
        set2 = sharedValue2.set;
        const withDelay = ReanimatedRexport2.withDelay;
        ReanimatedRexport2;
        const withSequence2 = ReanimatedRexport2.withSequence;
        ReanimatedRexport2;
        const obj6 = { duration: 167, easing: easing3 };
        const obj5 = timing;
        const obj8 = { duration: 333, easing: easing3 };
        const withTimingResult1 = obj5.withTiming(1.25, obj6);
        const obj7 = timing;
        set2(withDelay(167, withSequence2(withTimingResult1, obj7.withTiming(1, obj8))));
      } else {
        const result1 = set(1);
        const result2 = sharedValue2.set(1);
      }
      tmp5 = tmp9;
    } else {
      const result3 = set(0);
      const result4 = sharedValue2.set(0);
    }
    return tmp5;
  }, items1);
  let obj4 = require("ReanimatedRexport");
  class U {
    constructor() {
      const obj = { strokeDashoffset: closure_9 - closure_9 * sharedValue.get() };
      return obj;
    }
  }
  let obj5 = { PROGRESS_CIRCUMFERENCE: strokeDasharray, animatedProgress: sharedValue };
  U.__closure = obj5;
  U.__workletHash = 12964700773124;
  U.__initData = __initData;
  const animatedProps = obj4.useAnimatedProps(U);
  let obj6 = require("ReanimatedRexport");
  const fn = function x() {
    let items;
    const obj = { transform: items };
    items = [{ scale: sharedValue1.get() }];
    ({ scale: sharedValue1.get() });
    return obj;
  };
  fn.__closure = { checkmarkBackgroundScale: sharedValue1 };
  fn.__workletHash = 10834015407160;
  fn.__initData = __initData2;
  const animatedStyle = obj6.useAnimatedStyle(fn);
  let obj7 = require("ReanimatedRexport");
  class G {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ scale: sharedValue2.get() }];
      ({ scale: sharedValue2.get() });
      return obj;
    }
  }
  G.__closure = { checkmarkScale: sharedValue2 };
  G.__workletHash = 7510845920441;
  G.__initData = __initData3;
  let obj8 = { style: tmp.progress, children: items3 };
  const animatedStyle1 = obj7.useAnimatedStyle(G);
  size = { height: require("ButtonConstants").SMALL_BUTTON_HEIGHT, width: require("ButtonConstants").SMALL_BUTTON_HEIGHT, style: tmp.ring, children: items2 };
  const tmp18 = require("inlineStyles");
  const tmp19 = ref;
  const obj9 = { cx: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2, cy: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2, r, fill: "none", stroke: tmp.trackPath.color, strokeWidth: 4 };
  const Circle = require("inlineStyles").Circle;
  items2 = [ref(Circle, obj9), ];
  const obj10 = { cx: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2, cy: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2, r, fill: "none", stroke, strokeWidth: 4, strokeDasharray, strokeLinecap: "round", animatedProps };
  items2[1] = ref(closure_13, obj10);
  items3 = [closure_6(tmp18, size), , , ];
  let tmp19Result = !tmp2;
  const tmp15 = closure_6;
  if (tmp19Result) {
    const obj11 = { variant: "text-sm/semibold", style: tmp.countdownText, maxFontSizeMultiplier: 1, children: bound };
    tmp19Result = tmp19(tmp5(tmp6[10]).Text, obj11);
  }
  items3[1] = tmp19Result;
  const obj12 = { style: items4, children: tmp19(sharedValue2, obj13) };
  items4 = [tmp.checkmarkLayer, animatedStyle];
  obj13 = { style: tmp.checkmarkBackground };
  View = tmp17(tmp6[4]).View;
  items3[2] = tmp19(View, obj12);
  const obj14 = { style: items5, children: tmp19(CheckmarkSmallBoldIcon, obj15) };
  items5 = [tmp.checkmarkLayer, animatedStyle1];
  const View2 = tmp17(tmp6[4]).View;
  obj15 = { size: "custom", color: require("native").colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, style: tmp.checkmarkIcon };
  CheckmarkSmallBoldIcon = tmp5(tmp6[11]).CheckmarkSmallBoldIcon;
  items3[3] = tmp19(View2, obj14);
  return tmp15(sharedValue2, obj8);
};
