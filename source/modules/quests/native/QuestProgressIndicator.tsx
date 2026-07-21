// Module ID: 13903
// Function ID: 105153
// Name: QUEST_PROGRESS_DIAMETER_BY_SIZE
// Dependencies: []

// Module 13903 (QUEST_PROGRESS_DIAMETER_BY_SIZE)
const _module = require(dependencyMap[0]);
({ useMemo: closure_3, useEffect: closure_4, useRef: closure_5 } = _module);
const importDefaultResult = importDefault(dependencyMap[0]);
const View = require(dependencyMap[1]).View;
let closure_8 = importDefault(dependencyMap[2]);
const _module1 = require(dependencyMap[3]);
({ jsx: closure_9, jsxs: closure_10 } = _module1);
let closure_11 = ["<string:1900042517>", "isArray"];
let closure_12 = importDefault(dependencyMap[4]).createAnimatedComponent(require(dependencyMap[5]).Circle);
const obj = {};
const _module2 = require(dependencyMap[6]);
let closure_14 = _module2.createStyles((arg0) => {
  let obj = { wrapper: { position: "relative" }, container: {}, completionGlow: { shadowOffset: { bhk: -536870861, bic: -299892737 } }, canvas: { transform: items } };
  const items = [{ rotate: "-90deg" }];
  obj = { position: "absolute", height: 0.78 * arg0, width: 0.78 * arg0, borderRadius: importDefault(dependencyMap[7]).radii.round, overflow: "hidden" };
  obj.imageContainer = obj;
  obj = { color: importDefault(dependencyMap[7]).colors.STATUS_POSITIVE };
  obj.progressPath = obj;
  obj.confetti = {};
  const obj1 = { GUILD_TOP_READ_CHANNELS: 0, PARTY: null, paddingVertical: 67, identityErrorMessage: 95, CHANNEL_DETAILS_TOP_MARGIN: 67, OPTION_7: 0, marginVertical: 0, backgroundColor: importDefault(dependencyMap[7]).colors.CARD_BACKGROUND_DEFAULT };
  obj.opacityMask = obj1;
  return obj;
});
let closure_15 = { code: "function QuestProgressIndicatorTsx1(){const{glowOpacity}=this.__closure;return{shadowOpacity:glowOpacity.get()};}" };
let closure_16 = { code: "function QuestProgressIndicatorTsx2(){const{circumference,animatedProgress}=this.__closure;return{strokeDashoffset:circumference-circumference*animatedProgress.get()};}" };
let closure_17 = { code: "function QuestProgressIndicatorTsx3(){const{underlayOpacity,styles}=this.__closure;return{opacity:underlayOpacity.get(),...styles.opacityMask};}" };
const importDefaultResult1 = importDefault(dependencyMap[4]);
const _module3 = require(dependencyMap[15]);
const result = _module3.fileFinishedImporting("modules/quests/native/QuestProgressIndicator.tsx");

export default importDefaultResult.memo(function QuestProgressIndicator(loading) {
  let accessibilityLabel;
  let onPress;
  let progress;
  let quest;
  let size;
  ({ quest, size, progress } = loading);
  const require = progress;
  let flag = loading.loading;
  if (flag === undefined) {
    flag = false;
  }
  const importDefault = flag;
  let flag2 = loading.hasConfetti;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ onPress, accessibilityLabel } = loading);
  let dependencyMap;
  let tmp3;
  let tmp4;
  let result;
  let importDefaultResult;
  let View;
  let closure_8;
  let tmp11;
  let sharedValue2;
  let closure_11;
  let obj = require(dependencyMap[8]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => sharedValue1.useReducedMotion);
  dependencyMap = stateFromStores;
  const tmp2 = { 1656663739: "takenAt", 1565683566: "handleJoinThreadVoice", 1634754160: "Boolean", -1446817374: "isArray", 1384223330: "IncomingFriendRequestRow" }[size];
  tmp3 = obj[size];
  tmp4 = {}[size];
  const diff = tmp3 / 2 - tmp2 / 2;
  result = 2 * Math.PI * diff;
  const tmp7 = callback(tmp3);
  importDefaultResult = tmp7;
  let obj1 = require(dependencyMap[4]);
  const sharedValue = obj1.useSharedValue(progress);
  View = sharedValue;
  let obj2 = require(dependencyMap[4]);
  let num = 0;
  if (flag) {
    num = 0.7;
  }
  const sharedValue1 = obj2.useSharedValue(num);
  closure_8 = sharedValue1;
  const userStatus = quest.userStatus;
  let completedAt;
  if (null != userStatus) {
    completedAt = userStatus.completedAt;
  }
  tmp11 = null != completedAt;
  let obj3 = require(dependencyMap[4]);
  let num2 = 0;
  if (tmp11) {
    num2 = 1;
  }
  sharedValue2 = obj3.useSharedValue(num2);
  let obj4 = require(dependencyMap[4]);
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
  let obj5 = require(dependencyMap[4]);
  class R {
    constructor() {
      obj = { strokeDashoffset: closure_5 - closure_5 * closure_7.get() };
      return obj;
    }
  }
  R.__closure = { circumference: result, animatedProgress: sharedValue };
  R.__workletHash = 17281152506254;
  R.__initData = closure_16;
  const animatedProps = obj5.useAnimatedProps(R);
  let obj6 = require(dependencyMap[4]);
  class E {
    constructor() {
      obj = { opacity: closure_8.get() };
      merged = Object.assign(closure_6.opacityMask);
      return obj;
    }
  }
  E.__closure = { underlayOpacity: sharedValue1, styles: tmp7 };
  E.__workletHash = 4427598698568;
  E.__initData = closure_17;
  const items1 = [sharedValue, progress, stateFromStores];
  const animatedStyle1 = obj6.useAnimatedStyle(E);
  tmp4(() => {
    let obj = progress(stateFromStores[9]);
    obj = {};
    let num = 500;
    if (stateFromStores) {
      num = 0;
    }
    obj.duration = num;
    const result = sharedValue.set(obj.withTiming(progress, obj));
    return () => {
      callback(closure_2[4]).cancelAnimation(closure_7);
    };
  }, items1);
  const items2 = [sharedValue1, flag];
  tmp4(() => {
    let num = 0;
    if (flag) {
      num = 0.7;
    }
    const result = sharedValue1.set(progress(stateFromStores[9]).withTiming(num, { duration: 500 }));
    return () => {
      callback(closure_2[4]).cancelAnimation(closure_8);
    };
  }, items2);
  const tmp18 = result(null);
  closure_11 = tmp18;
  const items3 = [tmp7.confetti, tmp4, tmp3];
  const items4 = [tmp11, sharedValue2, stateFromStores];
  tmp4(() => {
    if (!stateFromStores) {
      if (tmp11) {
        let obj = progress(stateFromStores[9]);
        obj = { duration: 500 };
        const result = sharedValue2.set(obj.withTiming(1, obj));
        const current = tmp18.current;
        if (null != current) {
          current.play();
        }
      }
    }
    const result1 = sharedValue2.set(0);
    const current2 = tmp18.current;
    if (null != current2) {
      current2.reset();
    }
  }, items4);
  if (null == onPress) {
    let PressableOpacity = importDefaultResult.Fragment;
  } else {
    PressableOpacity = require(dependencyMap[10]).PressableOpacity;
  }
  const rounded = Math.round(100 * progress);
  obj = {};
  if (null == onPress) {
    obj = {};
  } else {
    obj = { onPress };
  }
  const merged = Object.assign(obj);
  obj1 = { style: items5 };
  const items5 = [, , ];
  ({ wrapper: arr6[0], completionGlow: arr6[1] } = tmp7);
  items5[2] = animatedStyle;
  let formatToPlainStringResult = accessibilityLabel;
  if (null == accessibilityLabel) {
    const intl = require(dependencyMap[11]).intl;
    obj2 = { percent: rounded };
    formatToPlainStringResult = intl.formatToPlainString(require(dependencyMap[11]).t.Gj8Jqn, obj2);
  }
  obj1.accessibilityLabel = formatToPlainStringResult;
  obj1.accessibilityValue = { now: rounded };
  const items6 = [tmp11(importDefault(dependencyMap[4]).View, { style: animatedStyle1 }), ];
  obj3 = { style: tmp7.container };
  obj4 = { height: tmp3, width: tmp3, style: tmp7.canvas };
  obj5 = {};
  obj6 = { type: "/assets/design/components/Icon/native/redesign/generated/images", body: 24, 9223372036854775807: 24, 0: null, 0: "ffb75c82f97e39285286ef89f1767a3c" };
  const items7 = [tmp11(require(dependencyMap[5]).Stop, { offset: "0", stopColor: closure_11[0] }), tmp11(require(dependencyMap[5]).Stop, { offset: "1", stopColor: closure_11[1] })];
  obj6.children = items7;
  obj5.children = sharedValue2(require(dependencyMap[5]).LinearGradient, obj6);
  const items8 = [tmp11(require(dependencyMap[5]).Defs, obj5), tmp11(require(dependencyMap[5]).Circle, { cx: tmp3 / 2, cy: tmp3 / 2, r: diff, fill: "none", stroke: "url(#underlayGradient)", strokeWidth: tmp2 }), tmp11(closure_12, { cx: tmp3 / 2, cy: tmp3 / 2, r: diff, fill: "none", stroke: tmp7.progressPath.color, strokeWidth: tmp2, strokeDasharray: result, strokeLinecap: "round", animatedProps })];
  obj4.children = items8;
  const items9 = [sharedValue2(require(dependencyMap[5]).Svg, obj4), , ];
  let tmp33 = null;
  if (flag2) {
    const obj11 = { ref: tmp18, style: tmp19, source: require(dependencyMap[13]), autoPlay: false, loop: false };
    tmp33 = tmp11(importDefault(dependencyMap[12]), obj11);
    const tmp37 = importDefault(dependencyMap[12]);
  }
  items9[1] = tmp33;
  const obj10 = { cx: tmp3 / 2, cy: tmp3 / 2, r: diff, fill: "none", stroke: tmp7.progressPath.color, strokeWidth: tmp2, strokeDasharray: result, strokeLinecap: "round", animatedProps };
  const obj7 = { offset: "0", stopColor: closure_11[0] };
  const obj8 = { offset: "1", stopColor: closure_11[1] };
  const obj9 = { cx: tmp3 / 2, cy: tmp3 / 2, r: diff, fill: "none", stroke: "url(#underlayGradient)", strokeWidth: tmp2 };
  const tmp19 = tmp3(() => {
    let obj = {};
    const merged = Object.assign(tmp7.confetti);
    obj["width"] = tmp3;
    obj["height"] = tmp3;
    obj = { scale: tmp4 };
    const items = [obj];
    obj["transform"] = items;
    return obj;
  }, items3);
  const tmp25 = tmp11;
  const tmp27 = sharedValue2;
  const tmp31 = sharedValue2;
  const tmp32 = View;
  items9[2] = tmp11(View, { style: tmp7.imageContainer, children: tmp11(importDefault(dependencyMap[14]), obj13) });
  obj3.children = items9;
  items6[1] = tmp31(tmp32, obj3);
  obj1.children = items6;
  obj["children"] = tmp27(importDefault(dependencyMap[4]).View, obj1);
  return tmp25(PressableOpacity, obj);
});
export const QUEST_PROGRESS_DIAMETER_BY_SIZE = obj;
