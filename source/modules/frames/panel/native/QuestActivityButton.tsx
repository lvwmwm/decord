// Module ID: 15760
// Function ID: 121488
// Name: QuestActivityButtonInner
// Dependencies: [31, 27, 4122, 6941, 15761, 4976, 33, 3991, 8063, 4130, 689, 10493, 566, 4337, 15762, 1934, 4098, 15763, 4131, 5453, 14078, 15764, 13949, 1212, 10505, 2]

// Module 15760 (QuestActivityButtonInner)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { QuestVariants } from "QuestsExperimentLocations";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_3991";

let closure_10;
let closure_9;
const require = arg1;
function QuestActivityButtonInner(quest) {
  let userStatus;
  quest = quest.quest;
  let dependencyMap;
  let num;
  let c4;
  let sharedValue;
  let sharedValue1;
  let ref;
  let c8;
  let obj = quest(10493);
  let obj1 = quest(566);
  let items = [sharedValue];
  const stateFromStores = obj1.useStateFromStores(items, () => sharedValue.useReducedMotion);
  const items1 = [, ];
  ({ id: arr2[0], userStatus } = quest);
  let enrolledAt;
  if (null != userStatus) {
    enrolledAt = userStatus.enrolledAt;
  }
  items1[1] = enrolledAt;
  let result = 2 * Math.PI * 14.3;
  dependencyMap = result;
  let enrolledAt1;
  const callback = num.useCallback(() => {
    const userStatus = quest.userStatus;
    let enrolledAt;
    if (null != userStatus) {
      enrolledAt = userStatus.enrolledAt;
    }
    if (null == enrolledAt) {
      let obj = { questId: quest.id };
      stateFromStores(_undefined[13]).pushLazy(quest(_undefined[15])(_undefined[14], _undefined.paths), obj, outer1_16);
      const obj3 = stateFromStores(_undefined[13]);
    } else {
      obj = stateFromStores(_undefined[16]);
      obj = { questId: quest.id };
      obj.openLazy(quest(_undefined[15])(_undefined[17], _undefined.paths), "QuestProgressBottomSheet", obj);
    }
  }, items1);
  if (null != quest) {
    const userStatus2 = quest.userStatus;
    if (null != userStatus2) {
      enrolledAt1 = userStatus2.enrolledAt;
    }
  }
  num = 0;
  if (null != enrolledAt1) {
    num = obj.useQuestCompletionDetails(quest).completedRatio;
  }
  let enrolledAt2;
  if (null != quest) {
    const userStatus3 = quest.userStatus;
    if (null != userStatus3) {
      enrolledAt2 = userStatus3.enrolledAt;
    }
  }
  let tmp8 = null != enrolledAt2;
  if (tmp8) {
    let completedAt;
    if (null != quest) {
      const userStatus4 = quest.userStatus;
      if (null != userStatus4) {
        completedAt = userStatus4.completedAt;
      }
    }
    tmp8 = null != completedAt;
  }
  c4 = tmp8;
  let obj2 = quest(3991);
  sharedValue = obj2.useSharedValue(num);
  let obj3 = quest(3991);
  let num2 = 0;
  if (tmp8) {
    num2 = 1;
  }
  sharedValue1 = obj3.useSharedValue(num2);
  ref = num.useRef(null);
  const tmp13 = callback3();
  c8 = tmp13;
  let obj4 = quest(3991);
  class I {
    constructor() {
      obj = { shadowOpacity: c6.get() };
      return obj;
    }
  }
  I.__closure = { glowOpacity: sharedValue1 };
  I.__workletHash = 4459043613798;
  I.__initData = closure_14;
  const items2 = [tmp13.confetti];
  const animatedStyle = obj4.useAnimatedStyle(I);
  const memo = num.useMemo(() => {
    const obj = {};
    const merged = Object.assign(_undefined2.confetti);
    obj["width"] = outer1_11;
    obj["height"] = outer1_11;
    const items = [{ scale: 1.6 }];
    obj["transform"] = items;
    return obj;
  }, items2);
  let obj5 = quest(3991);
  class E {
    constructor() {
      obj = { strokeDashoffset: c2 - c2 * c5.get() };
      return obj;
    }
  }
  E.__closure = { circumference: result, animatedProgress: sharedValue };
  E.__workletHash = 3373122453897;
  E.__initData = closure_15;
  const items3 = [sharedValue, num, stateFromStores];
  const animatedProps = obj5.useAnimatedProps(E);
  const effect = num.useEffect(() => {
    let obj = quest(_undefined[18]);
    obj = {};
    let num = 500;
    if (stateFromStores) {
      num = 0;
    }
    obj.duration = num;
    const result = sharedValue.set(obj.withTiming(num, obj));
    return () => {
      quest(table[7]).cancelAnimation(outer1_5);
    };
  }, items3);
  const items4 = [sharedValue1, tmp8, stateFromStores];
  const effect1 = num.useEffect(() => {
    if (!stateFromStores) {
      if (c4) {
        let obj = quest(_undefined[18]);
        obj = { duration: 500 };
        const result = sharedValue1.set(obj.withTiming(1, obj));
        const current = ref.current;
        if (null != current) {
          current.play();
        }
      }
    }
    const result1 = sharedValue1.set(0);
    const current2 = ref.current;
    if (null != current2) {
      current2.reset();
    }
  }, items4);
  obj = { style: items5, pointerEvents: "box-none" };
  items5 = [, , ];
  ({ container: arr6[0], completionGlow: arr6[1] } = tmp13);
  items5[2] = animatedStyle;
  obj = { style: memo, pointerEvents: "none" };
  obj1 = { ref, source: quest(14078), autoPlay: false, loop: false };
  obj.children = callback(stateFromStores(5453), obj1);
  const items6 = [callback(c4, obj), , , ];
  obj2 = { style: tmp13.buttonWrapper };
  obj3 = {};
  const tmp19 = stateFromStores(5453);
  obj3.icon = stateFromStores(13949);
  obj3.onPress = callback;
  const intl = quest(1212).intl;
  obj3.accessibilityLabel = intl.string(quest(1212).t.JALI2K);
  obj2.children = callback(stateFromStores(15764), obj3);
  items6[1] = callback(c4, obj2);
  obj4 = { pointerEvents: "none", style: tmp13.canvas };
  obj5 = { height: c11, width: c11 };
  const obj6 = { cx: 16, cy: 16, r: 14.3, fill: "none", stroke: stateFromStores(689).unsafe_rawColors.OPACITY_32, strokeWidth: 3.4, strokeDasharray: result };
  obj5.children = callback(quest(8063).Circle, obj6);
  obj4.children = callback(quest(8063).Svg, obj5);
  items6[2] = callback(c4, obj4);
  const obj7 = { pointerEvents: "none", style: tmp13.canvas };
  const obj8 = { height: c11, width: c11 };
  const obj9 = { cx: 16, cy: 16, r: 14.3, fill: "none", stroke: tmp13.progressPath.color, strokeWidth: 3.4, strokeDasharray: result, animatedProps };
  obj8.children = callback(closure_12, obj9);
  obj7.children = callback(quest(8063).Svg, obj8);
  items6[3] = callback(c4, obj7);
  obj.children = items6;
  return callback2(stateFromStores(3991).View, obj);
}
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let c11 = 32;
let closure_12 = require("module_3991").createAnimatedComponent(require("inlineStyles").Circle);
obj = { container: { position: "relative", width: 32, height: 32, justifyContent: "center", alignItems: "center" }, completionGlow: obj, canvas: { position: "absolute", transform: items } };
obj = { shadowOffset: { width: 0, height: 0 }, shadowRadius: 12, shadowOpacity: 0, elevation: 4, shadowColor: "#30C77399" };
items = [{ rotate: "-90deg" }];
obj.progressPath = { color: require("_createForOfIteratorHelperLoose").colors.STATUS_POSITIVE };
obj.buttonWrapper = { position: "absolute", borderRadius: 16, overflow: "hidden" };
obj.confetti = { position: "absolute" };
let closure_13 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_14 = { code: "function QuestActivityButtonTsx1(){const{glowOpacity}=this.__closure;return{shadowOpacity:glowOpacity.get()};}" };
let closure_15 = { code: "function QuestActivityButtonTsx2(){const{circumference,animatedProgress}=this.__closure;return{strokeDashoffset:circumference-circumference*animatedProgress.get()};}" };
const QUEST_ACTIVITY_UNENROLLED_MODAL_KEY = "QUEST_ACTIVITY_UNENROLLED_MODAL_KEY";
let obj1 = { color: require("_createForOfIteratorHelperLoose").colors.STATUS_POSITIVE };
const memoResult = importAllResult.memo(function QuestActivityButton(applicationId) {
  applicationId = applicationId.applicationId;
  let obj = applicationId(stateFromStores1[12]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.quests);
  const items1 = [closure_7];
  stateFromStores1 = applicationId(stateFromStores1[12]).useStateFromStores(items1, () => outer1_7.getState().autoEnroll);
  const items2 = [stateFromStores, applicationId];
  memo = memo.useMemo(() => {
    const eligibleQuestsForApplicationId = applicationId(stateFromStores1[24]).getEligibleQuestsForApplicationId(stateFromStores, applicationId, true);
    return eligibleQuestsForApplicationId.find((config) => {
      const features = config.config.features;
      return features.includes(outer2_8.MOBILE_ACTIVITY_QUEST);
    });
  }, items2);
  const obj2 = applicationId(stateFromStores1[12]);
  const items3 = [closure_7];
  const stateFromStores2 = applicationId(stateFromStores1[12]).useStateFromStores(items3, () => {
    let id;
    if (null != memo) {
      id = memo.id;
    }
    return outer1_7.isDismissed(id);
  });
  const items4 = [memo, stateFromStores1, stateFromStores2];
  const effect = memo.useEffect(() => {
    let tmp = null == memo;
    if (!tmp) {
      const userStatus = memo.userStatus;
      let enrolledAt;
      if (null != userStatus) {
        enrolledAt = userStatus.enrolledAt;
      }
      tmp = null != enrolledAt;
    }
    if (!tmp) {
      tmp = stateFromStores1;
    }
    if (!tmp) {
      tmp = stateFromStores2;
    }
    if (!tmp) {
      let obj = stateFromStores(stateFromStores1[13]);
      obj = { questId: memo.id };
      obj.pushLazy(applicationId(stateFromStores1[15])(stateFromStores1[14], stateFromStores1.paths), obj, outer1_16);
    }
  }, items4);
  let tmp6 = null;
  if (null != memo) {
    obj = { quest: memo };
    tmp6 = callback(QuestActivityButtonInner, obj);
  }
  return tmp6;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/frames/panel/native/QuestActivityButton.tsx");

export default memoResult;
