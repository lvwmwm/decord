// Module ID: 17253
// Function ID: 17254
// Name: QuestProgressIndicator
// Dependencies: [19, 17, 5142, 21, 1652, 8155, 5141, 575, 504, 5377, 7106, 1113, 5741, 17199, 14823, 2]

// Module 17253 (QuestProgressIndicator)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import timing_timing from "timing/timing" /* 5377 */;
import inlineStyles from "inlineStyles" /* 8155 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import Fragment from "Fragment" /* 21 */;
import module_1652 from "module_1652" /* 1652 */;
import createStyles from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

let set;

let c10;
let c3;
let c9;
let closure_4;
let hasOwnProperty;
let react = react_mod;
({ useMemo: c3, useEffect: closure_4, useRef: hasOwnProperty } = react);
react = react_mod;
let View = react_native.View;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = ["#666777", "#535564"];
let closure_12 = module_1652.createAnimatedComponent(inlineStyles.Circle);
const QUEST_PROGRESS_DIAMETER_BY_SIZE = { "x-sm": 40, sm: 64, md: 70, "md-lg": 100, lg: 128 };
let closure_14 = createStyles.createStyles((arg0) => {
  let items;
  let obj2;
  let rect;
  const obj = { wrapper: { position: "relative" }, container: { position: "relative", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1 }, completionGlow: { shadowOffset: { width: 0, height: 0 }, shadowRadius: 20, shadowOpacity: 0, elevation: 4, shadowColor: "#30C77399" }, canvas: obj2, imageContainer: size, progressPath: { color: nativeDefault.colors.STATUS_POSITIVE }, confetti: { position: "absolute", pointerEvents: "none" }, opacityMask: rect };
  obj2 = { transform: items };
  items = [{ rotate: "-90deg" }];
  size = { position: "absolute", height: 0.78 * arg0, width: 0.78 * arg0, borderRadius: nativeDefault.radii.round, overflow: "hidden" };
  ({ color: nativeDefault.colors.STATUS_POSITIVE });
  rect = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 2 };
  return obj;
});
let closure_15 = { code: "(function QuestProgressIndicatorTsx1(){let[glowOpacity]=this.__closure;return{shadowOpacity:glowOpacity.get()};})" };
let closure_16 = { code: "(function QuestProgressIndicatorTsx2(){let[circumference,animatedProgress]=this.__closure;return{strokeDashoffset:circumference-circumference*animatedProgress.get()};})" };
let closure_17 = { code: "(function QuestProgressIndicatorTsx3(){let[underlayOpacity,styles]=this.__closure;return{opacity:underlayOpacity.get(),...styles.opacityMask};})" };
const memoResult = react.memo(function QuestProgressIndicator(loading) {
  let LinearGradient;
  let PressableOpacity;
  let accessibilityLabel;
  let formatToPlainStringResult;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let obj3;
  let obj5;
  let obj9;
  let onPress;
  let paused;
  let progress;
  let quest;
  let size2;
  let tmp18;
  let tmp19;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp27;
  let tmp28;
  let tmp29;
  let withAnimation;
  ({ quest, size, progress } = loading);
  let flag = loading.loading;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = loading.hasConfetti;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ onPress, accessibilityLabel } = loading);
  let stateFromStores;
  let sharedValue1;
  let useReducedMotion;
  let sharedValue2;
  let ref;
  let tmp = progress;
  let tmp2 = stateFromStores;
  ({ withAnimation, paused } = loading);
  let obj = progress(stateFromStores[8]);
  let items = [useReducedMotion];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp4 = { "x-sm": 3, sm: 3, md: 3, "md-lg": 4, lg: 6 }[size];
  let closure_3 = tmp5;
  const tmp6 = { "x-sm": 1.6, sm: 1, md: 1.4, "md-lg": 1.5, lg: 1.6 }[size];
  const scale = tmp6;
  let result = tmp5 / 2;
  let result1 = tmp4 / 2;
  const result2 = 2 * Math.PI;
  const tmp10 = closure_14(obj[size]);
  const confetti = tmp10;
  let obj2 = progress(stateFromStores[4]);
  const sharedValue = obj2.useSharedValue(progress);
  let num = 0;
  const useSharedValue = progress(stateFromStores[4]).useSharedValue;
  progress(stateFromStores[4]);
  if (flag) {
    num = 0.7;
  }
  sharedValue1 = useSharedValue(num);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  useReducedMotion = tmp15;
  let num2 = 0;
  const useSharedValue2 = tmp(tmp2[4]).useSharedValue;
  tmp(tmp2[4]);
  if (null != completedAt) {
    num2 = 1;
  }
  sharedValue2 = useSharedValue2(num2);
  const items1 = [closure_15, sharedValue2];
  let c0;
  [tmp18, tmp19] = items1;
  const diff = result - result1;
  const result3 = result2 * diff;
  const tmpResult4 = tmp(tmp2[4]);
  class QuestProgressIndicatorTsx1 {
    constructor() {
      const obj = { shadowOpacity: _undefined.get() };
      return obj;
    }
  }
  const items2 = [tmp19];
  QuestProgressIndicatorTsx1.__closure = items2;
  QuestProgressIndicatorTsx1.__workletHash = 3121805679544;
  QuestProgressIndicatorTsx1.__initData = tmp18;
  const animatedStyle = tmpResult4.useAnimatedStyle(QuestProgressIndicatorTsx1);
  const items3 = [closure_16, result3, sharedValue];
  c0 = undefined;
  let c1;
  [tmp23, tmp24, tmp25] = items3;
  const tmpResult5 = tmp(tmp2[4]);
  class QuestProgressIndicatorTsx2 {
    constructor() {
      const obj = { strokeDashoffset: c0 - c0 * _undefined.get() };
      return obj;
    }
  }
  const items4 = [tmp24, tmp25];
  QuestProgressIndicatorTsx2.__closure = items4;
  QuestProgressIndicatorTsx2.__workletHash = 3809633407287;
  QuestProgressIndicatorTsx2.__initData = tmp23;
  const animatedProps = tmpResult5.useAnimatedProps(QuestProgressIndicatorTsx2);
  const items5 = [closure_17, sharedValue1, tmp10];
  c0 = undefined;
  c1 = undefined;
  [tmp27, tmp28, tmp29] = items5;
  const tmpResult6 = tmp(tmp2[4]);
  class QuestProgressIndicatorTsx3 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      const merged = Object.assign(_undefined2.opacityMask);
      return obj;
    }
  }
  const items6 = [tmp28, tmp29];
  QuestProgressIndicatorTsx3.__closure = items6;
  QuestProgressIndicatorTsx3.__workletHash = 14807344640177;
  QuestProgressIndicatorTsx3.__initData = tmp27;
  const items7 = [sharedValue, progress, stateFromStores];
  const animatedStyle1 = tmpResult6.useAnimatedStyle(QuestProgressIndicatorTsx3);
  scale(() => {
    let num = 500;
    set = sharedValue.set;
    const withTiming = timing_timing.withTiming;
    timing_timing;
    const tmp3 = progress;
    if (stateFromStores) {
      num = 0;
    }
    const result = set(withTiming(tmp3, { duration: num }));
    return () => {
      const obj = progress(stateFromStores[4]);
      obj.cancelAnimation(sharedValue);
    };
  }, items7);
  const items8 = [sharedValue1, flag];
  scale(() => {
    let num = 0;
    set = sharedValue1.set;
    const withTiming = timing_timing.withTiming;
    timing_timing;
    if (flag) {
      num = 0.7;
    }
    const result = set(withTiming(num, { duration: 500 }));
    return () => {
      const obj = progress(stateFromStores[4]);
      obj.cancelAnimation(sharedValue1);
    };
  }, items8);
  const tmp33 = confetti(null);
  ref = tmp33;
  const items9 = [tmp10.confetti, tmp6, tmp5];
  const items10 = [null != completedAt, sharedValue2, stateFromStores];
  const tmp34 = closure_3(() => {
    let items;
    const obj = { width: height, height, transform: items };
    const merged = Object.assign(confetti.confetti);
    items = [];
    const obj2 = { scale };
    items[0] = obj2;
    return obj;
  }, items9);
  scale(() => {
    const tmp = stateFromStores;
    if (!tmp) {
      const tmp2 = useReducedMotion;
      if (tmp2) {
        set = sharedValue2.set;
        const obj = timing_timing;
        const result = set(obj.withTiming(1, { duration: 500 }));
        const current = ref.current;
        if (current != null) {
          current.play();
        }
      }
    }
    const result1 = sharedValue2.set(0);
    const current2 = ref.current;
    if (current2 != null) {
      current2.reset();
    }
  }, items10);
  if (null == onPress) {
    PressableOpacity = sharedValue.Fragment;
  } else {
    PressableOpacity = tmp(tmp2[10]).PressableOpacity;
  }
  const rounded = Math.round(100 * progress);
  if (null == onPress) {
    obj3 = {};
  } else {
    obj3 = { onPress };
  }
  const obj4 = { children: ref(View, obj5) };
  let merged = Object.assign(obj3);
  obj5 = { style: items11, accessible: true, accessibilityRole: "progressbar", accessibilityLabel: formatToPlainStringResult, accessibilityValue: { min: 0, max: 100, now: rounded }, children: items12 };
  items11 = [, , ];
  ({ wrapper: arr12[0], completionGlow: arr12[1] } = tmp10);
  items11[2] = animatedStyle;
  formatToPlainStringResult = accessibilityLabel;
  View = flag(tmp2[4]).View;
  if (accessibilityLabel == null) {
    const intl = tmp(tmp2[11]).intl;
    const obj6 = { percent: rounded };
    formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[11]).t.Gj8Jqn, obj6);
  }
  items12 = [sharedValue2(flag(tmp2[4]).View, { style: animatedStyle1 }), ];
  const size1 = { height: tmp5, width: tmp5, style: tmp10.canvas, children: items14 };
  const obj7 = { style: tmp10.container, children: items15 };
  const Svg = tmp(tmp2[5]).Svg;
  const obj8 = { children: ref(LinearGradient, obj9) };
  const Defs = tmp(tmp2[5]).Defs;
  obj9 = { id: "underlayGradient", x1: "0", y1: "0.5", x2: "1", y2: "0.5", children: items13 };
  LinearGradient = tmp(tmp2[5]).LinearGradient;
  items13 = [, ];
  const obj10 = { offset: "0", stopColor: closure_11[0] };
  items13[0] = sharedValue2(tmp(tmp2[5]).Stop, obj10);
  const obj11 = { offset: "1", stopColor: closure_11[1] };
  items13[1] = sharedValue2(tmp(tmp2[5]).Stop, obj11);
  items14 = [sharedValue2(Defs, obj8), , ];
  const obj12 = { cx: obj[size] / 2, cy: obj[size] / 2, r: diff, fill: "none", stroke: "url(#underlayGradient)", strokeWidth: tmp4 };
  items14[1] = sharedValue2(tmp(tmp2[5]).Circle, obj12);
  const obj13 = { cx: obj[size] / 2, cy: obj[size] / 2, r: diff, fill: "none", stroke: tmp10.progressPath.color, strokeWidth: tmp4, strokeDasharray: result3, strokeLinecap: "round", animatedProps };
  items14[2] = sharedValue2(closure_12, obj13);
  items15 = [ref(Svg, size1), , ];
  let tmp38Result = null;
  if (flag2) {
    const obj14 = { ref: tmp33, style: tmp34, source: tmp(tmp2[13]), autoPlay: false, loop: false };
    const tmp41Result = flag(tmp2[12]);
    tmp38Result = tmp38(tmp41Result, obj14);
  }
  items15[1] = tmp38Result;
  const obj15 = { style: tmp10.imageContainer, children: sharedValue2(flag(tmp2[14]), size2) };
  size2 = { quest, height: 0.78 * tmp5, width: 0.78 * tmp5, withAnimation, paused, accessibilityLabelPrefix: accessibilityLabel };
  items15[2] = sharedValue2(sharedValue1, obj15);
  items12[1] = ref(sharedValue1, obj7);
  return sharedValue2(PressableOpacity, obj4);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestProgressIndicator.tsx");

export default memoResult;
export const COMPLETION_GLOW_SHADOW_RADIUS = 20;
export const COMPLETION_GLOW_CLEARANCE = 40;
export { QUEST_PROGRESS_DIAMETER_BY_SIZE };
