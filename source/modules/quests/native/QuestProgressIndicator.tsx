// Module ID: 14027
// Function ID: 107381
// Name: QUEST_PROGRESS_DIAMETER_BY_SIZE
// Dependencies: [31, 27, 4122, 33, 3991, 8018, 4130, 689, 566, 4131, 4660, 1212, 5453, 14028, 10922, 2]

// Module 14027 (QUEST_PROGRESS_DIAMETER_BY_SIZE)
import result from "result";
import importDefaultResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult1 from "module_3991";

let closure_10;
let closure_3;
let closure_4;
let closure_5;
let closure_9;
({ useMemo: closure_3, useEffect: closure_4, useRef: closure_5 } = result);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = ["#666777", "#535564"];
let closure_12 = require("module_3991").createAnimatedComponent(require("inlineStyles").Circle);
let obj = { "x-sm": 40, sm: 64, md: 70, "md-lg": 100, lg: 128 };
let closure_14 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  obj = { wrapper: { position: "relative" }, container: { position: "relative", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1 }, completionGlow: obj, canvas: { transform: items } };
  obj = { shadowOffset: { width: 0, height: 0 }, shadowRadius: 20, shadowOpacity: 0, elevation: 4, shadowColor: "#30C77399" };
  items = [{ rotate: "-90deg" }];
  obj = { position: "absolute", height: 0.78 * arg0, width: 0.78 * arg0, borderRadius: importDefault(689).radii.round, overflow: "hidden" };
  obj.imageContainer = obj;
  obj.progressPath = { color: importDefault(689).colors.STATUS_POSITIVE };
  obj.confetti = { position: "absolute", pointerEvents: "none" };
  const obj2 = { backgroundColor: importDefault(689).colors.CARD_BACKGROUND_DEFAULT, position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 2 };
  obj.opacityMask = obj2;
  return obj;
});
let closure_15 = { code: "function QuestProgressIndicatorTsx1(){const{glowOpacity}=this.__closure;return{shadowOpacity:glowOpacity.get()};}" };
let closure_16 = { code: "function QuestProgressIndicatorTsx2(){const{circumference,animatedProgress}=this.__closure;return{strokeDashoffset:circumference-circumference*animatedProgress.get()};}" };
let closure_17 = { code: "function QuestProgressIndicatorTsx3(){const{underlayOpacity,styles}=this.__closure;return{opacity:underlayOpacity.get(),...styles.opacityMask};}" };
const memoResult = importDefaultResult.memo(function QuestProgressIndicator(loading) {
  let accessibilityLabel;
  let onPress;
  let progress;
  let quest;
  let size;
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
  let callback;
  let callback2;
  let callback3;
  let importDefaultResult;
  let sharedValue;
  let sharedValue1;
  let callback4;
  let sharedValue2;
  let dependencyMap;
  let obj = progress(stateFromStores[8]);
  let items = [sharedValue1];
  stateFromStores = obj.useStateFromStores(items, () => sharedValue1.useReducedMotion);
  const tmp2 = { "x-sm": 3, sm: 3, md: 3, "md-lg": 4, lg: 6 }[size];
  callback = tmp3;
  const tmp4 = { "x-sm": 1.6, sm: 1, md: 1.4, "md-lg": 1.5, lg: 1.6 }[size];
  callback2 = tmp4;
  const diff = tmp3 / 2 - tmp2 / 2;
  let result = 2 * Math.PI * diff;
  callback3 = result;
  const tmp7 = callback5(obj[size]);
  importDefaultResult = tmp7;
  let obj1 = progress(stateFromStores[4]);
  sharedValue = obj1.useSharedValue(progress);
  let obj2 = progress(stateFromStores[4]);
  let num = 0;
  if (flag) {
    num = 0.7;
  }
  sharedValue1 = obj2.useSharedValue(num);
  const userStatus = quest.userStatus;
  let completedAt;
  if (null != userStatus) {
    completedAt = userStatus.completedAt;
  }
  callback4 = tmp11;
  let obj3 = progress(stateFromStores[4]);
  let num2 = 0;
  if (null != completedAt) {
    num2 = 1;
  }
  sharedValue2 = obj3.useSharedValue(num2);
  let obj4 = progress(stateFromStores[4]);
  class D {
    constructor() {
      obj = { shadowOpacity: useSharedValue.get() };
      return obj;
    }
  }
  D.__closure = { glowOpacity: sharedValue2 };
  D.__workletHash = 17183837725505;
  D.__initData = closure_15;
  const animatedStyle = obj4.useAnimatedStyle(D);
  let obj5 = progress(stateFromStores[4]);
  class R {
    constructor() {
      obj = { strokeDashoffset: c5 - c5 * c7.get() };
      return obj;
    }
  }
  R.__closure = { circumference: result, animatedProgress: sharedValue };
  R.__workletHash = 17281152506254;
  R.__initData = closure_16;
  const animatedProps = obj5.useAnimatedProps(R);
  let obj6 = progress(stateFromStores[4]);
  class E {
    constructor() {
      obj = { opacity: c8.get() };
      merged = Object.assign(c6.opacityMask);
      return obj;
    }
  }
  E.__closure = { underlayOpacity: sharedValue1, styles: tmp7 };
  E.__workletHash = 4427598698568;
  E.__initData = closure_17;
  const items1 = [sharedValue, progress, stateFromStores];
  const animatedStyle1 = obj6.useAnimatedStyle(E);
  callback2(() => {
    let obj = progress(stateFromStores[9]);
    obj = {};
    let num = 500;
    if (stateFromStores) {
      num = 0;
    }
    obj.duration = num;
    const result = sharedValue.set(obj.withTiming(progress, obj));
    return () => {
      progress(stateFromStores[4]).cancelAnimation(outer1_7);
    };
  }, items1);
  const items2 = [sharedValue1, flag];
  callback2(() => {
    let num = 0;
    if (flag) {
      num = 0.7;
    }
    const result = sharedValue1.set(progress(stateFromStores[9]).withTiming(num, { duration: 500 }));
    return () => {
      progress(stateFromStores[4]).cancelAnimation(outer1_8);
    };
  }, items2);
  const tmp18 = callback3(null);
  dependencyMap = tmp18;
  const items3 = [tmp7.confetti, tmp4, obj[size]];
  const items4 = [null != completedAt, sharedValue2, stateFromStores];
  callback2(() => {
    if (!stateFromStores) {
      if (c9) {
        let obj = progress(stateFromStores[9]);
        obj = { duration: 500 };
        const result = sharedValue2.set(obj.withTiming(1, obj));
        const current = _undefined2.current;
        if (null != current) {
          current.play();
        }
      }
    }
    const result1 = sharedValue2.set(0);
    const current2 = _undefined2.current;
    if (null != current2) {
      current2.reset();
    }
  }, items4);
  if (null == onPress) {
    let PressableOpacity = importDefaultResult.Fragment;
  } else {
    PressableOpacity = progress(stateFromStores[10]).PressableOpacity;
  }
  const rounded = Math.round(100 * progress);
  obj = {};
  if (null == onPress) {
    obj = {};
  } else {
    obj = { onPress };
  }
  let merged = Object.assign(obj);
  obj1 = { style: null, accessible: true, accessibilityRole: "progressbar" };
  const items5 = [, , ];
  ({ wrapper: arr6[0], completionGlow: arr6[1] } = tmp7);
  items5[2] = animatedStyle;
  obj1.style = items5;
  let formatToPlainStringResult = accessibilityLabel;
  if (null == accessibilityLabel) {
    const intl = progress(stateFromStores[11]).intl;
    obj2 = { percent: rounded };
    formatToPlainStringResult = intl.formatToPlainString(progress(stateFromStores[11]).t.Gj8Jqn, obj2);
  }
  obj1.accessibilityLabel = formatToPlainStringResult;
  obj3 = { min: 0, max: 100, now: rounded };
  obj1.accessibilityValue = obj3;
  const items6 = [callback4(flag(stateFromStores[4]).View, { style: animatedStyle1 }), ];
  obj4 = { style: tmp7.container };
  obj5 = { height: tmp3, width: tmp3, style: tmp7.canvas };
  obj6 = {};
  const obj7 = { id: "underlayGradient", x1: "0", y1: "0.5", x2: "1", y2: "0.5" };
  const items7 = [callback4(progress(stateFromStores[5]).Stop, { offset: "0", stopColor: 31 }), callback4(progress(stateFromStores[5]).Stop, { offset: "1", stopColor: 27 })];
  obj7.children = items7;
  obj6.children = sharedValue2(progress(stateFromStores[5]).LinearGradient, obj7);
  const items8 = [callback4(progress(stateFromStores[5]).Defs, obj6), callback4(progress(stateFromStores[5]).Circle, { cx: obj[size] / 2, cy: obj[size] / 2, r: diff, fill: "none", stroke: "url(#underlayGradient)", strokeWidth: tmp2 }), callback4(closure_12, { cx: obj[size] / 2, cy: obj[size] / 2, r: diff, fill: "none", stroke: tmp7.progressPath.color, strokeWidth: tmp2, strokeDasharray: result, strokeLinecap: "round", animatedProps })];
  obj5.children = items8;
  const items9 = [sharedValue2(progress(stateFromStores[5]).Svg, obj5), , ];
  let tmp33 = null;
  if (flag2) {
    const obj12 = { ref: tmp18, style: tmp19, source: progress(stateFromStores[13]), autoPlay: false, loop: false };
    tmp33 = callback4(flag(stateFromStores[12]), obj12);
    const tmp37 = flag(stateFromStores[12]);
  }
  items9[1] = tmp33;
  const obj10 = { cx: obj[size] / 2, cy: obj[size] / 2, r: diff, fill: "none", stroke: "url(#underlayGradient)", strokeWidth: tmp2 };
  const obj11 = { cx: obj[size] / 2, cy: obj[size] / 2, r: diff, fill: "none", stroke: tmp7.progressPath.color, strokeWidth: tmp2, strokeDasharray: result, strokeLinecap: "round", animatedProps };
  const obj8 = { offset: "0", stopColor: 31 };
  const obj9 = { offset: "1", stopColor: 27 };
  tmp19 = callback(() => {
    let obj = {};
    const merged = Object.assign(_undefined.confetti);
    obj["width"] = c3;
    obj["height"] = c3;
    obj = { scale: c4 };
    const items = [obj];
    obj["transform"] = items;
    return obj;
  }, items3);
  const tmp25 = callback4;
  const tmp27 = sharedValue2;
  const tmp31 = sharedValue2;
  const tmp32 = sharedValue;
  items9[2] = callback4(sharedValue, { style: tmp7.imageContainer, children: callback4(flag(stateFromStores[14]), obj14) });
  obj4.children = items9;
  items6[1] = tmp31(tmp32, obj4);
  obj1.children = items6;
  obj["children"] = tmp27(flag(stateFromStores[4]).View, obj1);
  return tmp25(PressableOpacity, obj);
});
result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/quests/native/QuestProgressIndicator.tsx");

export default memoResult;
export const QUEST_PROGRESS_DIAMETER_BY_SIZE = obj;
