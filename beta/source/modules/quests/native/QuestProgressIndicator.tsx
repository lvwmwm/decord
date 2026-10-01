// Module ID: 14662
// Function ID: 14663
// Name: QuestProgressIndicator
// Dependencies: [19, 17, 4825, 21, 4566, 7909, 4836, 576, 504, 4837, 5435, 1115, 5841, 14663, 10745, 2]

// Module 14662 (QuestProgressIndicator)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import timing from "timing" /* 4837 */;
import inlineStyles from "inlineStyles" /* 7909 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import createStyles from "createStyles" /* 4836 */;
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
let closure_12 = ReanimatedRexport.createAnimatedComponent(inlineStyles.Circle);
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
const __initData = { code: "function QuestProgressIndicatorTsx1(){const{glowOpacity}=this.__closure;return{shadowOpacity:glowOpacity.get()};}" };
const __initData2 = { code: "function QuestProgressIndicatorTsx2(){const{circumference,animatedProgress}=this.__closure;return{strokeDashoffset:circumference-circumference*animatedProgress.get()};}" };
const __initData3 = { code: "function QuestProgressIndicatorTsx3(){const{underlayOpacity,styles}=this.__closure;return{opacity:underlayOpacity.get(),...styles.opacityMask};}" };
const memoResult = react.memo(function QuestProgressIndicator(loading) {
  let LinearGradient;
  let PressableOpacity;
  let accessibilityLabel;
  let closure_6;
  let formatToPlainStringResult;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj3;
  let obj5;
  let obj9;
  let onPress;
  let progress;
  let quest;
  let size2;
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
  let closure_9;
  let sharedValue2;
  let ref;
  let tmp = progress;
  let tmp2 = stateFromStores;
  const withAnimation = loading.withAnimation;
  let obj = progress(stateFromStores[8]);
  let items = [sharedValue1];
  stateFromStores = obj.useStateFromStores(items, () => sharedValue1.useReducedMotion);
  const tmp4 = { "x-sm": 3, sm: 3, md: 3, "md-lg": 4, lg: 6 }[size];
  let closure_3 = tmp5;
  const tmp6 = { "x-sm": 1.6, sm: 1, md: 1.4, "md-lg": 1.5, lg: 1.6 }[size];
  const scale = tmp6;
  const diff = tmp5 / 2 - tmp4 / 2;
  let result = 2 * Math.PI * diff;
  let c5 = result;
  const tmp9 = closure_14(obj[size]);
  react = tmp9;
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
  closure_9 = tmp14;
  let num2 = 0;
  const useSharedValue2 = tmp(tmp2[4]).useSharedValue;
  tmp(tmp2[4]);
  if (null != completedAt) {
    num2 = 1;
  }
  sharedValue2 = useSharedValue2(num2);
  const tmpResult4 = tmp(tmp2[4]);
  class T {
    constructor() {
      const obj = { shadowOpacity: sharedValue2.get() };
      return obj;
    }
  }
  T.__closure = { glowOpacity: sharedValue2 };
  T.__workletHash = 17183837725505;
  T.__initData = __initData;
  const animatedStyle = tmpResult4.useAnimatedStyle(T);
  const tmpResult5 = tmp(tmp2[4]);
  class D {
    constructor() {
      const obj = { strokeDashoffset: c5 - c5 * sharedValue.get() };
      return obj;
    }
  }
  D.__closure = { circumference: result, animatedProgress: sharedValue };
  D.__workletHash = 17281152506254;
  D.__initData = __initData2;
  const animatedProps = tmpResult5.useAnimatedProps(D);
  const tmpResult6 = tmp(tmp2[4]);
  class E {
    constructor() {
      const obj = { opacity: sharedValue1.get() };
      const merged = Object.assign(closure_6.opacityMask);
      return obj;
    }
  }
  E.__closure = { underlayOpacity: sharedValue1, styles: tmp9 };
  E.__workletHash = 4427598698568;
  E.__initData = __initData3;
  const items1 = [sharedValue, progress, stateFromStores];
  const animatedStyle1 = tmpResult6.useAnimatedStyle(E);
  scale(() => {
    let num = 500;
    set = sharedValue.set;
    const withTiming = timing.withTiming;
    timing;
    const tmp3 = progress;
    if (stateFromStores) {
      num = 0;
    }
    const result = set(withTiming(tmp3, { duration: num }));
    return () => {
      const obj = progress(stateFromStores[4]);
      obj.cancelAnimation(sharedValue);
    };
  }, items1);
  const items2 = [sharedValue1, flag];
  scale(() => {
    let num = 0;
    set = sharedValue1.set;
    const withTiming = timing.withTiming;
    timing;
    if (flag) {
      num = 0.7;
    }
    const result = set(withTiming(num, { duration: 500 }));
    return () => {
      const obj = progress(stateFromStores[4]);
      obj.cancelAnimation(sharedValue1);
    };
  }, items2);
  const tmp22 = c5(null);
  ref = tmp22;
  const items3 = [tmp9.confetti, tmp6, tmp5];
  const items4 = [null != completedAt, sharedValue2, stateFromStores];
  const tmp23 = closure_3(() => {
    let items;
    const obj = { width: height, height, transform: items };
    const merged = Object.assign(closure_6.confetti);
    items = [];
    const obj2 = { scale };
    items[0] = obj2;
    return obj;
  }, items3);
  scale(() => {
    const tmp = stateFromStores;
    if (!tmp) {
      const tmp2 = closure_9;
      if (tmp2) {
        set = sharedValue2.set;
        const obj = timing;
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
  }, items4);
  if (null == onPress) {
    PressableOpacity = react.Fragment;
  } else {
    PressableOpacity = tmp(tmp2[10]).PressableOpacity;
  }
  const rounded = Math.round(100 * progress);
  if (null == onPress) {
    obj3 = {};
  } else {
    obj3 = { onPress };
  }
  const obj4 = { children: sharedValue2(View, obj5) };
  let merged = Object.assign(obj3);
  obj5 = { style: items5, accessible: true, accessibilityRole: "progressbar", accessibilityLabel: formatToPlainStringResult, accessibilityValue: { min: 0, max: 100, now: rounded }, children: items6 };
  items5 = [, , ];
  ({ wrapper: arr6[0], completionGlow: arr6[1] } = tmp9);
  items5[2] = animatedStyle;
  formatToPlainStringResult = accessibilityLabel;
  View = flag(tmp2[4]).View;
  if (accessibilityLabel == null) {
    const intl = tmp(tmp2[11]).intl;
    const obj6 = { percent: rounded };
    formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[11]).t.Gj8Jqn, obj6);
  }
  items6 = [closure_9(flag(tmp2[4]).View, { style: animatedStyle1 }), ];
  const size1 = { height: tmp5, width: tmp5, style: tmp9.canvas, children: items8 };
  const obj7 = { style: tmp9.container, children: items9 };
  const Svg = tmp(tmp2[5]).Svg;
  const obj8 = { children: sharedValue2(LinearGradient, obj9) };
  const Defs = tmp(tmp2[5]).Defs;
  obj9 = { id: "underlayGradient", x1: "0", y1: "0.5", x2: "1", y2: "0.5", children: items7 };
  LinearGradient = tmp(tmp2[5]).LinearGradient;
  items7 = [, ];
  const obj10 = { offset: "0", stopColor: ref[0] };
  items7[0] = closure_9(tmp(tmp2[5]).Stop, obj10);
  const obj11 = { offset: "1", stopColor: ref[1] };
  items7[1] = closure_9(tmp(tmp2[5]).Stop, obj11);
  items8 = [closure_9(Defs, obj8), , ];
  const obj12 = { cx: obj[size] / 2, cy: obj[size] / 2, r: diff, fill: "none", stroke: "url(#underlayGradient)", strokeWidth: tmp4 };
  items8[1] = closure_9(tmp(tmp2[5]).Circle, obj12);
  const obj13 = { cx: obj[size] / 2, cy: obj[size] / 2, r: diff, fill: "none", stroke: tmp9.progressPath.color, strokeWidth: tmp4, strokeDasharray: result, strokeLinecap: "round", animatedProps };
  items8[2] = closure_9(closure_12, obj13);
  items9 = [sharedValue2(Svg, size1), , ];
  let tmp27Result = null;
  if (flag2) {
    const obj14 = { ref: tmp22, style: tmp23, source: tmp(tmp2[13]), autoPlay: false, loop: false };
    const tmp30Result = flag(tmp2[12]);
    tmp27Result = tmp27(tmp30Result, obj14);
  }
  items9[1] = tmp27Result;
  const obj15 = { style: tmp9.imageContainer, children: closure_9(flag(tmp2[14]), size2) };
  size2 = { quest, height: 0.78 * tmp5, width: 0.78 * tmp5, withAnimation, accessibilityLabelPrefix: accessibilityLabel };
  items9[2] = closure_9(sharedValue, obj15);
  items6[1] = sharedValue2(sharedValue, obj7);
  return closure_9(PressableOpacity, obj4);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestProgressIndicator.tsx");

export default memoResult;
export const COMPLETION_GLOW_SHADOW_RADIUS = 20;
export const COMPLETION_GLOW_CLEARANCE = 40;
export { QUEST_PROGRESS_DIAMETER_BY_SIZE };
