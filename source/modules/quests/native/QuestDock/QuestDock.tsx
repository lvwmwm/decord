// Module ID: 14201
// Function ID: 14202
// Name: QuestDockWithGestureAnimation
// Dependencies: [5, 32, 19, 17, 14116, 5033, 14118, 676, 505, 21, 4189, 712, 14200, 14119, 14122, 14115, 4586, 4050, 8115, 1581, 14123, 3893, 14202, 4599, 14117, 4603, 4583, 14203, 7676, 1236, 14204, 14211, 14214, 14215, 4588, 10488, 5036, 14216, 589, 10489, 14114, 8820, 698, 5865, 5870, 6010, 9465, 10966, 3901, 2]

// Module 14201 (QuestDockWithGestureAnimation)
import closure_3 from "QuestsExperimentLocations";
import QUEST_DOCK_EXPANDED_HEIGHT from "QUEST_DOCK_EXPANDED_HEIGHT";
import importAllResult from "useSafeAreaInsets";
import get_ActivityIndicator from "module_4050";
import QuestDockMode from "QuestDockMode";
import QuestsExperimentLocations from "QuestsExperimentLocations";
import QUEST_DOCK_COLLAPSED_HEIGHT from "QUEST_DOCK_COLLAPSED_HEIGHT";
import { AnalyticEvents } from "ME";
import { ThemeTypes } from "sum";
import jsxProd from "map";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_19;
let closure_20;
let closure_21;
let closure_6;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function QuestDockWithGestureAnimation(appThemedBackgroundColor) {
  appThemedBackgroundColor = appThemedBackgroundColor.appThemedBackgroundColor;
  let obj = setRestingQuestDockMode;
  const tmp3 = callback2();
  const context = setRestingQuestDockMode.useContext(appThemedBackgroundColor(activeQuestDockMode[13]).QuestDockGestureContext);
  const questDockWrapperSpecs = context.questDockWrapperSpecs;
  activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  const context1 = setRestingQuestDockMode.useContext(appThemedBackgroundColor(activeQuestDockMode[14]).QuestDockExternalCoordinationContext);
  const restingQuestDockMode = context1.restingQuestDockMode;
  setRestingQuestDockMode = context1.setRestingQuestDockMode;
  let items = [setRestingQuestDockMode];
  const id = setRestingQuestDockMode.useId();
  const callback = setRestingQuestDockMode.useCallback(() => {
    setRestingQuestDockMode(sharedValue.COLLAPSED);
  }, items);
  let obj1 = appThemedBackgroundColor(activeQuestDockMode[15]);
  const questDockModeAnimatedReaction = obj1.useQuestDockModeAnimatedReaction();
  let obj2 = appThemedBackgroundColor(activeQuestDockMode[15]);
  const questDockDismissalReset = obj2.useQuestDockDismissalReset();
  let obj3 = appThemedBackgroundColor(activeQuestDockMode[16]);
  const isScreenReaderEnabled = obj3.useIsScreenReaderEnabled();
  let obj4 = appThemedBackgroundColor(activeQuestDockMode[17]);
  const fn = function x() {
    return restingQuestDockMode.get() === sharedValue.EXPANDED;
  };
  obj = { restingQuestDockMode, QuestDockMode: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 2415817673061;
  fn.__initData = closure_23;
  const derivedValue = obj4.useDerivedValue(fn);
  const tmp14 = questDockWrapperSpecs(activeQuestDockMode[18])(derivedValue);
  const top = questDockWrapperSpecs(activeQuestDockMode[19])().top;
  let obj6 = appThemedBackgroundColor(activeQuestDockMode[20]);
  const userStatus = setRestingQuestDockMode.useContext(questDockWrapperSpecs(activeQuestDockMode[12])).quest.userStatus;
  let enrolledAt;
  const youBarTotalHeight = obj6.useYouBarTotalHeight();
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  let closure_7 = tmp17;
  let tmp4Result = tmp4(tmp2[21]);
  const token = tmp4Result.useToken(tmp(tmp2[11]).modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp19 = questDockWrapperSpecs(activeQuestDockMode[22])(token);
  let QuestDockMode = tmp19;
  tmp4Result = tmp4(tmp2[17]);
  class K {
    constructor() {
      obj = { backgroundColor: appThemedBackgroundColor, borderBottomRightRadius: null, borderBottomLeftRadius: null, height: null, width: null, opacity: null, transform: null };
      obj2 = appThemedBackgroundColor(activeQuestDockMode[23]);
      obj[1] = obj2.withSpring(QuestDockMode.get(), outer1_13);
      obj3 = appThemedBackgroundColor(activeQuestDockMode[23]);
      obj[2] = obj3.withSpring(QuestDockMode.get(), outer1_13);
      obj[3] = questDockWrapperSpecs.get().height;
      obj[4] = questDockWrapperSpecs.get().width;
      obj4 = appThemedBackgroundColor(activeQuestDockMode[23]);
      obj[5] = obj4.withSpring(1, outer1_12);
      obj = { translateX: null };
      obj6 = appThemedBackgroundColor(activeQuestDockMode[23]);
      obj7 = appThemedBackgroundColor(activeQuestDockMode[24]);
      obj[0] = obj6.withSpring(questDockWrapperSpecs.get().x + -1 * obj7.roundToNearestPixel(questDockWrapperSpecs.get().width / 2), outer1_12);
      items = [, ];
      items[0] = obj;
      obj1 = { translateY: null };
      obj9 = appThemedBackgroundColor(activeQuestDockMode[23]);
      obj1[0] = obj9.withSpring(questDockWrapperSpecs.get().y, outer1_12);
      items[1] = obj1;
      obj[6] = items;
      return obj;
    }
  }
  obj = { appThemedBackgroundColor, withSpring: tmp4(tmp2[23]).withSpring, bottomBorderRadius: tmp19, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_13, questDockWrapperSpecs, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_12, roundToNearestPixel: tmp4(tmp2[24]).roundToNearestPixel };
  K.__closure = obj;
  K.__workletHash = 4228984550973;
  K.__initData = closure_24;
  const animatedStyle = tmp4Result.useAnimatedStyle(K);
  sharedValue = appThemedBackgroundColor(activeQuestDockMode[17]).useSharedValue(0);
  const tmp4Result1 = appThemedBackgroundColor(activeQuestDockMode[17]);
  const fn2 = function q() {
    let obj = { transform: null };
    obj = { scale: null };
    const obj3 = appThemedBackgroundColor(activeQuestDockMode[23]);
    const obj4 = appThemedBackgroundColor(activeQuestDockMode[17]);
    obj[0] = obj3.withSpring(appThemedBackgroundColor(activeQuestDockMode[17]).interpolate(sharedValue.get(), [1, 0], [1, 1]), appThemedBackgroundColor(activeQuestDockMode[25]).springStandard);
    const items = [obj];
    obj[0] = items;
    return obj;
  };
  obj1 = { withSpring: tmp4(tmp2[23]).withSpring, interpolate: tmp4(tmp2[17]).interpolate, isPressed: sharedValue, springStandard: tmp4(tmp2[25]).springStandard };
  fn2.__closure = obj1;
  fn2.__workletHash = 3373473585356;
  fn2.__initData = closure_25;
  const items1 = [setRestingQuestDockMode];
  const animatedStyle1 = appThemedBackgroundColor(activeQuestDockMode[17]).useAnimatedStyle(fn2);
  const items2 = [sharedValue];
  const callback1 = obj.useCallback(() => {
    setRestingQuestDockMode(sharedValue.EXPANDED);
  }, items1);
  const items3 = [sharedValue];
  callback2 = obj.useCallback(() => {
    const result = sharedValue.set(1);
  }, items2);
  const callback3 = obj.useCallback(() => {
    const result = sharedValue.set(0);
  }, items3);
  const tmp4Result2 = appThemedBackgroundColor(activeQuestDockMode[17]);
  class W {
    constructor() {
      obj = appThemedBackgroundColor(activeQuestDockMode[23]);
      num = 0;
      if (activeQuestDockMode.get() === useSharedValue.EXPANDED) {
        num = 1;
      }
      obj = { opacity: obj.withSpring(num, outer1_12), height: windowDimensions.get().height };
      return obj;
    }
  }
  obj2 = { withSpring: tmp4(tmp2[23]).withSpring, activeQuestDockMode, QuestDockMode: tmp12, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_12, windowDimensions };
  W.__closure = obj2;
  W.__workletHash = 6178969276321;
  W.__initData = closure_26;
  const animatedStyle2 = appThemedBackgroundColor(activeQuestDockMode[17]).useAnimatedStyle(W);
  const tmp4Result3 = appThemedBackgroundColor(activeQuestDockMode[17]);
  class X {
    constructor() {
      pointerEvents = "none";
      if (activeQuestDockMode.get() === useSharedValue.EXPANDED) {
        pointerEvents = "auto";
      }
      return { pointerEvents };
    }
  }
  X.__closure = { activeQuestDockMode, QuestDockMode: sharedValue };
  X.__workletHash = 5416180055289;
  X.__initData = closure_27;
  const animatedProps = appThemedBackgroundColor(activeQuestDockMode[17]).useAnimatedProps(X);
  const tmp4Result4 = appThemedBackgroundColor(activeQuestDockMode[17]);
  class Y {
    constructor() {
      value = questDockWrapperSpecs.get();
      return windowDimensions.get().height - top - value.height;
    }
  }
  Y.__closure = { questDockWrapperSpecs, windowDimensions, safeAreaTop: top };
  Y.__workletHash = 8073454569923;
  Y.__initData = closure_28;
  const derivedValue1 = appThemedBackgroundColor(activeQuestDockMode[17]).useDerivedValue(Y);
  const tmp4Result5 = appThemedBackgroundColor(activeQuestDockMode[17]);
  const tmp29 = questDockWrapperSpecs(activeQuestDockMode[18])(derivedValue1);
  class F {
    constructor() {
      obj = appThemedBackgroundColor(activeQuestDockMode[23]);
      obj2 = activeQuestDockMode;
      if (activeQuestDockMode.get() === useSharedValue.CLOSED) {
        num = 0;
      } else {
        num = 1;
      }
      obj = { opacity: obj.withSpring(num, outer1_12) };
      return obj;
    }
  }
  obj3 = { withSpring: tmp4(tmp2[23]).withSpring, activeQuestDockMode, QuestDockMode: tmp12, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_12 };
  F.__closure = obj3;
  F.__workletHash = 6468803634518;
  F.__initData = closure_29;
  const animatedStyle3 = appThemedBackgroundColor(activeQuestDockMode[17]).useAnimatedStyle(F);
  const tmp4Result6 = appThemedBackgroundColor(activeQuestDockMode[17]);
  class V {
    constructor() {
      tmp = c7;
      if (!c7) {
        tmp2 = activeQuestDockMode;
        tmp3 = useSharedValue;
        if (activeQuestDockMode.get() === useSharedValue.EXPANDED) {
          tmp4 = outer1_14;
        }
        obj = { borderTopLeftRadius: null, borderTopRightRadius: null, borderBottomLeftRadius: null, borderBottomRightRadius: null, opacity: null, height: null, width: null, transform: null, borderBottomWidth: null };
        obj[0] = tmp4;
        if (!tmp) {
          tmp5 = activeQuestDockMode;
          tmp6 = useSharedValue;
          if (activeQuestDockMode.get() === useSharedValue.EXPANDED) {
            tmp7 = outer1_14;
          }
          obj[1] = tmp7;
          if (!tmp) {
            tmp8 = activeQuestDockMode;
            tmp9 = useSharedValue;
            if (activeQuestDockMode.get() === useSharedValue.EXPANDED) {
              value1 = outer1_14;
            }
            obj[2] = value1;
            if (!tmp) {
              tmp12 = activeQuestDockMode;
              tmp13 = useSharedValue;
              if (activeQuestDockMode.get() === useSharedValue.EXPANDED) {
                value = outer1_14;
              }
              obj[3] = value;
              tmp16 = appThemedBackgroundColor;
              tmp17 = activeQuestDockMode;
              obj2 = appThemedBackgroundColor(activeQuestDockMode[23]);
              obj3 = activeQuestDockMode;
              tmp18 = useSharedValue;
              num = 1;
              num2 = 1;
              if (activeQuestDockMode.get() === useSharedValue.EXPANDED) {
                num2 = 0;
              }
              tmp19 = outer1_13;
              obj[4] = obj2.withSpring(num2, outer1_13);
              tmp20 = useSharedValue;
              if (obj3.get() === useSharedValue.EXPANDED) {
                if (tmp) {
                  tmp22 = questDockWrapperSpecs;
                  height = questDockWrapperSpecs.get().height;
                } else {
                  height = outer1_16;
                }
                tmp23 = height;
              } else {
                tmp21 = questDockWrapperSpecs;
                obj[5] = questDockWrapperSpecs.get().height;
                tmp24 = useSharedValue;
                if (obj3.get() === useSharedValue.EXPANDED) {
                  if (!tmp) {
                    tmp25 = questDockWrapperSpecs;
                    tmp26 = outer1_15;
                    num3 = 2;
                    width = questDockWrapperSpecs.get().width - 2 * outer1_15;
                  }
                  obj[6] = width;
                  num4 = 0;
                  num5 = 0;
                  if (!tmp) {
                    tmp16Result = tmp16(tmp17[23]);
                    tmp28 = useSharedValue;
                    num6 = 0;
                    if (obj3.get() === useSharedValue.EXPANDED) {
                      num6 = outer1_15;
                    }
                    num5 = tmp16Result.withSpring(num6, tmp19);
                  }
                  obj = { translateX: null };
                  obj[0] = num5;
                  items = [, ];
                  items[0] = obj;
                  num7 = 0;
                  if (!tmp) {
                    tmp16Result1 = tmp16(tmp17[23]);
                    tmp29 = useSharedValue;
                    num8 = 0;
                    if (obj3.get() === useSharedValue.EXPANDED) {
                      num8 = outer1_15;
                    }
                    num7 = tmp16Result1.withSpring(num8, tmp19);
                  }
                  obj1 = { translateY: null };
                  obj1[0] = num7;
                  items[1] = obj1;
                  obj[7] = items;
                  tmp30 = QuestDockMode;
                  num9 = 0;
                  if (QuestDockMode.get() > 0) {
                    num9 = 1;
                  }
                  obj[8] = num9;
                  return obj;
                }
                tmp27 = questDockWrapperSpecs;
                width = questDockWrapperSpecs.get().width;
              }
            }
            tmp15 = QuestDockMode;
            value = QuestDockMode.get();
          }
          tmp11 = QuestDockMode;
          value1 = QuestDockMode.get();
        }
        tmp7 = restingQuestDockMode;
      }
      tmp4 = restingQuestDockMode;
      return;
    }
  }
  obj4 = { isEnrolled: tmp17, activeQuestDockMode, QuestDockMode: tmp12, QUEST_DOCK_CONTENT_BORDER_RADII: closure_14, questDockBorderRadius: token, bottomBorderRadius: tmp19, withSpring: tmp4(tmp2[23]).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_13, questDockWrapperSpecs, QUEST_DOCK_COLLAPSED_HEIGHT: closure_16, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_15 };
  V.__closure = obj4;
  V.__workletHash = 12859739915134;
  V.__initData = closure_30;
  const obj5 = { style: tmp3.wrapper, pointerEvents: "auto", children: null };
  const animatedStyle4 = appThemedBackgroundColor(activeQuestDockMode[17]).useAnimatedStyle(V);
  obj6 = { nativeID: id, style: tmp3.accessibilityWrapper, accessibilityViewIsModal: null, onAccessibilityEscape: null, pointerEvents: "box-none", children: null };
  let tmp36 = isScreenReaderEnabled;
  if (tmp36) {
    tmp36 = tmp14;
  }
  obj6[2] = tmp36;
  obj6[3] = callback;
  let tmpResult = tmp(tmp2[27]);
  let obj7 = { style: animatedStyle1, children: null };
  tmpResult = tmp(tmp2[28]);
  const obj8 = { style: items4, layout: null, children: null };
  items4 = [tmp3.questDockWrapper, { bottom: youBarTotalHeight - 1 }, animatedStyle];
  const obj9 = { bottom: youBarTotalHeight - 1 };
  const tmp33 = closure_21;
  const tmp4Result7 = appThemedBackgroundColor(activeQuestDockMode[17]);
  obj8[1] = appThemedBackgroundColor(activeQuestDockMode[24]).dimensionsLayoutTransition;
  const obj10 = { style: tmp3.nestedPressable, onPressIn: callback2, onPressOut: callback3, onPress: callback1, pointerEvents: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null };
  let str = "auto";
  if (tmp14) {
    str = "none";
  }
  obj10[4] = str;
  const intl = tmp4(tmp2[29]).intl;
  obj10[6] = intl.string(appThemedBackgroundColor(activeQuestDockMode[29]).t.rjVPdM);
  let str2 = "";
  if (!tmp14) {
    const intl2 = tmp4(tmp2[29]).intl;
    str2 = intl2.string(tmp4(tmp2[29]).t.n0MlOB);
  }
  obj10[7] = str2;
  const items5 = [closure_19(closure_7, obj10), , , ];
  const obj11 = { style: items6, layout: null, pointerEvents: "none" };
  items6 = [tmp3.questDockHeaderBorder, animatedStyle4];
  const tmp40 = closure_7;
  const tmpResult1 = questDockWrapperSpecs(activeQuestDockMode[28]);
  obj11[1] = appThemedBackgroundColor(activeQuestDockMode[24]).dimensionsLayoutTransition;
  items5[1] = closure_19(questDockWrapperSpecs(activeQuestDockMode[28]), obj11);
  const obj12 = { style: items7, children: null };
  items7 = [tmp3.questDockContentWrapper, animatedStyle3];
  const obj13 = { style: tmp3.questDockContentWrapper, children: null };
  const tmpResult2 = questDockWrapperSpecs(activeQuestDockMode[28]);
  const items8 = [closure_19(questDockWrapperSpecs(activeQuestDockMode[30]), { hideOnExpand: null != enrolledAt }), closure_19(questDockWrapperSpecs(activeQuestDockMode[31]), {})];
  obj13[1] = items8;
  const items9 = [closure_20(top, obj13), ];
  let tmp34Result = !tmp17;
  if (null == enrolledAt) {
    tmp34Result = tmp34(tmp(tmp2[32]), {});
  }
  const obj14 = { children: null };
  const obj15 = { children: null };
  items9[1] = tmp34Result;
  obj12[1] = items9;
  items5[2] = closure_20(questDockWrapperSpecs(activeQuestDockMode[28]), obj12);
  items5[3] = closure_19(questDockWrapperSpecs(activeQuestDockMode[33]), { isExpanded: tmp14 });
  obj8[2] = items5;
  obj7[1] = closure_20(tmpResult1, obj8);
  obj15[0] = closure_19(tmpResult, obj7);
  obj6[5] = closure_19(tmpResult, obj15);
  obj5[2] = closure_19(appThemedBackgroundColor(activeQuestDockMode[26]).AccessibilityViewAnimated, obj6);
  const items10 = [closure_19(top, obj5), ];
  const obj16 = { style: animatedStyle2, animatedProps, children: null };
  const tmpResult3 = questDockWrapperSpecs(activeQuestDockMode[28]);
  obj16[2] = closure_19(appThemedBackgroundColor(activeQuestDockMode[34]).Backdrop, { onDismiss: callback, accessibleDismissStyle: { height: tmp29 } });
  items10[1] = closure_19(questDockWrapperSpecs(activeQuestDockMode[28]), obj16);
  obj14[0] = items10;
  return closure_20(tmp33, obj14);
}
function QuestDockModeChangeTracker(arg0) {
  let mode;
  let questId;
  ({ mode, questId } = arg0);
  let obj = require(10488) /* useQuests */;
  obj = { mode, questContent: require(5036) /* QuestsVisibleMessagesChangedSource */.QuestContent.QUEST_BAR_MOBILE, questId, sourceQuestContent: require(5036) /* QuestsVisibleMessagesChangedSource */.QuestContent.QUEST_BAR_MOBILE };
  const questBarOrDockModeChangeTracking = obj.useQuestBarOrDockModeChangeTracking(obj);
  return null;
}
function QuestBarRenderedTriggerPointWrapper() {
  const effect = importAllResult.useEffect(() => {
    const QuestBarRenderedTriggerPoint = callback(table[37]).QuestBarRenderedTriggerPoint;
    QuestBarRenderedTriggerPoint.trigger();
  }, []);
  return null;
}
class QuestDockWithEntranceAnimation {
  constructor() {
    obj = useRef;
    tmp = quest;
    tmp2 = f93354;
    context = useRef.useContext(require("context"));
    isRendered = context.isRendered;
    quest = context.quest;
    f93354 = QUEST_DOCK_EXPANDED_HEIGHT(useRef.useState(() => performance.now()), 1)[0];
    useRef = useRef.useRef(false);
    tmp4 = f58837();
    tmp5 = QUEST_DOCK_EXPANDED_HEIGHT(useRef.useState({ width: 0, height: 0 }), 2);
    first = tmp5[0];
    QUEST_DOCK_EXPANDED_HEIGHT = first;
    useRef = tmp5[1];
    tmp7 = isRendered;
    obj2 = require("initialize");
    items = [];
    items[0] = staticUrl;
    f93355 = obj2.useStateFromStores(items, () => staticUrl.prevRestingQuestDockMode);
    obj3 = require("getIsEligibleForQuests");
    isEligibleForQuests = obj3.getIsEligibleForQuests();
    obj4 = require("useQuests");
    questBarImpressionSurvey = obj4.useQuestBarImpressionSurvey(quest);
    obj5 = require("module_4050");
    fn = function n() {
      let obj = isRendered(4599);
      let num = 0;
      if (isRendered) {
        num = 1;
      }
      obj = { opacity: obj.withSpring(num, outer1_35, "animate-always"), transform: null };
      let num2 = 0;
      if (!isRendered) {
        num2 = first.height;
      }
      obj = { translateY: isRendered(4599).withSpring(num2, outer1_35) };
      const items = [obj];
      obj[1] = items;
      return obj;
    };
    obj = { withSpring: require("CONFIG_NEVER_ANIMATE").withSpring, isRendered, ENTRANCE_ANIMATION_SPING_CONFIG: f58837, componentDimensions: first };
    fn.__closure = obj;
    fn.__workletHash = 15545726338295;
    fn.__initData = f58837;
    animatedStyle = obj5.useAnimatedStyle(fn);
    tmp11 = QUEST_DOCK_EXPANDED_HEIGHT(useRef.useState(null), 2);
    first1 = tmp11[0];
    useState = first1;
    Image = tmp11[1];
    obj7 = require("useIsMobileQuestDockRenderedBase");
    staticUrl = obj7.useQuestDockHeroAsset(quest).staticUrl;
    obj8 = require("useIsMobileQuestDockRenderedBase");
    questGameLogotypeAssetUrl = obj8.useQuestGameLogotypeAssetUrl(quest);
    useQuestDockHeroAsset = questGameLogotypeAssetUrl;
    userStatus = quest.userStatus;
    enrolledAt = undefined;
    if (userStatus != null) {
      enrolledAt = userStatus.enrolledAt;
    }
    c11 = null != enrolledAt;
    tmp7Result = require("useGradientBottom");
    gradientBottom = tmp7Result.useGradientBottom();
    tmp7Result1 = require("map");
    backgroundColor = undefined;
    token = tmp7Result1.useToken(require("Themes").colors.BACKGROUND_SURFACE_HIGH);
    if (gradientBottom != null) {
      backgroundColor = gradientBottom.backgroundColor;
    }
    if (backgroundColor == null) {
      backgroundColor = token;
    }
    items1 = [, , ];
    items1[0] = staticUrl;
    items1[1] = questGameLogotypeAssetUrl;
    items1[2] = quest.id;
    effect = obj.useEffect(() => {
      function prefetchWithErrorReporting(arg0) {
        const self = this;
        const apply = _prefetchWithErrorReporting.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      function _prefetchWithErrorReporting() {
        const self = this;
        const tmp = callback((arg0) => {
          let closure_0 = arg0;
          let c5 = 0;
          let c6 = 0;
          let c4 = 0;
          return (function*(arg0) {
            if (c6 === 2) {
              c6 = 3;
              HermesBuiltin.throwTypeError();
            } else if (tmp6 === 3) {
              if (arg0 === 1) {
                throw arg1;
              } else if (arg0 === 2) {
                let obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                c6 = 2;
                if (0 === c5) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    let closure_2 = tmp3;
                    const callback = tmp7;
                    let c4 = 1;
                    c5 = 2;
                    c6 = 1;
                    let obj1 = { value: null, done: false };
                    obj1[0] = outer2_8.prefetch(closure_0);
                    return obj1;
                  }
                } else if (1 === tmp7) {
                  c4 = 0;
                  obj1 = callback(outer2_2[42]);
                  const obj2 = { source: null, quest_id: null, asset_id: null };
                  obj2[0] = outer2_11.QUESTS_BAR_MOBILE;
                  obj2[1] = outer1_1.id;
                  obj2[2] = closure_0;
                  obj1.track(outer2_17.QUEST_ASSET_LOADING_FAILURE, obj2);
                  c6 = 3;
                  return { value: false, done: true };
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c4 = 0;
                  c6 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  c4 = 0;
                  c6 = 3;
                  return { value: true, done: true };
                }
              } catch (tmp20) {
                let closure_3 = tmp20;
                if (tmp4 === c4) {
                  c6 = tmp2;
                  throw tmp20;
                } else {
                  c5 = tmp;
                }
              }
            }
          })();
        });
        const _prefetchWithErrorReporting = tmp;
        const apply = tmp.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      function _preloadQuestDockAssets() {
        const self = this;
        const tmp = callback(function*() {
          if (c3 === 2) {
            c3 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              c3 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c3 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  let closure_1 = tmp5;
                  let closure_0 = tmp2;
                  closure_0 = undefined;
                  const items = [];
                  if (null != outer1_9) {
                    items.push(outer1_0(tmp23));
                  }
                  if (null != outer1_10) {
                    items.push(outer1_0(tmp13));
                  }
                  c2 = 1;
                  c3 = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = Promise.all(items);
                  return obj1;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_0 = arg1;
                outer1_8(closure_0.every((arg0) => true === arg0));
                c3 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp17) {
              c3 = tmp;
              throw tmp17;
            }
          }
        });
        const _preloadQuestDockAssets = tmp;
        const apply = tmp.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      !(function preloadQuestDockAssets() {
        const self = this;
        const apply = _preloadQuestDockAssets.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }, items1);
    items2 = [, ];
    items2[0] = first1;
    items2[1] = quest.id;
    effect1 = obj.useEffect(() => {
      if (false === first1) {
        let obj = quest(5865);
        obj = { name: null, tags: null };
        obj[0] = isRendered(5870).MetricEvents.QUEST_CONTENT_RENDERING_FAILURE;
        const _HermesInternal = HermesInternal;
        const items = ["quest_id:" + quest.id, , ];
        const _HermesInternal2 = HermesInternal;
        items[1] = "quest_content:" + isRendered(6010).getQuestContentName(isRendered(5036).QuestContent.QUEST_BAR_MOBILE);
        items[2] = "reason:asset_loading_error";
        obj[1] = items;
        obj.increment(obj);
        const obj3 = isRendered(6010);
      }
    }, items2);
    tmp20 = null == quest || !isEligibleForQuests || !first1;
    c13 = tmp20;
    items3 = [];
    items3[0] = tmp20;
    effect2 = obj.useEffect(() => {
      let obj = isRendered(9465);
      obj = { isEligibleToBeVisible: !closure_13 };
      let result = obj.updateQuestDockVisibilityEligibility(obj);
      return () => {
        const result = callback(table[46]).updateQuestDockVisibilityEligibility({ isEligibleToBeVisible: false });
      };
    }, items3);
    tmp22 = null;
    if (!tmp20) {
      tmp23 = jsx;
      obj1 = { pointerEvents: "box-none", style: null, onLayout: null, children: null };
      items4 = [, ];
      items4[0] = tmp4.wrapperAnimated;
      items4[1] = animatedStyle;
      obj1[1] = items4;
      obj1[2] = function onLayout(height) {
        let obj = { height: height.nativeEvent.layout.height, width: height.nativeEvent.layout.width };
        callback(obj);
        if (!ref.current) {
          tmp2.current = true;
          const _Math = Math;
          if (Math.random() < 0.1) {
            const _Math2 = Math;
            const _performance = performance;
            const rounded = Math.round(performance.now() - dependencyMap);
            obj = { name: null, tags: null };
            obj[0] = isRendered(5870).MetricEvents.QUEST_BAR_MOBILE_TIME_TO_FIRST_PAINT;
            const _HermesInternal = HermesInternal;
            const items = ["quest_id:" + quest.id];
            obj[1] = items;
            quest(5865).distribution(obj, rounded);
            const obj2 = quest(5865);
          }
        }
      };
      obj2 = { overrideVisibility: null, questContent: null, questOrQuests: null, onImpression: null, sourceQuestContent: null, children: null };
      obj2[0] = context.isVisibleToUser;
      obj2[1] = require("QuestsVisibleMessagesChangedSource").QuestContent.QUEST_BAR_MOBILE;
      obj2[2] = quest;
      obj2[3] = questBarImpressionSurvey;
      obj2[4] = require("QuestsVisibleMessagesChangedSource").QuestContent.QUEST_BAR_MOBILE;
      obj2[5] = function children() {
        let obj = { questId: quest.id, mode: closure_6 };
        const items = [outer1_19(outer1_32, obj), outer1_19(outer1_33, {}), ];
        let DARK;
        if (!closure_11) {
          DARK = outer1_18.DARK;
        }
        obj = { children: null };
        obj = { children: null };
        obj[0] = outer1_19(isRendered(3901).ThemeContextProvider, { theme: DARK, children: outer1_19(outer1_31, obj2) });
        items[2] = outer1_19(isRendered(14119).QuestDockGestureContextProvider, obj);
        obj[0] = items;
        return outer1_20(outer1_21, obj);
      };
      obj1[3] = jsx(require("AdContentImpressionTrackerBaseNative").BillableAdPlacementImpressionTrackerNative, obj2);
      tmp22 = jsx(require("module_4050").View, obj1);
    }
    return tmp22;
  }
}
let c5 = importAllResult;
({ View: closure_6, StyleSheet, Pressable: error, Image: metroImportAll } = get_ActivityIndicator);
({ QuestDockMode: c10, QuestsExperimentLocations: unpackModuleId } = QuestsExperimentLocations);
({ QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_12, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: map1, QUEST_DOCK_CONTENT_BORDER_RADII: closure_14, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_15, QUEST_DOCK_COLLAPSED_HEIGHT: closure_16 } = QUEST_DOCK_COLLAPSED_HEIGHT);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
let obj = { wrapper: { position: "absolute", left: "50%", bottom: 0, zIndex: 1 }, accessibilityWrapper: null, questDockWrapper: null, questDockContentWrapper: null, questDockHeaderBorder: null, nestedPressable: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.zIndex = 1;
obj[1] = obj;
createCacheKey = { position: "absolute", bottom: 0, left: "50%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: require("Themes").modules.mobile.QUEST_DOCK_BORDER_RADIUS, zIndex: 1 };
obj[2] = createCacheKey;
let obj2 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj2.justifyContent = "flex-end";
obj2.zIndex = 4;
obj[3] = obj2;
let obj3 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj3.bottom = undefined;
obj3.right = undefined;
obj3.borderWidth = 1;
obj3.borderColor = require("Themes").colors.BORDER_MUTED;
obj3.zIndex = 5;
obj[4] = obj3;
let obj4 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj4.zIndex = 6;
obj[5] = obj4;
let closure_22 = createCacheKey.createStyles(obj);
let closure_23 = { code: "function QuestDockTsx1(){const{restingQuestDockMode,QuestDockMode}=this.__closure;return restingQuestDockMode.get()===QuestDockMode.EXPANDED;}" };
let closure_24 = { code: "function QuestDockTsx2(){const{appThemedBackgroundColor,withSpring,bottomBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_MODE_CHANGE_PHYSICS,roundToNearestPixel}=this.__closure;return{backgroundColor:appThemedBackgroundColor,borderBottomRightRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomLeftRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:questDockWrapperSpecs.get().height,width:questDockWrapperSpecs.get().width,opacity:withSpring(1,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(questDockWrapperSpecs.get().x+roundToNearestPixel(questDockWrapperSpecs.get().width/2)*-1,QUEST_DOCK_MODE_CHANGE_PHYSICS)},{translateY:withSpring(questDockWrapperSpecs.get().y,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}" };
let closure_25 = { code: "function QuestDockTsx3(){const{withSpring,interpolate,isPressed,springStandard}=this.__closure;return{transform:[{scale:withSpring(interpolate(isPressed.get(),[1,0],[1,1]),springStandard)}]};}" };
let closure_26 = { code: "function QuestDockTsx4(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,windowDimensions}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),height:windowDimensions.get().height};}" };
let closure_27 = { code: "function QuestDockTsx5(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};}" };
let closure_28 = { code: "function QuestDockTsx6(){const{questDockWrapperSpecs,windowDimensions,safeAreaTop}=this.__closure;const specs=questDockWrapperSpecs.get();const windowHeight=windowDimensions.get().height;return windowHeight-safeAreaTop-specs.height;}" };
let closure_29 = { code: "function QuestDockTsx7(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
let closure_30 = { code: "function QuestDockTsx8(){const{isEnrolled,activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,bottomBorderRadius,withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_COLLAPSED_HEIGHT,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED}=this.__closure;return{borderTopLeftRadius:!isEnrolled&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:!isEnrolled&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:!isEnrolled&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),borderBottomRightRadius:!isEnrolled&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:activeQuestDockMode.get()===QuestDockMode.EXPANDED?isEnrolled?questDockWrapperSpecs.get().height:QUEST_DOCK_COLLAPSED_HEIGHT:questDockWrapperSpecs.get().height,width:activeQuestDockMode.get()===QuestDockMode.EXPANDED&&!isEnrolled?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:isEnrolled?0:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:isEnrolled?0:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}],borderBottomWidth:bottomBorderRadius.get()>0?1:0};}" };
let closure_34 = createCacheKey.createStyles(() => ({ wrapperAnimated: { position: "absolute", bottom: 0, padding: 0, width: "100%" } }));
let obj5 = {};
const merged4 = Object.assign(require("SUBTLE_SPRING").SUBTLE_SPRING);
obj5.overshootClamping = true;
obj5.damping = 54;
let closure_36 = { code: "function QuestDockTsx9(){const{withSpring,isRendered,ENTRANCE_ANIMATION_SPING_CONFIG,componentDimensions}=this.__closure;return{opacity:withSpring(isRendered?1:0,ENTRANCE_ANIMATION_SPING_CONFIG,'animate-always'),transform:[{translateY:withSpring(isRendered?0:componentDimensions.height,ENTRANCE_ANIMATION_SPING_CONFIG)}]};}" };
const memoResult = importAllResult.memo(function QuestDockWithQuestContext() {
  let obj = require(14114) /* useIsMobileQuestDockRenderedBase */;
  const mobileQuestDock = obj.useMobileQuestDock();
  const isMobileQuestDockRenderedBase = require(14114) /* useIsMobileQuestDockRenderedBase */.useIsMobileQuestDockRenderedBase(mobileQuestDock);
  require(14114) /* useIsMobileQuestDockRenderedBase */;
  let tmp6 = null;
  if (null != mobileQuestDock) {
    obj = { value: null, children: null };
    obj = { isRendered: null, isVisibleToUser: null, quest: null };
    obj[0] = isMobileQuestDockRenderedBase;
    obj[1] = tmp5;
    obj[2] = mobileQuestDock;
    obj[0] = obj;
    obj[1] = callback(QuestDockWithEntranceAnimation, {});
    tmp6 = callback(importDefault(14200).Provider, obj);
  }
  return tmp6;
});
let result = require("noop").fileFinishedImporting("modules/quests/native/QuestDock/QuestDock.tsx");

export default memoResult;
export { QuestDockWithEntranceAnimation };
