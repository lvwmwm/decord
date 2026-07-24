// Module ID: 14127
// Function ID: 108584
// Name: QuestDockWithGestureAnimation
// Dependencies: [5, 57, 31, 27, 14042, 4976, 14044, 653, 482, 33, 4130, 689, 14126, 14045, 14048, 14041, 4528, 3991, 8321, 1557, 14049, 3834, 14128, 4542, 14043, 4546, 4525, 14129, 7678, 1212, 14130, 14137, 14140, 14141, 4531, 10493, 4979, 14142, 566, 10494, 14040, 8868, 675, 6836, 6841, 6968, 9480, 10956, 3842, 2]

// Module 14127 (QuestDockWithGestureAnimation)
import closure_3 from "QuestsExperimentLocations";
import _slicedToArray from "_slicedToArray";
import importAllResult from "module_14137";
import get_ActivityIndicator from "useQuestDockSwipeGesture";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import QuestsExperimentLocations from "QuestsExperimentLocations";
import QUEST_DOCK_COLLAPSED_HEIGHT from "QUEST_DOCK_COLLAPSED_HEIGHT";
import { AnalyticEvents } from "ME";
import { ThemeTypes } from "sum";
import jsxProd from "getDragHandleOffsetLeft";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_19;
let closure_20;
let closure_21;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function QuestDockWithGestureAnimation(appThemedBackgroundColor) {
  appThemedBackgroundColor = appThemedBackgroundColor.appThemedBackgroundColor;
  const tmp = callback3();
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
  let obj = appThemedBackgroundColor(activeQuestDockMode[15]);
  const questDockModeAnimatedReaction = obj.useQuestDockModeAnimatedReaction();
  let obj1 = appThemedBackgroundColor(activeQuestDockMode[15]);
  const questDockDismissalReset = obj1.useQuestDockDismissalReset();
  let obj2 = appThemedBackgroundColor(activeQuestDockMode[16]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  let obj3 = appThemedBackgroundColor(activeQuestDockMode[17]);
  class K {
    constructor() {
      return restingQuestDockMode.get() === c10.EXPANDED;
    }
  }
  obj = { restingQuestDockMode, QuestDockMode: sharedValue };
  K.__closure = obj;
  K.__workletHash = 2415817673061;
  K.__initData = closure_23;
  const derivedValue = obj3.useDerivedValue(K);
  const tmp10 = questDockWrapperSpecs(activeQuestDockMode[18])(derivedValue);
  const top = questDockWrapperSpecs(activeQuestDockMode[19])().top;
  let obj5 = appThemedBackgroundColor(activeQuestDockMode[20]);
  const userStatus = setRestingQuestDockMode.useContext(questDockWrapperSpecs(activeQuestDockMode[12])).quest.userStatus;
  let enrolledAt;
  const youBarTotalHeight = obj5.useYouBarTotalHeight();
  if (null != userStatus) {
    enrolledAt = userStatus.enrolledAt;
  }
  let closure_7 = tmp13;
  let obj6 = appThemedBackgroundColor(activeQuestDockMode[21]);
  const token = obj6.useToken(questDockWrapperSpecs(activeQuestDockMode[11]).modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp15 = questDockWrapperSpecs(activeQuestDockMode[22])(token);
  let _isNativeReflectConstruct = tmp15;
  let obj7 = appThemedBackgroundColor(activeQuestDockMode[17]);
  const fn = function q() {
    let obj = { backgroundColor: appThemedBackgroundColor, borderBottomRightRadius: appThemedBackgroundColor(activeQuestDockMode[23]).withSpring(tmp15.get(), outer1_13) };
    const obj2 = appThemedBackgroundColor(activeQuestDockMode[23]);
    obj.borderBottomLeftRadius = appThemedBackgroundColor(activeQuestDockMode[23]).withSpring(tmp15.get(), outer1_13);
    obj.height = questDockWrapperSpecs.get().height;
    obj.width = questDockWrapperSpecs.get().width;
    const obj3 = appThemedBackgroundColor(activeQuestDockMode[23]);
    obj.opacity = appThemedBackgroundColor(activeQuestDockMode[23]).withSpring(1, outer1_12);
    obj = {};
    const obj4 = appThemedBackgroundColor(activeQuestDockMode[23]);
    const obj6 = appThemedBackgroundColor(activeQuestDockMode[23]);
    obj.translateX = obj6.withSpring(questDockWrapperSpecs.get().x + -1 * appThemedBackgroundColor(activeQuestDockMode[24]).roundToNearestPixel(questDockWrapperSpecs.get().width / 2), outer1_12);
    const items = [obj, ];
    obj = {};
    const obj7 = appThemedBackgroundColor(activeQuestDockMode[24]);
    obj.translateY = appThemedBackgroundColor(activeQuestDockMode[23]).withSpring(questDockWrapperSpecs.get().y, outer1_12);
    items[1] = obj;
    obj.transform = items;
    return obj;
  };
  obj = { appThemedBackgroundColor, withSpring: appThemedBackgroundColor(activeQuestDockMode[23]).withSpring, bottomBorderRadius: tmp15, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_13, questDockWrapperSpecs, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_12, roundToNearestPixel: appThemedBackgroundColor(activeQuestDockMode[24]).roundToNearestPixel };
  fn.__closure = obj;
  fn.__workletHash = 4228984550973;
  fn.__initData = closure_24;
  const animatedStyle = obj7.useAnimatedStyle(fn);
  let obj9 = appThemedBackgroundColor(activeQuestDockMode[17]);
  sharedValue = obj9.useSharedValue(0);
  let obj10 = appThemedBackgroundColor(activeQuestDockMode[17]);
  class W {
    constructor() {
      obj = {};
      obj = {};
      obj3 = appThemedBackgroundColor(activeQuestDockMode[23]);
      obj4 = appThemedBackgroundColor(activeQuestDockMode[17]);
      interpolateResult = obj4.interpolate(c10.get(), [1, 0], [1, 1]);
      obj.scale = obj3.withSpring(interpolateResult, appThemedBackgroundColor(activeQuestDockMode[25]).springStandard);
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  obj1 = { withSpring: appThemedBackgroundColor(activeQuestDockMode[23]).withSpring, interpolate: appThemedBackgroundColor(activeQuestDockMode[17]).interpolate, isPressed: sharedValue, springStandard: appThemedBackgroundColor(activeQuestDockMode[25]).springStandard };
  W.__closure = obj1;
  W.__workletHash = 3373473585356;
  W.__initData = closure_25;
  const items1 = [setRestingQuestDockMode];
  const animatedStyle1 = obj10.useAnimatedStyle(W);
  const items2 = [sharedValue];
  const callback1 = setRestingQuestDockMode.useCallback(() => {
    setRestingQuestDockMode(sharedValue.EXPANDED);
  }, items1);
  const items3 = [sharedValue];
  const callback2 = setRestingQuestDockMode.useCallback(() => {
    const result = sharedValue.set(1);
  }, items2);
  callback3 = setRestingQuestDockMode.useCallback(() => {
    const result = sharedValue.set(0);
  }, items3);
  let obj12 = appThemedBackgroundColor(activeQuestDockMode[17]);
  class X {
    constructor() {
      obj = {};
      obj2 = appThemedBackgroundColor(activeQuestDockMode[23]);
      num = 0;
      if (activeQuestDockMode.get() === c10.EXPANDED) {
        num = 1;
      }
      obj.opacity = obj2.withSpring(num, outer1_12);
      obj.height = windowDimensions.get().height;
      return obj;
    }
  }
  obj2 = { withSpring: appThemedBackgroundColor(activeQuestDockMode[23]).withSpring, activeQuestDockMode, QuestDockMode: sharedValue, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_12, windowDimensions };
  X.__closure = obj2;
  X.__workletHash = 6178969276321;
  X.__initData = closure_26;
  const animatedStyle2 = obj12.useAnimatedStyle(X);
  let obj14 = appThemedBackgroundColor(activeQuestDockMode[17]);
  class Y {
    constructor() {
      obj = {};
      str = "none";
      if (activeQuestDockMode.get() === c10.EXPANDED) {
        str = "auto";
      }
      obj.pointerEvents = str;
      return obj;
    }
  }
  obj3 = { activeQuestDockMode, QuestDockMode: sharedValue };
  Y.__closure = obj3;
  Y.__workletHash = 5416180055289;
  Y.__initData = closure_27;
  const animatedProps = obj14.useAnimatedProps(Y);
  let obj16 = appThemedBackgroundColor(activeQuestDockMode[17]);
  class F {
    constructor() {
      value = questDockWrapperSpecs.get();
      return windowDimensions.get().height - top - value.height;
    }
  }
  F.__closure = { questDockWrapperSpecs, windowDimensions, safeAreaTop: top };
  F.__workletHash = 8073454569923;
  F.__initData = closure_28;
  const derivedValue1 = obj16.useDerivedValue(F);
  let obj17 = appThemedBackgroundColor(activeQuestDockMode[17]);
  class V {
    constructor() {
      obj = {};
      obj2 = appThemedBackgroundColor(activeQuestDockMode[23]);
      if (activeQuestDockMode.get() === c10.CLOSED) {
        num = 0;
      } else {
        tmp = activeQuestDockMode;
        tmp2 = c10;
        num = 1;
      }
      obj.opacity = obj2.withSpring(num, outer1_12);
      return obj;
    }
  }
  const tmp25 = questDockWrapperSpecs(activeQuestDockMode[18])(derivedValue1);
  V.__closure = { withSpring: appThemedBackgroundColor(activeQuestDockMode[23]).withSpring, activeQuestDockMode, QuestDockMode: sharedValue, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_12 };
  V.__workletHash = 6468803634518;
  V.__initData = closure_29;
  const animatedStyle3 = obj17.useAnimatedStyle(V);
  let obj4 = { withSpring: appThemedBackgroundColor(activeQuestDockMode[23]).withSpring, activeQuestDockMode, QuestDockMode: sharedValue, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_12 };
  const fn2 = function j() {
    let obj = {};
    if (!closure_7) {
      if (activeQuestDockMode.get() === sharedValue.EXPANDED) {
        let tmp3 = outer1_14;
      }
      obj.borderTopLeftRadius = tmp3;
      if (!closure_7) {
        if (activeQuestDockMode.get() === sharedValue.EXPANDED) {
          let tmp7 = outer1_14;
        }
        obj.borderTopRightRadius = tmp7;
        if (!closure_7) {
          if (activeQuestDockMode.get() === sharedValue.EXPANDED) {
            let value = outer1_14;
          }
          obj.borderBottomLeftRadius = value;
          if (!closure_7) {
            if (activeQuestDockMode.get() === sharedValue.EXPANDED) {
              value = outer1_14;
            }
            obj.borderBottomRightRadius = value;
            let num3 = 1;
            if (activeQuestDockMode.get() === sharedValue.EXPANDED) {
              num3 = 0;
            }
            obj.opacity = appThemedBackgroundColor(activeQuestDockMode[23]).withSpring(num3, outer1_13);
            if (activeQuestDockMode.get() === sharedValue.EXPANDED) {
              if (closure_7) {
                let height = questDockWrapperSpecs.get().height;
              } else {
                height = outer1_16;
              }
            } else {
              obj.height = questDockWrapperSpecs.get().height;
              if (activeQuestDockMode.get() === sharedValue.EXPANDED) {
                if (!closure_7) {
                  let width = questDockWrapperSpecs.get().width - 2 * outer1_15;
                }
                obj.width = width;
                obj = {};
                let num6 = 0;
                if (!closure_7) {
                  let num7 = 0;
                  if (activeQuestDockMode.get() === sharedValue.EXPANDED) {
                    num7 = outer1_15;
                  }
                  num6 = appThemedBackgroundColor(activeQuestDockMode[23]).withSpring(num7, outer1_13);
                  const obj4 = appThemedBackgroundColor(activeQuestDockMode[23]);
                }
                obj.translateX = num6;
                const items = [obj, ];
                obj = {};
                let num8 = 0;
                if (!closure_7) {
                  let num9 = 0;
                  if (activeQuestDockMode.get() === sharedValue.EXPANDED) {
                    num9 = outer1_15;
                  }
                  num8 = appThemedBackgroundColor(activeQuestDockMode[23]).withSpring(num9, outer1_13);
                  const obj6 = appThemedBackgroundColor(activeQuestDockMode[23]);
                }
                obj.translateY = num8;
                items[1] = obj;
                obj.transform = items;
                let num10 = 0;
                if (tmp15.get() > 0) {
                  num10 = 1;
                }
                obj.borderBottomWidth = num10;
                return obj;
              }
              width = questDockWrapperSpecs.get().width;
            }
            const obj2 = appThemedBackgroundColor(activeQuestDockMode[23]);
          }
          value = tmp15.get();
        }
        value = tmp15.get();
      }
      tmp7 = token;
    }
    tmp3 = token;
  };
  obj5 = { isEnrolled: tmp13, activeQuestDockMode, QuestDockMode: sharedValue, QUEST_DOCK_CONTENT_BORDER_RADII: closure_14, questDockBorderRadius: token, bottomBorderRadius: tmp15, withSpring: appThemedBackgroundColor(activeQuestDockMode[23]).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_13, questDockWrapperSpecs, QUEST_DOCK_COLLAPSED_HEIGHT: closure_16, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_15 };
  fn2.__closure = obj5;
  fn2.__workletHash = 12859739915134;
  fn2.__initData = closure_30;
  obj6 = {};
  obj7 = { style: tmp.wrapper, pointerEvents: "auto" };
  let str = "auto";
  const animatedStyle4 = appThemedBackgroundColor(activeQuestDockMode[17]).useAnimatedStyle(fn2);
  const obj8 = { nativeID: id, style: tmp.accessibilityWrapper };
  let tmp34 = !tmp33;
  if (!!isScreenReaderEnabled) {
    tmp34 = tmp10;
  }
  obj8.accessibilityViewIsModal = tmp34;
  obj8.onAccessibilityEscape = callback;
  obj8.pointerEvents = "box-none";
  obj9 = {};
  const obj20 = appThemedBackgroundColor(activeQuestDockMode[17]);
  const tmp28 = callback2;
  const tmp29 = closure_21;
  const tmp30 = callback;
  const tmp31 = top;
  const tmp32 = callback;
  const tmp35 = callback;
  obj10 = { style: animatedStyle1 };
  const tmp36 = questDockWrapperSpecs(activeQuestDockMode[27]);
  const tmp37 = callback;
  const obj11 = { style: items4 };
  items4 = [tmp.questDockWrapper, , ];
  obj12 = { bottom: youBarTotalHeight - 1 };
  items4[1] = obj12;
  items4[2] = animatedStyle;
  const tmp38 = questDockWrapperSpecs(activeQuestDockMode[28]);
  const tmp39 = callback2;
  obj11.layout = appThemedBackgroundColor(activeQuestDockMode[24]).dimensionsLayoutTransition;
  const obj13 = { style: tmp.nestedPressable, onPressIn: callback2, onPressOut: callback3, onPress: callback1 };
  if (tmp10) {
    str = "none";
  }
  obj13.pointerEvents = str;
  obj13.accessibilityRole = "button";
  const intl = appThemedBackgroundColor(activeQuestDockMode[29]).intl;
  obj13.accessibilityLabel = intl.string(appThemedBackgroundColor(activeQuestDockMode[29]).t.rjVPdM);
  let str2 = "";
  if (!tmp10) {
    const intl2 = appThemedBackgroundColor(activeQuestDockMode[29]).intl;
    str2 = intl2.string(appThemedBackgroundColor(activeQuestDockMode[29]).t.n0MlOB);
  }
  obj13.accessibilityHint = str2;
  const items5 = [callback(closure_7, obj13), , , ];
  obj14 = { style: items6 };
  items6 = [tmp.questDockHeaderBorder, animatedStyle4];
  const tmp40 = questDockWrapperSpecs(activeQuestDockMode[28]);
  const tmp41 = callback;
  const tmp42 = closure_7;
  obj14.layout = appThemedBackgroundColor(activeQuestDockMode[24]).dimensionsLayoutTransition;
  obj14.pointerEvents = "none";
  items5[1] = callback(questDockWrapperSpecs(activeQuestDockMode[28]), obj14);
  const obj15 = { style: items7 };
  items7 = [tmp.questDockContentWrapper, animatedStyle3];
  obj16 = { style: tmp.questDockContentWrapper };
  const tmp45 = questDockWrapperSpecs(activeQuestDockMode[28]);
  const tmp46 = callback2;
  const items8 = [callback(questDockWrapperSpecs(activeQuestDockMode[30]), { hideOnExpand: null != enrolledAt }), callback(questDockWrapperSpecs(activeQuestDockMode[31]), {})];
  obj16.children = items8;
  const items9 = [callback2(top, obj16), ];
  let tmp48 = !tmp13;
  if (null == enrolledAt) {
    tmp48 = callback(questDockWrapperSpecs(activeQuestDockMode[32]), {});
  }
  items9[1] = tmp48;
  obj15.children = items9;
  items5[2] = tmp46(questDockWrapperSpecs(activeQuestDockMode[28]), obj15);
  items5[3] = callback(questDockWrapperSpecs(activeQuestDockMode[33]), { isExpanded: tmp10 });
  obj11.children = items5;
  obj10.children = tmp39(tmp40, obj11);
  obj9.children = tmp37(tmp38, obj10);
  obj8.children = tmp35(tmp36, obj9);
  obj7.children = tmp32(appThemedBackgroundColor(activeQuestDockMode[26]).AccessibilityViewAnimated, obj8);
  const items10 = [tmp30(tmp31, obj7), ];
  obj17 = { style: animatedStyle2, animatedProps };
  const tmp47 = questDockWrapperSpecs(activeQuestDockMode[28]);
  obj17.children = callback(appThemedBackgroundColor(activeQuestDockMode[34]).Backdrop, { onDismiss: callback, accessibleDismissStyle: { height: tmp25 } });
  items10[1] = callback(questDockWrapperSpecs(activeQuestDockMode[28]), obj17);
  obj6.children = items10;
  return tmp28(tmp29, obj6);
}
function QuestDockModeChangeTracker(arg0) {
  let mode;
  let questId;
  ({ mode, questId } = arg0);
  let obj = require(10493) /* _createForOfIteratorHelperLoose */;
  obj = { mode, questContent: require(4979) /* QuestsVisibleMessagesChangedSource */.QuestContent.QUEST_BAR_MOBILE, questId, sourceQuestContent: require(4979) /* QuestsVisibleMessagesChangedSource */.QuestContent.QUEST_BAR_MOBILE };
  const questBarOrDockModeChangeTracking = obj.useQuestBarOrDockModeChangeTracking(obj);
  return null;
}
function QuestBarRenderedTriggerPointWrapper() {
  const effect = importAllResult.useEffect(() => {
    const QuestBarRenderedTriggerPoint = outer1_0(outer1_2[37]).QuestBarRenderedTriggerPoint;
    QuestBarRenderedTriggerPoint.trigger();
  }, []);
  return null;
}
class QuestDockWithEntranceAnimation {
  constructor() {
    context = c5.useContext(require("context"));
    isRendered = context.isRendered;
    quest = context.quest;
    f108602 = _slicedToArray(c5.useState(() => performance.now()), 1)[0];
    c3 = c5.useRef(false);
    tmp2 = f108620();
    tmp3 = _slicedToArray(c5.useState({ width: 0, height: 0 }), 2);
    first = tmp3[0];
    _slicedToArray = first;
    c5 = tmp3[1];
    obj = require("initialize");
    items = [];
    items[0] = staticUrl;
    f108603 = obj.useStateFromStores(items, () => staticUrl.prevRestingQuestDockMode);
    obj2 = require("getIsEligibleForQuests");
    isEligibleForQuests = obj2.getIsEligibleForQuests();
    obj3 = require("_createForOfIteratorHelperLoose");
    questBarImpressionSurvey = obj3.useQuestBarImpressionSurvey(quest);
    obj4 = require("module_3991");
    fn = function c() {
      let obj = {};
      let num = 0;
      if (isRendered) {
        num = 1;
      }
      obj.opacity = isRendered(4542).withSpring(num, outer1_32, "animate-always");
      obj = {};
      const obj2 = isRendered(4542);
      let num2 = 0;
      if (!isRendered) {
        num2 = first.height;
      }
      obj.translateY = isRendered(4542).withSpring(num2, outer1_32);
      const items = [obj];
      obj.transform = items;
      return obj;
    };
    obj = { withSpring: require("withSpring").withSpring, isRendered, ENTRANCE_ANIMATION_SPING_CONFIG: f108620, componentDimensions: first };
    fn.__closure = obj;
    fn.__workletHash = 15545726338295;
    fn.__initData = f108620;
    animatedStyle = obj4.useAnimatedStyle(fn);
    tmp8 = _slicedToArray(c5.useState(null), 2);
    first1 = tmp8[0];
    c7 = first1;
    useState = tmp8[1];
    obj6 = require("useIsMobileQuestDockRenderedBase");
    staticUrl = obj6.useQuestDockHeroAsset(quest).staticUrl;
    obj7 = require("useIsMobileQuestDockRenderedBase");
    questGameLogotypeAssetUrl = obj7.useQuestGameLogotypeAssetUrl(quest);
    c10 = questGameLogotypeAssetUrl;
    userStatus = quest.userStatus;
    enrolledAt = undefined;
    if (null != userStatus) {
      enrolledAt = userStatus.enrolledAt;
    }
    enrolledAt = null != enrolledAt;
    obj8 = require("useGradientBottom");
    gradientBottom = obj8.useGradientBottom();
    obj9 = require("map");
    token = obj9.useToken(require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH);
    backgroundColor = undefined;
    if (null != gradientBottom) {
      backgroundColor = gradientBottom.backgroundColor;
    }
    if (null != backgroundColor) {
      token = backgroundColor;
    }
    BACKGROUND_SURFACE_HIGH = token;
    items1 = [, , ];
    items1[0] = staticUrl;
    items1[1] = questGameLogotypeAssetUrl;
    items1[2] = quest.id;
    effect = c5.useEffect(() => {
      function prefetchWithErrorReporting(arg0) {
        return _prefetchWithErrorReporting(...arguments);
      }
      function _prefetchWithErrorReporting() {
        // CreateGeneratorClosureLongIndex (0x67)
        const obj = callback(tmp);
        return obj(...arguments);
      }
      function _preloadQuestDockAssets() {
        // CreateGeneratorClosureLongIndex (0x67)
        const obj = callback(tmp);
        return obj(...arguments);
      }
      !(function preloadQuestDockAssets() {
        return _preloadQuestDockAssets(...arguments);
      })();
    }, items1);
    items2 = [, ];
    items2[0] = first1;
    items2[1] = quest.id;
    effect1 = c5.useEffect(() => {
      if (false === first1) {
        let obj = quest(6836);
        obj = { name: isRendered(6841).MetricEvents.QUEST_CONTENT_RENDERING_FAILURE };
        const _HermesInternal = HermesInternal;
        const items = ["quest_id:" + quest.id, , ];
        const _HermesInternal2 = HermesInternal;
        items[1] = "quest_content:" + isRendered(6968).getQuestContentName(isRendered(4979).QuestContent.QUEST_BAR_MOBILE);
        items[2] = "reason:asset_loading_error";
        obj.tags = items;
        obj.increment(obj);
        const obj3 = isRendered(6968);
      }
    }, items2);
    tmp17 = null == quest || !isEligibleForQuests || !first1;
    f108615 = tmp17;
    items3 = [];
    items3[0] = tmp17;
    effect2 = c5.useEffect(() => {
      let obj = isRendered(9480);
      obj = { isEligibleToBeVisible: !closure_13 };
      let result = obj.updateQuestDockVisibilityEligibility(obj);
      return () => {
        const result = isRendered(table[46]).updateQuestDockVisibilityEligibility({ isEligibleToBeVisible: false });
      };
    }, items3);
    tmp19 = null;
    if (!tmp17) {
      tmp20 = jsx;
      tmp21 = quest;
      tmp22 = f108602;
      obj1 = {};
      str = "box-none";
      obj1.pointerEvents = "box-none";
      items4 = [, ];
      items4[0] = tmp2.wrapperAnimated;
      items4[1] = animatedStyle;
      obj1.style = items4;
      obj1.onLayout = function onLayout(height) {
        let obj = { height: height.nativeEvent.layout.height, width: height.nativeEvent.layout.width };
        callback(obj);
        if (!ref.current) {
          ref.current = true;
          const _Math = Math;
          if (Math.random() < 0.1) {
            const _Math2 = Math;
            const _performance = performance;
            const rounded = Math.round(performance.now() - dependencyMap);
            obj = { name: isRendered(6841).MetricEvents.QUEST_BAR_MOBILE_TIME_TO_FIRST_PAINT };
            const _HermesInternal = HermesInternal;
            const items = ["quest_id:" + quest.id];
            obj.tags = items;
            quest(6836).distribution(obj, rounded);
            const obj2 = quest(6836);
          }
        }
      };
      tmp23 = jsx;
      tmp24 = isRendered;
      num = 47;
      obj2 = {};
      obj2.overrideVisibility = context.isVisibleToUser;
      num2 = 36;
      obj2.questContent = require("QuestsVisibleMessagesChangedSource").QuestContent.QUEST_BAR_MOBILE;
      obj2.questOrQuests = quest;
      obj2.onImpression = questBarImpressionSurvey;
      obj2.sourceQuestContent = require("QuestsVisibleMessagesChangedSource").QuestContent.QUEST_BAR_MOBILE;
      obj2.children = function children() {
        let obj = {};
        obj = { questId: quest.id, mode: closure_6 };
        const items = [outer1_19(outer1_35, obj), outer1_19(outer1_36, {}), ];
        obj = {};
        const obj1 = {};
        let DARK;
        if (!closure_11) {
          DARK = outer1_18.DARK;
        }
        obj1.theme = DARK;
        obj1.children = outer1_19(outer1_34, { appThemedBackgroundColor: token });
        obj.children = outer1_19(isRendered(3842).ThemeContextProvider, obj1);
        items[2] = outer1_19(isRendered(14045).QuestDockGestureContextProvider, obj);
        obj.children = items;
        return outer1_20(outer1_21, obj);
      };
      obj1.children = jsx(require("_createForOfIteratorHelperLoose").QuestContentImpressionTrackerNative, obj2);
      tmp19 = jsx(require("module_3991").View, obj1);
    }
    return tmp19;
  }
}
({ View: closure_6, StyleSheet, Pressable: closure_7, Image: closure_8 } = get_ActivityIndicator);
({ QuestDockMode: closure_10, QuestsExperimentLocations: closure_11 } = QuestsExperimentLocations);
({ QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_12, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_13, QUEST_DOCK_CONTENT_BORDER_RADII: closure_14, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_15, QUEST_DOCK_COLLAPSED_HEIGHT: closure_16 } = QUEST_DOCK_COLLAPSED_HEIGHT);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
let obj = { wrapper: { position: "absolute", left: "50%", bottom: 0, zIndex: 1 } };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["zIndex"] = 1;
obj.accessibilityWrapper = obj;
_createForOfIteratorHelperLoose = { position: "absolute", bottom: 0, left: "50%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").modules.mobile.QUEST_DOCK_BORDER_RADIUS, zIndex: 1 };
obj.questDockWrapper = _createForOfIteratorHelperLoose;
let obj2 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj2["justifyContent"] = "flex-end";
obj2["zIndex"] = 4;
obj.questDockContentWrapper = obj2;
let obj3 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj3["bottom"] = undefined;
obj3["right"] = undefined;
obj3["borderWidth"] = 1;
obj3["borderColor"] = require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED;
obj3["zIndex"] = 5;
obj.questDockHeaderBorder = obj3;
let obj4 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj4["zIndex"] = 6;
obj.nestedPressable = obj4;
let closure_22 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_23 = { code: "function QuestDockTsx1(){const{restingQuestDockMode,QuestDockMode}=this.__closure;return restingQuestDockMode.get()===QuestDockMode.EXPANDED;}" };
let closure_24 = { code: "function QuestDockTsx2(){const{appThemedBackgroundColor,withSpring,bottomBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_MODE_CHANGE_PHYSICS,roundToNearestPixel}=this.__closure;return{backgroundColor:appThemedBackgroundColor,borderBottomRightRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomLeftRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:questDockWrapperSpecs.get().height,width:questDockWrapperSpecs.get().width,opacity:withSpring(1,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(questDockWrapperSpecs.get().x+roundToNearestPixel(questDockWrapperSpecs.get().width/2)*-1,QUEST_DOCK_MODE_CHANGE_PHYSICS)},{translateY:withSpring(questDockWrapperSpecs.get().y,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}" };
let closure_25 = { code: "function QuestDockTsx3(){const{withSpring,interpolate,isPressed,springStandard}=this.__closure;return{transform:[{scale:withSpring(interpolate(isPressed.get(),[1,0],[1,1]),springStandard)}]};}" };
let closure_26 = { code: "function QuestDockTsx4(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,windowDimensions}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),height:windowDimensions.get().height};}" };
let closure_27 = { code: "function QuestDockTsx5(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};}" };
let closure_28 = { code: "function QuestDockTsx6(){const{questDockWrapperSpecs,windowDimensions,safeAreaTop}=this.__closure;const specs=questDockWrapperSpecs.get();const windowHeight=windowDimensions.get().height;return windowHeight-safeAreaTop-specs.height;}" };
let closure_29 = { code: "function QuestDockTsx7(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
let closure_30 = { code: "function QuestDockTsx8(){const{isEnrolled,activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,bottomBorderRadius,withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_COLLAPSED_HEIGHT,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED}=this.__closure;return{borderTopLeftRadius:!isEnrolled&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:!isEnrolled&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:!isEnrolled&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),borderBottomRightRadius:!isEnrolled&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:activeQuestDockMode.get()===QuestDockMode.EXPANDED?isEnrolled?questDockWrapperSpecs.get().height:QUEST_DOCK_COLLAPSED_HEIGHT:questDockWrapperSpecs.get().height,width:activeQuestDockMode.get()===QuestDockMode.EXPANDED&&!isEnrolled?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:isEnrolled?0:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:isEnrolled?0:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}],borderBottomWidth:bottomBorderRadius.get()>0?1:0};}" };
let closure_31 = _createForOfIteratorHelperLoose.createStyles(() => ({ wrapperAnimated: { position: "absolute", bottom: 0, padding: 0, width: "100%" } }));
let obj5 = {};
const merged4 = Object.assign(require("SUBTLE_SPRING").SUBTLE_SPRING);
obj5["overshootClamping"] = true;
obj5["damping"] = 54;
let closure_33 = { code: "function QuestDockTsx9(){const{withSpring,isRendered,ENTRANCE_ANIMATION_SPING_CONFIG,componentDimensions}=this.__closure;return{opacity:withSpring(isRendered?1:0,ENTRANCE_ANIMATION_SPING_CONFIG,'animate-always'),transform:[{translateY:withSpring(isRendered?0:componentDimensions.height,ENTRANCE_ANIMATION_SPING_CONFIG)}]};}" };
const memoResult = importAllResult.memo(function QuestDockWithQuestContext() {
  let obj = require(14040) /* useIsMobileQuestDockRenderedBase */;
  const mobileQuestDock = obj.useMobileQuestDock();
  const isMobileQuestDockRenderedBase = require(14040) /* useIsMobileQuestDockRenderedBase */.useIsMobileQuestDockRenderedBase(mobileQuestDock);
  require(14040) /* useIsMobileQuestDockRenderedBase */;
  let tmp5 = null;
  if (null != mobileQuestDock) {
    obj = {};
    obj = { isRendered: isMobileQuestDockRenderedBase, isVisibleToUser: tmp4, quest: mobileQuestDock };
    obj.value = obj;
    obj.children = callback(QuestDockWithEntranceAnimation, {});
    tmp5 = callback(importDefault(14126).Provider, obj);
  }
  return tmp5;
});
let result = require("result").fileFinishedImporting("modules/quests/native/QuestDock/QuestDock.tsx");

export default memoResult;
export { QuestDockWithEntranceAnimation };
