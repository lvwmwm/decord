// Module ID: 19504
// Function ID: 19505
// Name: QuestActivityButton
// Dependencies: [19, 17, 5141, 7922, 19505, 6836, 21, 1652, 8101, 5140, 575, 9772, 504, 6799, 19506, 2118, 5374, 19507, 5370, 5745, 17358, 19508, 14954, 1113, 14922, 2]

// Module 19504 (QuestActivityButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import timing_timing from "timing/timing" /* 5370 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import QuestConstants from "QuestConstants" /* 6836 */;
import inlineStyles from "inlineStyles" /* 8101 */;
import QuestMatchingUtils from "QuestMatchingUtils" /* 14922 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import QuestStore from "QuestStore" /* 7922 */;
import UnenrolledActivityQuestStore from "UnenrolledActivityQuestStore" /* 19505 */;
import Fragment from "Fragment" /* 21 */;
import module_1652 from "module_1652" /* 1652 */;
import createStyles from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

let set;

let c10;
let c9;
let items;
let obj2;
let obj3;
function QuestActivityButtonInner(quest) {
  let Circle;
  let Svg;
  let Svg2;
  let closure_3;
  let intl;
  let items10;
  let items9;
  let obj10;
  let obj12;
  let obj6;
  let obj8;
  let size1;
  let tmp16;
  let tmp17;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp27;
  let tmp28;
  let userStatus;
  quest = quest.quest;
  let num;
  react = undefined;
  let sharedValue;
  let sharedValue1;
  let ref;
  let confetti;
  let tmp = quest;
  let tmp2 = num;
  let obj = quest(num[11]);
  const completedRatio = obj.useQuestCompletionDetails(quest).completedRatio;
  let obj2 = quest(num[12]);
  let items = [sharedValue1];
  const stateFromStores = obj2.useStateFromStores(items, () => sharedValue1.useReducedMotion);
  let obj3 = react;
  const items1 = [, ];
  ({ id: arr2[0], userStatus } = quest);
  let enrolledAt;
  const useCallback = react.useCallback;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  items1[1] = enrolledAt;
  let enrolledAt1;
  const callback = useCallback(() => {
    const userStatus = quest.userStatus;
    let enrolledAt;
    if (userStatus != null) {
      enrolledAt = userStatus.enrolledAt;
    }
    if (null == enrolledAt) {
      const obj2 = { questId: quest.id };
      const obj3 = ModalActionCreatorsDefault;
      obj3.pushLazy(asyncRequire(19506, dependencyMap.paths), obj2, QUEST_ACTIVITY_UNENROLLED_MODAL_KEY);
    } else {
      const obj4 = { questId: quest.id };
      const obj = ActionSheetActionCreatorsDefault;
      obj.openLazy(asyncRequire(19507, dependencyMap.paths), "QuestProgressBottomSheet", obj4);
    }
  }, items1);
  let result = 2 * Math.PI;
  if (quest != null) {
    const userStatus2 = quest.userStatus;
    if (userStatus2 != null) {
      enrolledAt1 = userStatus2.enrolledAt;
    }
  }
  num = 0;
  if (null != enrolledAt1) {
    num = completedRatio;
  }
  let enrolledAt2;
  if (quest != null) {
    const userStatus3 = quest.userStatus;
    if (userStatus3 != null) {
      enrolledAt2 = userStatus3.enrolledAt;
    }
  }
  let tmp9 = null != enrolledAt2;
  if (tmp9) {
    let completedAt;
    if (quest != null) {
      const userStatus4 = quest.userStatus;
      if (userStatus4 != null) {
        completedAt = userStatus4.completedAt;
      }
    }
    tmp9 = null != completedAt;
  }
  react = tmp9;
  const tmpResult = tmp(tmp2[7]);
  sharedValue = tmpResult.useSharedValue(num);
  let num2 = 0;
  const useSharedValue = tmp(tmp2[7]).useSharedValue;
  tmp(tmp2[7]);
  if (tmp9) {
    num2 = 1;
  }
  sharedValue1 = useSharedValue(num2);
  ref = obj3.useRef(null);
  const tmp15 = closure_13();
  confetti = tmp15;
  const items2 = [closure_14, sharedValue1];
  let c0;
  [tmp16, tmp17] = items2;
  let result1 = result * 14.3;
  const tmpResult5 = tmp(tmp2[7]);
  class QuestActivityButtonTsx1 {
    constructor() {
      const obj = { shadowOpacity: _undefined.get() };
      return obj;
    }
  }
  const items3 = [tmp17];
  QuestActivityButtonTsx1.__closure = items3;
  QuestActivityButtonTsx1.__workletHash = 8919500662559;
  QuestActivityButtonTsx1.__initData = tmp16;
  const items4 = [tmp15.confetti];
  const animatedStyle = tmpResult5.useAnimatedStyle(QuestActivityButtonTsx1);
  const memo = obj3.useMemo(() => {
    let items;
    const obj = { width: height, height, transform: items };
    const merged = Object.assign(confetti.confetti);
    items = [{ scale: 1.6 }];
    return obj;
  }, items4);
  const items5 = [closure_15, result1, sharedValue];
  c0 = undefined;
  let c1;
  [tmp21, tmp22, tmp23] = items5;
  const tmpResult6 = tmp(tmp2[7]);
  class QuestActivityButtonTsx2 {
    constructor() {
      const obj = { strokeDashoffset: c0 - c0 * _undefined.get() };
      return obj;
    }
  }
  const items6 = [tmp22, tmp23];
  QuestActivityButtonTsx2.__closure = items6;
  QuestActivityButtonTsx2.__workletHash = 1636159470064;
  QuestActivityButtonTsx2.__initData = tmp21;
  const items7 = [sharedValue, num, stateFromStores];
  const animatedProps = tmpResult6.useAnimatedProps(QuestActivityButtonTsx2);
  const effect = obj3.useEffect(() => {
    num = 500;
    set = sharedValue.set;
    const withTiming = timing_timing.withTiming;
    timing_timing;
    const tmp3 = num;
    if (stateFromStores) {
      num = 0;
    }
    const result = set(withTiming(tmp3, { duration: num }));
    return () => {
      const obj = quest(num[7]);
      obj.cancelAnimation(sharedValue);
    };
  }, items7);
  const items8 = [sharedValue1, tmp9, stateFromStores];
  const effect1 = obj3.useEffect(() => {
    const tmp = stateFromStores;
    if (!tmp) {
      const tmp2 = closure_3;
      if (tmp2) {
        set = sharedValue1.set;
        const obj = timing_timing;
        const result = set(obj.withTiming(1, { duration: 500 }));
        const current = ref.current;
        if (current != null) {
          current.play();
        }
      }
    }
    const result1 = sharedValue1.set(0);
    const current2 = ref.current;
    if (current2 != null) {
      current2.reset();
    }
  }, items8);
  let obj4 = { style: items9, pointerEvents: "box-none", children: items10 };
  items9 = [, , ];
  ({ container: arr10[0], completionGlow: arr10[1] } = tmp15);
  items9[2] = animatedStyle;
  const obj5 = { style: memo, pointerEvents: "none", children: closure_9(tmp27, obj6) };
  View = stateFromStores(tmp2[7]).View;
  obj6 = { ref, source: tmp(tmp2[20]), autoPlay: false, loop: false };
  tmp27 = stateFromStores(tmp2[19]);
  items10 = [closure_9(sharedValue, obj5), , , ];
  const obj7 = { style: tmp15.buttonWrapper, children: closure_9(tmp28, obj8) };
  obj8 = { icon: stateFromStores(tmp2[22]), onPress: callback, accessibilityLabel: intl.string(tmp(tmp2[23]).t.JALI2K) };
  tmp28 = stateFromStores(tmp2[21]);
  intl = tmp(tmp2[23]).intl;
  items10[1] = closure_9(sharedValue, obj7);
  const obj9 = { pointerEvents: "none", style: tmp15.canvas, children: closure_9(Svg, size) };
  size = { height: v32, width: v32, children: closure_9(Circle, obj10) };
  Svg = tmp(tmp2[8]).Svg;
  obj10 = { cx: 16, cy: 16, r: 14.3, fill: "none", stroke: stateFromStores(tmp2[10]).unsafe_rawColors.OPACITY_32, strokeWidth: 3.4, strokeDasharray: result1 };
  Circle = tmp(tmp2[8]).Circle;
  items10[2] = closure_9(sharedValue, obj9);
  const obj11 = { pointerEvents: "none", style: tmp15.canvas, children: closure_9(Svg2, size1) };
  size1 = { height: v32, width: v32, children: closure_9(closure_12, obj12) };
  obj12 = { cx: 16, cy: 16, r: 14.3, fill: "none", stroke: tmp15.progressPath.color, strokeWidth: 3.4, strokeDasharray: result1, animatedProps };
  Svg2 = tmp(tmp2[8]).Svg;
  items10[3] = closure_9(sharedValue, obj11);
  return closure_10(View, obj4);
}
let react = react_mod;
let View = react_native.View;
const QuestVariants = QuestConstants.QuestVariants;
({ jsx: c9, jsxs: c10 } = Fragment);
let c11 = 32;
let closure_12 = module_1652.createAnimatedComponent(inlineStyles.Circle);
let obj = { container: { position: "relative", width: 32, height: 32, justifyContent: "center", alignItems: "center" }, completionGlow: { shadowOffset: { width: 0, height: 0 }, shadowRadius: 12, shadowOpacity: 0, elevation: 4, shadowColor: "#30C77399" }, canvas: obj2, progressPath: obj3, buttonWrapper: { position: "absolute", borderRadius: 16, overflow: "hidden" }, confetti: { position: "absolute" } };
obj2 = { position: "absolute", transform: items };
items = [{ rotate: "-90deg" }];
obj3 = { color: nativeDefault.colors.STATUS_POSITIVE };
let closure_13 = createStyles.createStyles(obj);
let closure_14 = { code: "(function QuestActivityButtonTsx1(){let[glowOpacity]=this.__closure;return{shadowOpacity:glowOpacity.get()};})" };
let closure_15 = { code: "(function QuestActivityButtonTsx2(){let[circumference,animatedProgress]=this.__closure;return{strokeDashoffset:circumference-circumference*animatedProgress.get()};})" };
const QUEST_ACTIVITY_UNENROLLED_MODAL_KEY = "QUEST_ACTIVITY_UNENROLLED_MODAL_KEY";
const memoResult = react.memo(function QuestActivityButton(applicationId) {
  let quests;
  let state;
  applicationId = applicationId.applicationId;
  let stateFromStores1;
  let memo;
  let obj = applicationId(stateFromStores1[12]);
  const items = [QuestStore];
  const stateFromStores = obj.useStateFromStores(items, () => quests.quests);
  let obj2 = applicationId(stateFromStores1[12]);
  const items1 = [UnenrolledActivityQuestStore];
  stateFromStores1 = obj2.useStateFromStores(items1, () => state.getState().autoEnroll);
  const items2 = [stateFromStores, applicationId];
  memo = memo.useMemo(() => {
    const obj = QuestMatchingUtils;
    const eligibleQuestsForApplicationId = obj.getEligibleQuestsForApplicationId(stateFromStores, applicationId, true);
    return eligibleQuestsForApplicationId.find((config) => {
      const features = config.config.features;
      return features.includes(constants.MOBILE_ACTIVITY_QUEST);
    });
  }, items2);
  const items3 = [UnenrolledActivityQuestStore];
  const obj3 = applicationId(stateFromStores1[12]);
  const stateFromStores2 = obj3.useStateFromStores(items3, () => {
    let id;
    const isDismissed = UnenrolledActivityQuestStore.isDismissed;
    if (memo != null) {
      id = memo.id;
    }
    return isDismissed(id);
  });
  const items4 = [memo, stateFromStores1, stateFromStores2];
  const effect = memo.useEffect(() => {
    let tmp2 = null == memo;
    if (!tmp2) {
      const userStatus = tmp.userStatus;
      let enrolledAt;
      if (userStatus != null) {
        enrolledAt = userStatus.enrolledAt;
      }
      tmp2 = null != enrolledAt;
    }
    if (!tmp2) {
      tmp2 = stateFromStores1;
    }
    if (!tmp2) {
      tmp2 = stateFromStores2;
    }
    if (!tmp2) {
      const obj2 = { questId: memo.id };
      const obj = ModalActionCreatorsDefault;
      obj.pushLazy(asyncRequire(19506, dependencyMap.paths), obj2, QUEST_ACTIVITY_UNENROLLED_MODAL_KEY);
    }
  }, items4);
  let tmp6 = null;
  if (null != memo) {
    const obj4 = { quest: memo };
    tmp6 = closure_9(QuestActivityButtonInner, obj4);
  }
  return tmp6;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/frames/panel/native/QuestActivityButton.tsx");

export default memoResult;
