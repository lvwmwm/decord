// Module ID: 15588
// Function ID: 118950
// Name: QuestActivityButtonInner
// Dependencies: []

// Module 15588 (QuestActivityButtonInner)
function QuestActivityButtonInner(quest) {
  let userStatus;
  quest = quest.quest;
  const arg1 = quest;
  let dependencyMap;
  let importAllResult;
  let View;
  let closure_5;
  let closure_6;
  let closure_7;
  let QuestVariants;
  let obj = arg1(dependencyMap[11]);
  let obj1 = arg1(dependencyMap[12]);
  const items = [closure_5];
  const stateFromStores = obj1.useStateFromStores(items, () => sharedValue.useReducedMotion);
  const importDefault = stateFromStores;
  const items1 = [, ];
  ({ id: arr2[0], userStatus } = quest);
  let enrolledAt;
  if (null != userStatus) {
    enrolledAt = userStatus.enrolledAt;
  }
  items1[1] = enrolledAt;
  const result = 2 * Math.PI * 14.3;
  dependencyMap = result;
  let enrolledAt1;
  const callback = importAllResult.useCallback(() => {
    const userStatus = quest.userStatus;
    let enrolledAt;
    if (null != userStatus) {
      enrolledAt = userStatus.enrolledAt;
    }
    if (null == enrolledAt) {
      let obj = { questId: quest.id };
      stateFromStores(result[13]).pushLazy(quest(result[15])(result[14], result.paths), obj, closure_16);
      const obj3 = stateFromStores(result[13]);
    } else {
      obj = stateFromStores(result[16]);
      obj = { questId: quest.id };
      obj.openLazy(quest(result[15])(result[17], result.paths), "QuestProgressBottomSheet", obj);
    }
  }, items1);
  if (null != quest) {
    const userStatus2 = quest.userStatus;
    if (null != userStatus2) {
      enrolledAt1 = userStatus2.enrolledAt;
    }
  }
  let num = 0;
  if (null != enrolledAt1) {
    num = obj.useQuestCompletionDetails(quest).completedRatio;
  }
  importAllResult = num;
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
  View = tmp8;
  let obj2 = arg1(dependencyMap[7]);
  const sharedValue = obj2.useSharedValue(num);
  closure_5 = sharedValue;
  let obj3 = arg1(dependencyMap[7]);
  let num2 = 0;
  if (tmp8) {
    num2 = 1;
  }
  const sharedValue1 = obj3.useSharedValue(num2);
  closure_6 = sharedValue1;
  const ref = importAllResult.useRef(null);
  closure_7 = ref;
  const tmp13 = callback3();
  QuestVariants = tmp13;
  let obj4 = arg1(dependencyMap[7]);
  class I {
    constructor() {
      obj = { shadowOpacity: closure_6.get() };
      return obj;
    }
  }
  I.__closure = { glowOpacity: sharedValue1 };
  I.__workletHash = 4459043613798;
  I.__initData = closure_14;
  const items2 = [tmp13.confetti];
  const animatedStyle = obj4.useAnimatedStyle(I);
  const memo = importAllResult.useMemo(() => {
    const obj = {};
    const merged = Object.assign(tmp13.confetti);
    obj["width"] = closure_11;
    obj["height"] = closure_11;
    const items = [{ scale: 1.6 }];
    obj["transform"] = items;
    return obj;
  }, items2);
  let obj5 = arg1(dependencyMap[7]);
  class E {
    constructor() {
      obj = { strokeDashoffset: closure_2 - closure_2 * closure_5.get() };
      return obj;
    }
  }
  E.__closure = { circumference: result, animatedProgress: sharedValue };
  E.__workletHash = 3373122453897;
  E.__initData = closure_15;
  const items3 = [sharedValue, num, stateFromStores];
  const animatedProps = obj5.useAnimatedProps(E);
  const effect = importAllResult.useEffect(() => {
    let obj = quest(result[18]);
    obj = {};
    let num = 500;
    if (stateFromStores) {
      num = 0;
    }
    obj.duration = num;
    const result = sharedValue.set(obj.withTiming(num, obj));
    return () => {
      callback(closure_2[7]).cancelAnimation(closure_5);
    };
  }, items3);
  const items4 = [sharedValue1, tmp8, stateFromStores];
  const effect1 = importAllResult.useEffect(() => {
    if (!stateFromStores) {
      if (tmp8) {
        let obj = quest(result[18]);
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
  const items5 = [, , ];
  ({ container: arr6[0], completionGlow: arr6[1] } = tmp13);
  items5[2] = animatedStyle;
  obj = { style: memo, pointerEvents: "none" };
  obj1 = { ref, source: arg1(dependencyMap[20]), autoPlay: false, loop: false };
  obj.children = callback(importDefault(dependencyMap[19]), obj1);
  const items6 = [callback(View, obj), , , ];
  obj2 = { style: tmp13.buttonWrapper };
  obj3 = {};
  const tmp19 = importDefault(dependencyMap[19]);
  obj3.icon = importDefault(dependencyMap[22]);
  obj3.onPress = callback;
  const intl = arg1(dependencyMap[23]).intl;
  obj3.accessibilityLabel = intl.string(arg1(dependencyMap[23]).t.JALI2K);
  obj2.children = callback(importDefault(dependencyMap[21]), obj3);
  items6[1] = callback(View, obj2);
  obj4 = { pointerEvents: "none", style: tmp13.canvas };
  obj5 = { height: closure_11, width: closure_11 };
  const obj6 = { stroke: importDefault(dependencyMap[10]).unsafe_rawColors.OPACITY_32, strokeDasharray: result };
  obj5.children = callback(arg1(dependencyMap[8]).Circle, obj6);
  obj4.children = callback(arg1(dependencyMap[8]).Svg, obj5);
  items6[2] = callback(View, obj4);
  const obj7 = { pointerEvents: "none", style: tmp13.canvas };
  const obj8 = { height: closure_11, width: closure_11, children: callback(closure_12, { stroke: tmp13.progressPath.color, strokeDasharray: result, animatedProps }) };
  obj7.children = callback(arg1(dependencyMap[8]).Svg, obj8);
  items6[3] = callback(View, obj7);
  obj.children = items6;
  return callback2(importDefault(dependencyMap[7]).View, obj);
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const QuestVariants = arg1(dependencyMap[5]).QuestVariants;
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[6]));
let closure_11 = 32;
const tmp2 = arg1(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]).createAnimatedComponent(arg1(dependencyMap[8]).Circle);
const importDefaultResult = importDefault(dependencyMap[7]);
let obj = { container: { "Bool(false)": "isArray", "Bool(false)": "warn", "Bool(false)": "textAlign", "Bool(false)": "r", "Bool(false)": "isArray" }, completionGlow: obj, canvas: { position: "absolute", transform: items } };
obj = { "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, shadowOffset: { "Null": -536870861, "Null": -299892737 } };
const items = [{ rotate: "-90deg" }];
const obj3 = arg1(dependencyMap[9]);
obj.progressPath = { color: importDefault(dependencyMap[10]).colors.STATUS_POSITIVE };
obj.buttonWrapper = { "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001513553934550236, "Bool(false)": -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011309568024553222, "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000166880539428337 };
obj.confetti = { position: "absolute" };
let closure_13 = obj3.createStyles(obj);
let closure_14 = { code: "function QuestActivityButtonTsx1(){const{glowOpacity}=this.__closure;return{shadowOpacity:glowOpacity.get()};}" };
let closure_15 = { code: "function QuestActivityButtonTsx2(){const{circumference,animatedProgress}=this.__closure;return{strokeDashoffset:circumference-circumference*animatedProgress.get()};}" };
let closure_16 = "QUEST_ACTIVITY_UNENROLLED_MODAL_KEY";
const obj1 = { color: importDefault(dependencyMap[10]).colors.STATUS_POSITIVE };
const memoResult = importAllResult.memo(function QuestActivityButton(applicationId) {
  applicationId = applicationId.applicationId;
  const arg1 = applicationId;
  let obj = arg1(dependencyMap[12]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => quests.quests);
  const importDefault = stateFromStores;
  const items1 = [closure_7];
  const stateFromStores1 = arg1(dependencyMap[12]).useStateFromStores(items1, () => closure_7.getState().autoEnroll);
  const dependencyMap = stateFromStores1;
  const items2 = [stateFromStores, applicationId];
  const memo = importAllResult.useMemo(() => {
    const eligibleQuestsForApplicationId = applicationId(stateFromStores1[24]).getEligibleQuestsForApplicationId(stateFromStores, applicationId, true);
    return eligibleQuestsForApplicationId.find((config) => {
      const features = config.config.features;
      return features.includes(constants.MOBILE_ACTIVITY_QUEST);
    });
  }, items2);
  const obj2 = arg1(dependencyMap[12]);
  const items3 = [closure_7];
  const stateFromStores2 = arg1(dependencyMap[12]).useStateFromStores(items3, () => {
    let id;
    if (null != memo) {
      id = memo.id;
    }
    return closure_7.isDismissed(id);
  });
  const View = stateFromStores2;
  const items4 = [memo, stateFromStores1, stateFromStores2];
  const effect = importAllResult.useEffect(() => {
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
      obj.pushLazy(applicationId(stateFromStores1[15])(stateFromStores1[14], stateFromStores1.paths), obj, closure_16);
    }
  }, items4);
  let tmp6 = null;
  if (null != memo) {
    obj = { quest: memo };
    tmp6 = callback(QuestActivityButtonInner, obj);
  }
  return tmp6;
});
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/frames/panel/native/QuestActivityButton.tsx");

export default memoResult;
