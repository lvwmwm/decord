// Module ID: 17084
// Function ID: 17085
// Name: QuestDock
// Dependencies: [5, 32, 109, 19, 17, 16999, 6775, 17001, 1072, 1083, 21, 5009, 575, 1376, 17029, 16998, 17002, 17005, 5269, 5090, 8833, 1626, 17006, 5591, 17085, 5632, 17000, 5633, 6013, 17086, 7235, 1114, 17087, 17088, 17089, 5593, 9661, 6778, 17090, 6534, 6539, 6782, 7864, 17083, 504, 9653, 9662, 5075, 16997, 1253, 17091, 17092, 17099, 17100, 17102, 14647, 17105, 17106, 17112, 17115, 17117, 17118, 17119, 17120, 17121, 7106, 17123, 2]

// Module 17084 (QuestDock)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import Constants2 from "Constants" /* 1083 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import native from "native" /* 5075 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import spring from "spring" /* 5632 */;
import springPresets from "springPresets" /* 5633 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 6534 */;
import MetricEvents from "MetricEvents" /* 6539 */;
import QuestTypes from "QuestTypes" /* 6778 */;
import AdCreativeType from "AdCreativeType" /* 6782 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 9661 */;
import QuestActionCreators from "QuestActionCreators" /* 9662 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 14647 */;
import QuestDockUtils from "QuestDockUtils" /* 17000 */;
import QuestDockGestureContext from "QuestDockGestureContext" /* 17002 */;
import QuestDockBountyHeaderDefault from "QuestDockBountyHeader" /* 17112 */;
import QuestDockBountyBodyDefault from "QuestDockBountyBody" /* 17115 */;
import QuestDockBountyBackgroundDefault from "QuestDockBountyBackground" /* 17117 */;
import QuestDockPlayableHeaderDefault from "QuestDockPlayableHeader" /* 17118 */;
import QuestDockPlayableBodyDefault from "QuestDockPlayableBody" /* 17119 */;
import QuestDockPlayableBackgroundDefault from "QuestDockPlayableBackground" /* 17120 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import QuestDockStore from "QuestDockStore" /* 16999 */;
import QuestConstants from "QuestConstants" /* 6775 */;
import QuestDockConstants from "QuestDockConstants" /* 17001 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let c2, c3, c5, c6, expandedHeight, importDefault;

let StyleSheet;
let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_23;
let closure_24;
let closure_25;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let rect;
function QuestDockWithGestureAnimation(backgroundColor) {
  let AccessibilityViewAnimated;
  let backgroundContent;
  let closure_1;
  let collapsedContent;
  let expandedContent;
  let intl;
  let items10;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let layoutVariant;
  let obj25;
  let obj27;
  let obj34;
  let obj36;
  let questDockExpandHandler;
  let setRestingQuestDockMode;
  let str3;
  let str4;
  let tmp19Result;
  let tmp19Result7;
  let tmp40;
  let withAndroidOffscreenAlphaCompositingWorkaround;
  backgroundColor = backgroundColor.backgroundColor;
  ({ layoutVariant, withAndroidOffscreenAlphaCompositingWorkaround } = backgroundColor);
  let isAndroidResult = undefined !== withAndroidOffscreenAlphaCompositingWorkaround;
  ({ expandedHeight, collapsedContent, expandedContent, backgroundContent } = backgroundColor);
  if (isAndroidResult) {
    isAndroidResult = withAndroidOffscreenAlphaCompositingWorkaround;
  }
  if (isAndroidResult) {
    let obj = backgroundColor(questDockExpandHandler[13]);
    isAndroidResult = obj.isAndroid();
  }
  let tmp4 = "insetHeader" === layoutVariant;
  importDefault = tmp4;
  let str = "fixed";
  if ("flush" === layoutVariant) {
    str = "content";
  }
  let str2 = "overlay";
  if ("flush" === layoutVariant) {
    str2 = "default";
  }
  let tmp7 = questDockExpandHandler;
  let obj2 = backgroundColor(questDockExpandHandler[14]);
  const questDockCreative = obj2.useQuestDockCreative();
  let obj3 = backgroundColor(questDockExpandHandler[15]);
  questDockExpandHandler = obj3.useQuestDockExpandHandler(questDockCreative);
  const tmp10 = closure_26();
  const context = setRestingQuestDockMode.useContext(backgroundColor(questDockExpandHandler[16]).QuestDockGestureContext);
  const questDockWrapperSpecs = context.questDockWrapperSpecs;
  const activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  const context1 = setRestingQuestDockMode.useContext(backgroundColor(questDockExpandHandler[17]).QuestDockExternalCoordinationContext);
  const restingQuestDockMode = context1.restingQuestDockMode;
  setRestingQuestDockMode = context1.setRestingQuestDockMode;
  let items = [setRestingQuestDockMode];
  const id = setRestingQuestDockMode.useId();
  const callback = setRestingQuestDockMode.useCallback(() => {
    setRestingQuestDockMode(constants.COLLAPSED);
  }, items);
  let obj4 = backgroundColor(questDockExpandHandler[15]);
  const questDockModeAnimatedReaction = obj4.useQuestDockModeAnimatedReaction();
  let obj5 = backgroundColor(questDockExpandHandler[15]);
  const questDockDismissalReset = obj5.useQuestDockDismissalReset();
  obj6 = backgroundColor(questDockExpandHandler[18]);
  const isScreenReaderEnabled = obj6.useIsScreenReaderEnabled();
  const obj7 = backgroundColor(questDockExpandHandler[19]);
  class J {
    constructor() {
      return restingQuestDockMode.get() === constants.EXPANDED;
    }
  }
  let obj8 = { restingQuestDockMode, QuestDockMode };
  J.__closure = obj8;
  J.__workletHash = 2415817673061;
  J.__initData = __initData;
  const derivedValue = obj7.useDerivedValue(J);
  const tmp20 = require("useStateFromSharedValue")(derivedValue);
  const top = require("useSafeAreaInsets")().top;
  const obj9 = backgroundColor(questDockExpandHandler[22]);
  const youBarTotalHeight = obj9.useYouBarTotalHeight();
  const obj10 = backgroundColor(questDockExpandHandler[23]);
  const token = obj10.useToken(require("native").modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp23 = require("useQuestDockAnimatedBorderRadius")(token);
  let closure_10 = tmp23;
  const obj11 = backgroundColor(questDockExpandHandler[19]);
  class Z {
    constructor() {
      let items;
      let obj2;
      let obj3;
      let obj4;
      let obj8;
      let withSpring;
      let x;
      size = { backgroundColor, borderBottomRightRadius: obj2.withSpring(closure_10.get(), closure_15), borderBottomLeftRadius: obj3.withSpring(closure_10.get(), closure_15), height: questDockWrapperSpecs.get().height, width: questDockWrapperSpecs.get().width, opacity: obj4.withSpring(1, closure_14), transform: items };
      obj2 = spring;
      obj3 = spring;
      obj4 = spring;
      const obj = { translateX: withSpring(x + -1 * obj6.roundToNearestPixel(questDockWrapperSpecs.get().width / 2), closure_14) };
      withSpring = spring.withSpring;
      spring;
      x = questDockWrapperSpecs.get().x;
      items = [obj, ];
      obj6 = QuestDockUtils;
      const obj5 = { translateY: obj8.withSpring(questDockWrapperSpecs.get().y, closure_14) };
      items[1] = obj5;
      obj8 = spring;
      return size;
    }
  }
  Z.__closure = { backgroundColor, withSpring: backgroundColor(questDockExpandHandler[25]).withSpring, bottomBorderRadius: tmp23, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs, QUEST_DOCK_MODE_CHANGE_PHYSICS, roundToNearestPixel: backgroundColor(questDockExpandHandler[26]).roundToNearestPixel };
  Z.__workletHash = 9565489600157;
  Z.__initData = __initData2;
  ({ backgroundColor, withSpring: backgroundColor(questDockExpandHandler[25]).withSpring, bottomBorderRadius: tmp23, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs, QUEST_DOCK_MODE_CHANGE_PHYSICS, roundToNearestPixel: backgroundColor(questDockExpandHandler[26]).roundToNearestPixel });
  const animatedStyle = obj11.useAnimatedStyle(Z);
  const obj13 = backgroundColor(questDockExpandHandler[19]);
  const sharedValue = obj13.useSharedValue(0);
  function ee() {
    let interpolateResult;
    let items;
    let withSpring;
    const obj = { transform: items };
    const obj2 = { scale: withSpring(interpolateResult, springPresets.springStandard) };
    withSpring = spring.withSpring;
    spring;
    const obj3 = ReanimatedRexport;
    items = [obj2];
    interpolateResult = obj3.interpolate(sharedValue.get(), [1, 0], [1, 1]);
    return obj;
  }
  const obj14 = backgroundColor(questDockExpandHandler[19]);
  ee.__closure = { withSpring: backgroundColor(questDockExpandHandler[25]).withSpring, interpolate: backgroundColor(questDockExpandHandler[19]).interpolate, isPressed: sharedValue, springStandard: backgroundColor(questDockExpandHandler[27]).springStandard };
  ee.__workletHash = 3373473585356;
  ee.__initData = __initData3;
  const items1 = [setRestingQuestDockMode, questDockExpandHandler];
  ({ withSpring: backgroundColor(questDockExpandHandler[25]).withSpring, interpolate: backgroundColor(questDockExpandHandler[19]).interpolate, isPressed: sharedValue, springStandard: backgroundColor(questDockExpandHandler[27]).springStandard });
  const animatedStyle1 = obj14.useAnimatedStyle(ee);
  const items2 = [sharedValue];
  const callback1 = setRestingQuestDockMode.useCallback(() => {
    setRestingQuestDockMode(constants.EXPANDED);
    questDockExpandHandler();
  }, items1);
  const items3 = [sharedValue];
  const callback2 = setRestingQuestDockMode.useCallback(() => {
    const result = sharedValue.set(1);
  }, items2);
  const callback3 = setRestingQuestDockMode.useCallback(() => {
    const result = sharedValue.set(0);
  }, items3);
  function te() {
    const withSpring = spring.withSpring;
    let num = 0;
    spring;
    if (activeQuestDockMode.get() === constants.EXPANDED) {
      num = 1;
    }
    const obj = { opacity: withSpring(num, closure_14), height: windowDimensions.get().height };
    return obj;
  }
  const obj16 = backgroundColor(questDockExpandHandler[19]);
  te.__closure = { withSpring: backgroundColor(questDockExpandHandler[25]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS, windowDimensions };
  te.__workletHash = 6178969276321;
  te.__initData = __initData4;
  ({ withSpring: backgroundColor(questDockExpandHandler[25]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS, windowDimensions });
  const animatedStyle2 = obj16.useAnimatedStyle(te);
  function oe() {
    let pointerEvents = "none";
    if (activeQuestDockMode.get() === constants.EXPANDED) {
      pointerEvents = "auto";
    }
    return { pointerEvents };
  }
  oe.__closure = { activeQuestDockMode, QuestDockMode };
  oe.__workletHash = 5416180055289;
  oe.__initData = __initData5;
  const obj18 = backgroundColor(questDockExpandHandler[19]);
  const animatedProps = obj18.useAnimatedProps(oe);
  function ie() {
    const value = questDockWrapperSpecs.get();
    return windowDimensions.get().height - top - value.height;
  }
  ie.__closure = { questDockWrapperSpecs, windowDimensions, safeAreaTop: top };
  ie.__workletHash = 8073454569923;
  ie.__initData = __initData6;
  const obj19 = backgroundColor(questDockExpandHandler[19]);
  const derivedValue1 = obj19.useDerivedValue(ie);
  function re() {
    let num;
    const withSpring = spring.withSpring;
    spring;
    if (activeQuestDockMode.get() === constants.CLOSED) {
      num = 0;
    } else {
      num = 1;
    }
    const obj2 = { opacity: withSpring(num, closure_14) };
    return obj2;
  }
  const tmp33 = require("useStateFromSharedValue")(derivedValue1);
  const obj20 = backgroundColor(questDockExpandHandler[19]);
  re.__closure = { withSpring: backgroundColor(questDockExpandHandler[25]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  re.__workletHash = 6468803634518;
  re.__initData = __initData7;
  ({ withSpring: backgroundColor(questDockExpandHandler[25]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS });
  const animatedStyle3 = obj20.useAnimatedStyle(re);
  function ne() {
    if (closure_1) {
      let tmp4;
      if (activeQuestDockMode.get() === constants.EXPANDED) {
        tmp4 = closure_16;
      }
      size = { borderTopLeftRadius: tmp4, borderTopRightRadius: null, borderBottomLeftRadius: null, borderBottomRightRadius: null, opacity: null, height: null, width: null, transform: null, borderBottomWidth: null };
      if (closure_1) {
        let tmp7;
        if (activeQuestDockMode.get() === constants.EXPANDED) {
          tmp7 = closure_16;
        }
        size.borderTopRightRadius = tmp7;
        if (closure_1) {
          let value2;
          if (activeQuestDockMode.get() === constants.EXPANDED) {
            value2 = closure_16;
          }
          size.borderBottomLeftRadius = value2;
          if (closure_1) {
            let value;
            if (activeQuestDockMode.get() === constants.EXPANDED) {
              value = closure_16;
            }
            size.borderBottomRightRadius = value;
            const withSpring = spring.withSpring;
            let num2 = 1;
            spring;
            if (activeQuestDockMode.get() === constants.EXPANDED) {
              num2 = 0;
            }
            size.opacity = withSpring(num2, closure_15);
            if (activeQuestDockMode.get() === constants.EXPANDED) {
              let height;
              if (closure_1) {
                height = closure_18;
              }
              size.height = height;
              if (activeQuestDockMode.get() === constants.EXPANDED) {
                let width;
                if (closure_1) {
                  width = questDockWrapperSpecs.get().width - 2 * closure_17;
                }
                size.width = width;
                let num5 = 0;
                if (closure_1) {
                  const withSpring2 = spring.withSpring;
                  let num6 = 0;
                  spring;
                  if (activeQuestDockMode.get() === constants.EXPANDED) {
                    num6 = closure_17;
                  }
                  num5 = withSpring2(num6, tmp20);
                }
                const items = [{ translateX: num5 }, ];
                let num7 = 0;
                const obj = { translateX: num5 };
                if (closure_1) {
                  const withSpring3 = spring.withSpring;
                  let num8 = 0;
                  spring;
                  if (activeQuestDockMode.get() === constants.EXPANDED) {
                    num8 = closure_17;
                  }
                  num7 = withSpring3(num8, tmp20);
                }
                const obj3 = { translateY: num7 };
                items[1] = obj3;
                size.transform = items;
                let num9 = 0;
                if (closure_10.get() > 0) {
                  num9 = 1;
                }
                size.borderBottomWidth = num9;
                return size;
              }
              width = questDockWrapperSpecs.get().width;
            }
            height = questDockWrapperSpecs.get().height;
          }
          value = closure_10.get();
        }
        value2 = closure_10.get();
      }
      tmp7 = token;
    }
    tmp4 = token;
  }
  const obj22 = backgroundColor(questDockExpandHandler[19]);
  ne.__closure = { hasInsetHeaderTile: tmp4, activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, bottomBorderRadius: tmp23, withSpring: backgroundColor(questDockExpandHandler[25]).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, QUEST_DOCK_COLLAPSED_HEIGHT, questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_17 };
  ne.__workletHash = 13161475723910;
  ne.__initData = __initData8;
  const obj24 = { style: tmp10.wrapper, pointerEvents: "auto", children: closure_23(AccessibilityViewAnimated, obj25) };
  ({ hasInsetHeaderTile: tmp4, activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, bottomBorderRadius: tmp23, withSpring: backgroundColor(questDockExpandHandler[25]).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, QUEST_DOCK_COLLAPSED_HEIGHT, questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_17 });
  const animatedStyle4 = obj22.useAnimatedStyle(ne);
  obj25 = { nativeID: id, style: tmp10.accessibilityWrapper, accessibilityViewIsModal: tmp40, onAccessibilityEscape: callback, pointerEvents: "box-none", children: closure_23(tmp19Result, obj34) };
  tmp40 = isScreenReaderEnabled;
  AccessibilityViewAnimated = backgroundColor(questDockExpandHandler[28]).AccessibilityViewAnimated;
  const tmp37 = closure_25;
  if (tmp40) {
    tmp40 = tmp20;
  }
  const obj26 = { style: animatedStyle1, children: closure_24(tmp19Result7, obj27) };
  tmp19Result = require("QuestDockGestureDetector");
  obj27 = { style: items4, layout: backgroundColor(tmp7[26]).dimensionsLayoutTransition, children: items5 };
  items4 = [tmp10.questDockWrapper, , ];
  const obj28 = { bottom: youBarTotalHeight - 1 };
  items4[1] = obj28;
  items4[2] = animatedStyle;
  const tmp19Result6 = require("ReanimatedNativeView");
  tmp19Result7 = require("ReanimatedNativeView");
  const obj29 = { style: tmp10.nestedPressable, onPressIn: callback2, onPressOut: callback3, onPress: callback1, pointerEvents: str3, accessibilityRole: "button", accessibilityLabel: intl.string(backgroundColor(tmp7[31]).t.rjVPdM), accessibilityHint: str4 };
  str3 = "auto";
  const tmp44 = token;
  if (tmp20) {
    str3 = "none";
  }
  intl = tmp6(tmp7[31]).intl;
  str4 = "";
  if (!tmp20) {
    const intl2 = tmp6(tmp7[31]).intl;
    str4 = intl2.string(tmp6(tmp7[31]).t.n0MlOB);
  }
  items5 = [closure_23(tmp44, obj29), , , ];
  const obj30 = { style: items6, layout: backgroundColor(tmp7[26]).dimensionsLayoutTransition, pointerEvents: "none" };
  items6 = [tmp10.questDockHeaderBorder, animatedStyle4];
  const tmp19Result8 = require("ReanimatedNativeView");
  items5[1] = closure_23(tmp19Result8, obj30);
  const obj31 = { style: items7, needsOffscreenAlphaCompositing: isAndroidResult, children: items9 };
  items7 = [tmp10.questDockContentWrapper, animatedStyle3];
  const obj32 = { style: tmp10.questDockContentWrapper, children: items8 };
  items8 = [, ];
  const tmp19Result9 = require("ReanimatedNativeView");
  items8[0] = closure_23(require("QuestDockContentCollapsed"), { hideOnExpand: "flush" === layoutVariant, children: collapsedContent });
  items8[1] = closure_23(require("QuestDockContentExpanded"), { expandedHeightMode: str, expandedHeight, children: expandedContent });
  items9 = [closure_24(top, obj32), backgroundContent];
  let str5 = "no-offscreen-compositing";
  if (isAndroidResult) {
    str5 = "offscreen-compositing";
  }
  const obj33 = { children: items10 };
  obj34 = { children: closure_23(tmp19Result6, obj26) };
  items5[2] = closure_24(tmp19Result9, obj31, str5);
  items5[3] = closure_23(require("QuestDockDragHandle"), { isExpanded: tmp20, variant: str2 });
  items10 = [closure_23(top, obj24), ];
  const obj35 = { style: animatedStyle2, animatedProps, children: closure_23(backgroundColor(tmp7[35]).Backdrop, obj36) };
  obj36 = { onDismiss: callback, accessibleDismissStyle: { height: tmp33 } };
  const tmp19Result10 = require("ReanimatedNativeView");
  items10[1] = closure_23(tmp19Result10, obj35);
  return closure_24(tmp37, obj33);
}
function QuestDockModeChangeTracker(mode) {
  mode = mode.mode;
  const tmp = _objectWithoutProperties(mode, closure_3);
  const obj = { mode, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
  const useQuestBarOrDockModeChangeTracking = hooks_QuestHooks.useQuestBarOrDockModeChangeTracking;
  hooks_QuestHooks;
  const merged = Object.assign(tmp);
  const questBarOrDockModeChangeTracking = useQuestBarOrDockModeChangeTracking(obj);
  return null;
}
function QuestBarRenderedTriggerPointWrapper() {
  const effect = react.useEffect(() => {
    const QuestBarRenderedTriggerPoint = require("QuestBarRenderedTriggerPoint").QuestBarRenderedTriggerPoint;
    QuestBarRenderedTriggerPoint.trigger();
  }, []);
  return null;
}
function QuestDockWithEntranceAnimation(adCreativeType) {
  let adCreativeId;
  let backgroundColor;
  let backgroundContent;
  let backgroundImageUrl;
  let closure_10;
  let closure_16;
  let closure_8;
  let closure_9;
  let componentDimensions;
  let expandedContent;
  let first1;
  let iconUrl;
  let items4;
  let layoutVariant;
  let obj7;
  let renderImpressionTracker;
  let require;
  let theme;
  let trackAssetLoadingFailure;
  ({ renderModeChangeTracker: require, adCreativeId } = adCreativeType);
  adCreativeType = adCreativeType.adCreativeType;
  ({ backgroundImageUrl, iconUrl, layoutVariant: closure_3, theme: _asyncToGenerator, backgroundColor: _slicedToArray, expandedHeight: _objectWithoutProperties, collapsedContent: react, expandedContent: closure_8, backgroundContent: closure_9, withAndroidOffscreenAlphaCompositingWorkaround: closure_10 } = adCreativeType);
  let obj = react;
  ({ renderImpressionTracker, trackAssetLoadingFailure } = adCreativeType);
  let tmp = adCreativeId;
  const tmp2 = adCreativeType;
  const context = react.useContext(adCreativeId(adCreativeType[43]));
  const isRendered = context.isRendered;
  const isVisibleToUser = context.isVisibleToUser;
  let obj2 = require("get initialized");
  let items = [isRendered];
  const mode = obj2.useStateFromStores(items, () => isRendered.prevRestingQuestDockMode);
  let closure_13 = _slicedToArray(react.useState(() => performance.now()), 1)[0];
  const ref = react.useRef(false);
  const tmp4 = closure_38();
  [componentDimensions, closure_16] = react.useState({ width: 0, height: 0 });
  let obj3 = require("QuestsEligibility");
  const isEligibleForQuests = obj3.getIsEligibleForQuests();
  let obj4 = require("ReanimatedRexport");
  const fn = function s() {
    let items;
    let num = 0;
    const withSpring = spring.withSpring;
    spring;
    if (isRendered) {
      num = 1;
    }
    let num2 = 0;
    const obj = { opacity: withSpring(num, obj6, "animate-always"), transform: items };
    const withSpring2 = tmp(5632).withSpring;
    spring;
    if (!isRendered) {
      num2 = first.height;
    }
    items = [{ translateY: withSpring2(num2, tmp5) }];
    ({ translateY: withSpring2(num2, obj6) });
    return obj;
  };
  let obj5 = { withSpring: require("spring").withSpring, isRendered, ENTRANCE_ANIMATION_SPING_CONFIG: obj6, componentDimensions };
  fn.__closure = obj5;
  fn.__workletHash = 15545726338295;
  fn.__initData = __initData9;
  first1 = undefined;
  expandedHeight = undefined;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  [first1, expandedHeight] = react.useState(constants2.PENDING);
  const collapsedContent = react.useEffectEvent((arg0) => {
    if (trackAssetLoadingFailure != null) {
      tmp(arg0);
    }
  });
  const items1 = [backgroundImageUrl, iconUrl];
  const effect = react.useEffect(() => {
    function preloadQuestDockAssets() {
      obj(...arguments);
    }
    function prefetchWithErrorReporting(arg0) {
      return obj(...arguments);
    }
    let obj = function _prefetchWithErrorReporting() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let closure_0 = arg0;
        if (c6 === 2) {
          c6 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          let c4;
          try {
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_2 = tmp;
                let closure_1 = tmp4;
                c4 = 1;
                c5 = 2;
                c6 = 1;
                const obj4 = { value: closure_2_10.prefetch(closure_0), done: false };
                return obj4;
              }
            } else if (1 === c5) {
              c4 = 0;
              closure_1_7(closure_0);
              c6 = 3;
              return { value: false, done: true };
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c4 = 0;
              c6 = 3;
              return { value: true, done: true };
            }
          } catch (tmp13) {
            closure_3 = tmp13;
            if (0 === c4) {
              c6 = 3;
              throw tmp13;
            } else {
              c5 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    obj = function _preloadQuestDockAssets() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let closure_0;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            let tmp;
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_1 = tmp4;
                tmp = undefined;
                const items = [];
                if (null != c2) {
                  items.push(prefetchWithErrorReporting(tmp22));
                }
                if (null != c3) {
                  items.push(prefetchWithErrorReporting(tmp14));
                }
                c2 = 1;
                c3 = 1;
                const obj4 = { value: Promise.all(items), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              let FAILED;
              tmp = value;
              const tmp7 = closure_1_6;
              if (tmp.every((item) => true === item)) {
                FAILED = tmp10.SUCCEEDED;
              } else {
                FAILED = tmp10.FAILED;
              }
              tmp7(FAILED);
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp18) {
            c3 = 3;
            throw tmp18;
          }
        }
      });
      return obj(...arguments);
    };
    let tmp = preloadQuestDockAssets();
  }, items1);
  const items2 = [first1, adCreativeId, adCreativeType];
  const effect1 = react.useEffect(() => {
    let items;
    if (first1 === constants.FAILED) {
      const obj = { name: require("MetricEvents").MetricEvents.QUEST_CONTENT_RENDERING_FAILURE, tags: items };
      const increment = adCreativeId(adCreativeType[39]).increment;
      adCreativeId(adCreativeType[39]);
      const _HermesInternal = HermesInternal;
      items = ["ad_creative_id:" + adCreativeId, , , ];
      const _HermesInternal2 = HermesInternal;
      items[1] = "ad_creative_type:" + require("AdCreativeType").AdCreativeType[adCreativeType];
      const _HermesInternal3 = HermesInternal;
      const obj2 = require("AnalyticsTypes");
      items[2] = "quest_content:" + obj2.getQuestContentName(require("QuestTypes").QuestContent.QUEST_BAR_MOBILE);
      items[3] = "reason:asset_loading_error";
      increment(obj);
    }
  }, items2);
  let tmp14 = !isEligibleForQuests;
  const tmp9 = constants2;
  if (isEligibleForQuests) {
    tmp14 = first1 !== tmp9.SUCCEEDED;
  }
  let closure_17 = tmp14;
  const items3 = [tmp14];
  const effect2 = obj.useEffect(() => {
    let obj = QuestActionCreators;
    const obj2 = { isEligibleToBeVisible: !closure_17 };
    let result = obj.updateQuestDockVisibilityEligibility(obj2);
    return () => {
      const obj = closure_1_0(adCreativeType[46]);
      const result = obj.updateQuestDockVisibilityEligibility({ isEligibleToBeVisible: false });
    };
  }, items3);
  let tmp16 = null;
  if (!tmp14) {
    obj6 = {
      pointerEvents: "box-none",
      style: items4,
      onLayout(height) {
          let items;
          size = { height: height.nativeEvent.layout.height, width: height.nativeEvent.layout.width };
          closure_16(size);
          if (!ref.current) {
            tmp2.current = true;
            const _Math = Math;
            if (Math.random() < 0.1) {
              const _Math2 = Math;
              const _performance = performance;
              const rounded = Math.round(performance.now() - closure_13);
              const obj = { name: MetricEvents.MetricEvents.QUEST_BAR_MOBILE_TIME_TO_FIRST_PAINT, tags: items };
              const distribution = MonitoringAgentDefault.distribution;
              MonitoringAgentDefault;
              const _HermesInternal = HermesInternal;
              items = ["ad_creative_id:" + adCreativeId, ];
              const _HermesInternal2 = HermesInternal;
              items[1] = "ad_creative_type:" + AdCreativeType.AdCreativeType[adCreativeType];
              distribution(obj, rounded);
            }
          }
        },
      children: renderImpressionTracker(obj7)
    };
    items4 = [tmp4.wrapperAnimated, animatedStyle];
    obj7 = {
      children() {
          let ThemeContextProvider;
          let items;
          let obj4;
          let obj5;
          const obj = { children: items };
          items = [, , ];
          const obj2 = { mode };
          items[0] = _require(obj2);
          items[1] = closure_23(QuestBarRenderedTriggerPointWrapper, {});
          const obj3 = { expandedHeight: _objectWithoutProperties, children: closure_23(ThemeContextProvider, obj4) };
          const QuestDockGestureContextProvider = QuestDockGestureContext.QuestDockGestureContextProvider;
          obj4 = { theme: _asyncToGenerator, children: closure_23(QuestDockWithGestureAnimation, obj5) };
          obj5 = { backgroundColor: _slicedToArray, layoutVariant, expandedHeight: _objectWithoutProperties, collapsedContent: react, expandedContent, backgroundContent, withAndroidOffscreenAlphaCompositingWorkaround: closure_10 };
          ThemeContextProvider = native.ThemeContextProvider;
          items[2] = closure_23(QuestDockGestureContextProvider, obj3);
          return closure_24(closure_25, obj);
        },
      overrideVisibility: isVisibleToUser
    };
    const View = tmp(tmp2[19]).View;
    tmp16 = closure_23(View, obj6);
  }
  return tmp16;
}
class QuestDockQuestContent {
  constructor(quest) {
    let DARK;
    let str;
    let tmp7Result;
    let tmp8;
    quest = quest.quest;
    let obj = quest(9661);
    const onImpression = obj.useQuestBarImpressionSurvey(quest);
    let obj2 = quest(16998);
    const questDockAppThemedBackgroundColor = obj2.useQuestDockAppThemedBackgroundColor();
    const obj3 = quest(16997);
    const staticUrl = obj3.useQuestDockHeroAsset(quest).staticUrl;
    const userStatus = quest.userStatus;
    let enrolledAt;
    const obj4 = quest(16997);
    const questGameLogotypeAssetUrl = obj4.useQuestGameLogotypeAssetUrl(quest);
    if (userStatus != null) {
      enrolledAt = userStatus.enrolledAt;
    }
    const obj5 = { quest, children: closure_23(tmp8, obj6) };
    obj6 = {
      adCreativeId: quest.id,
      adCreativeType: quest(6782).AdCreativeType.QUEST,
      backgroundImageUrl: staticUrl,
      iconUrl: questGameLogotypeAssetUrl,
      trackAssetLoadingFailure(asset_id) {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { quest_id: quest.id, source: map1.QUESTS_BAR_MOBILE, asset_id };
        obj.track(AnalyticEvents.QUEST_ASSET_LOADING_FAILURE, obj2);
      },
      layoutVariant: str,
      theme: DARK,
      backgroundColor: questDockAppThemedBackgroundColor,
      expandedHeight,
      collapsedContent: closure_23(onImpression(null != enrolledAt ? 17091 : 17092), {}),
      expandedContent: closure_23(onImpression(null != enrolledAt ? 17099 : 17100), {}),
      backgroundContent: tmp7Result,
      renderImpressionTracker(arg0) {
        let children;
        let overrideVisibility;
        ({ children, overrideVisibility } = arg0);
        const obj = { questOrQuests: quest, overrideVisibility, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, onImpression, children };
        const BillableAdPlacementImpressionTrackerNative = QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative;
        return closure_23(BillableAdPlacementImpressionTrackerNative, obj);
      },
      renderModeChangeTracker(mode) {
        const obj = { questId: quest.id, mode: mode.mode };
        return closure_23(QuestDockModeChangeTracker, obj);
      }
    };
    const QuestDockQuestProvider = tmp(17029).QuestDockQuestProvider;
    str = "insetHeader";
    tmp8 = QuestDockWithEntranceAnimation;
    if (null != enrolledAt) {
      str = "flush";
    }
    DARK = undefined;
    if (null == enrolledAt) {
      DARK = ThemeTypes.DARK;
    }
    tmp7Result = null;
    if (null == enrolledAt) {
      tmp7Result = tmp7(tmp11(17102), {});
    }
    return closure_23(QuestDockQuestProvider, obj5);
  }
}
function QuestDockBountyContent(bounty) {
  bounty = bounty.bounty;
  let obj = bounty(16998);
  const bountyPreviewImageUrl = obj.useBountyPreviewImageUrl(bounty);
  let obj2 = bounty(16998);
  const questDockAppThemedBackgroundColor = obj2.useQuestDockAppThemedBackgroundColor();
  const obj3 = bounty(17105);
  const questDockBountySmokeCollapsedPlaceholderUrl = obj3.useQuestDockBountySmokeCollapsedPlaceholderUrl();
  const obj4 = bounty(17106);
  const isBountiesAndroidQuestBarSmokeAnimationEnabled = obj4.useIsBountiesAndroidQuestBarSmokeAnimationEnabled(constants.QUESTS_BAR_MOBILE);
  const obj5 = { bounty, children: closure_23(QuestDockWithEntranceAnimation, obj6) };
  obj6 = {
    adCreativeId: bounty.id,
    adCreativeType: bounty(6782).AdCreativeType.BOUNTY,
    backgroundImageUrl: questDockBountySmokeCollapsedPlaceholderUrl,
    iconUrl: bounty.productIcon,
    trackAssetLoadingFailure(asset_id) {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { source: map1.QUESTS_BAR_MOBILE, ad_creative_id: bounty.id, ad_creative_type: AdCreativeType.AdCreativeType.BOUNTY, asset_id };
      obj.track(AnalyticEvents.AD_ASSET_LOADING_FAILURE, obj2);
    },
    layoutVariant: "insetHeader",
    theme: ThemeTypes.DARK,
    backgroundColor: questDockAppThemedBackgroundColor,
    expandedHeight: expandedHeight2,
    collapsedContent: closure_23(QuestDockBountyHeaderDefault, {}),
    expandedContent: closure_23(QuestDockBountyBodyDefault, {}),
    backgroundContent: closure_23(QuestDockBountyBackgroundDefault, { previewImageUrl: bountyPreviewImageUrl }),
    withAndroidOffscreenAlphaCompositingWorkaround: isBountiesAndroidQuestBarSmokeAnimationEnabled,
    renderImpressionTracker(arg0) {
      let children;
      let overrideVisibility;
      ({ children, overrideVisibility } = arg0);
      const obj = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, overrideVisibility, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, children };
      const BillableAdPlacementImpressionTrackerNative = QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative;
      return closure_23(BillableAdPlacementImpressionTrackerNative, obj);
    },
    renderModeChangeTracker(mode) {
      const obj = { adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, adContentId: bounty.id, mode: mode.mode };
      return closure_23(QuestDockModeChangeTracker, obj);
    }
  };
  const QuestDockBountyProvider = bounty(17029).QuestDockBountyProvider;
  return closure_23(QuestDockBountyProvider, obj5);
}
function QuestDockPlayableContent(playable) {
  playable = playable.playable;
  let obj = playable(16998);
  const bountyPreviewImageUrl = obj.useBountyPreviewImageUrl(playable);
  let obj2 = playable(16998);
  const questDockAppThemedBackgroundColor = obj2.useQuestDockAppThemedBackgroundColor();
  const obj3 = playable(17105);
  const questDockBountySmokeCollapsedPlaceholderUrl = obj3.useQuestDockBountySmokeCollapsedPlaceholderUrl();
  const obj4 = playable(17106);
  const isBountiesAndroidQuestBarSmokeAnimationEnabled = obj4.useIsBountiesAndroidQuestBarSmokeAnimationEnabled(constants.QUESTS_BAR_MOBILE);
  const obj5 = { playable, children: closure_23(QuestDockWithEntranceAnimation, obj6) };
  obj6 = {
    adCreativeId: playable.id,
    adCreativeType: playable(6782).AdCreativeType.PLAYABLE,
    backgroundImageUrl: questDockBountySmokeCollapsedPlaceholderUrl,
    iconUrl: playable.productIcon,
    trackAssetLoadingFailure(asset_id) {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { source: map1.QUESTS_BAR_MOBILE, ad_creative_id: playable.id, ad_creative_type: AdCreativeType.AdCreativeType.PLAYABLE, asset_id };
      obj.track(AnalyticEvents.AD_ASSET_LOADING_FAILURE, obj2);
    },
    layoutVariant: "insetHeader",
    theme: ThemeTypes.DARK,
    backgroundColor: questDockAppThemedBackgroundColor,
    expandedHeight: expandedHeight2,
    collapsedContent: closure_23(QuestDockPlayableHeaderDefault, {}),
    expandedContent: closure_23(QuestDockPlayableBodyDefault, {}),
    backgroundContent: closure_23(QuestDockPlayableBackgroundDefault, { previewImageUrl: bountyPreviewImageUrl }),
    withAndroidOffscreenAlphaCompositingWorkaround: isBountiesAndroidQuestBarSmokeAnimationEnabled,
    renderImpressionTracker(arg0) {
      let children;
      let overrideVisibility;
      ({ children, overrideVisibility } = arg0);
      const obj = { adContentId: playable.id, adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, overrideVisibility, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, children };
      const BillableAdPlacementImpressionTrackerNative = QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative;
      return closure_23(BillableAdPlacementImpressionTrackerNative, obj);
    },
    renderModeChangeTracker(mode) {
      const obj = { adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, adContentId: playable.id, mode: mode.mode };
      return closure_23(QuestDockModeChangeTracker, obj);
    }
  };
  const QuestDockPlayableProvider = playable(17029).QuestDockPlayableProvider;
  return closure_23(QuestDockPlayableProvider, obj5);
}
let closure_3 = ["mode"];
({ View: metroImportAll, StyleSheet, Pressable: c9, Image: c10 } = react_native);
({ QuestDockMode: closure_12, QuestsExperimentLocations: map1 } = QuestConstants);
({ QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_14, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_15, QUEST_DOCK_CONTENT_BORDER_RADII: closure_16, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_17, QUEST_DOCK_COLLAPSED_HEIGHT: closure_18, QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT: closure_19, QUEST_DOCK_PORTRAIT_MEDIA_EXPANDED_HEIGHT: closure_20 } = QuestDockConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const ThemeTypes = Constants2.ThemeTypes;
({ jsx: closure_23, jsxs: closure_24, Fragment: closure_25 } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: { position: "absolute", left: "50%", bottom: 0, zIndex: 1 }, accessibilityWrapper: obj2, questDockWrapper: rect, questDockContentWrapper: obj3, questDockHeaderBorder: obj4, nestedPressable: obj5 };
obj2 = { zIndex: 1 };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
rect = { position: "absolute", bottom: 0, left: "50%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.modules.mobile.QUEST_DOCK_BORDER_RADIUS, zIndex: 1 };
obj3 = { justifyContent: "flex-end", zIndex: 4 };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { bottom: undefined, right: undefined, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, zIndex: 5 };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj5 = { zIndex: 6 };
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
let closure_26 = createStyles(obj);
const __initData = { code: "function QuestDockTsx1(){const{restingQuestDockMode,QuestDockMode}=this.__closure;return restingQuestDockMode.get()===QuestDockMode.EXPANDED;}" };
const __initData2 = { code: "function QuestDockTsx2(){const{backgroundColor,withSpring,bottomBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_MODE_CHANGE_PHYSICS,roundToNearestPixel}=this.__closure;return{backgroundColor:backgroundColor,borderBottomRightRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomLeftRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:questDockWrapperSpecs.get().height,width:questDockWrapperSpecs.get().width,opacity:withSpring(1,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(questDockWrapperSpecs.get().x+roundToNearestPixel(questDockWrapperSpecs.get().width/2)*-1,QUEST_DOCK_MODE_CHANGE_PHYSICS)},{translateY:withSpring(questDockWrapperSpecs.get().y,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}" };
const __initData3 = { code: "function QuestDockTsx3(){const{withSpring,interpolate,isPressed,springStandard}=this.__closure;return{transform:[{scale:withSpring(interpolate(isPressed.get(),[1,0],[1,1]),springStandard)}]};}" };
const __initData4 = { code: "function QuestDockTsx4(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,windowDimensions}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),height:windowDimensions.get().height};}" };
const __initData5 = { code: "function QuestDockTsx5(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};}" };
const __initData6 = { code: "function QuestDockTsx6(){const{questDockWrapperSpecs,windowDimensions,safeAreaTop}=this.__closure;const specs=questDockWrapperSpecs.get();const windowHeight=windowDimensions.get().height;return windowHeight-safeAreaTop-specs.height;}" };
const __initData7 = { code: "function QuestDockTsx7(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
const __initData8 = { code: "function QuestDockTsx8(){const{hasInsetHeaderTile,activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,bottomBorderRadius,withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,QUEST_DOCK_COLLAPSED_HEIGHT,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED}=this.__closure;return{borderTopLeftRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),borderBottomRightRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:activeQuestDockMode.get()===QuestDockMode.EXPANDED?hasInsetHeaderTile?QUEST_DOCK_COLLAPSED_HEIGHT:questDockWrapperSpecs.get().height:questDockWrapperSpecs.get().height,width:activeQuestDockMode.get()===QuestDockMode.EXPANDED&&hasInsetHeaderTile?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:hasInsetHeaderTile?withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):0},{translateY:hasInsetHeaderTile?withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):0}],borderBottomWidth:bottomBorderRadius.get()>0?1:0};}" };
createStyles = createStyles_mod;
let closure_38 = createStyles.createStyles(() => ({ wrapperAnimated: { position: "absolute", bottom: 0, padding: 0, width: "100%" } }));
let obj6 = { overshootClamping: true, damping: 54 };
const merged4 = Object.assign(springPresets.SUBTLE_SPRING);
const constants2 = { PENDING: "pending", SUCCEEDED: "succeeded", FAILED: "failed" };
const __initData9 = { code: "function QuestDockTsx9(){const{withSpring,isRendered,ENTRANCE_ANIMATION_SPING_CONFIG,componentDimensions}=this.__closure;return{opacity:withSpring(isRendered?1:0,ENTRANCE_ANIMATION_SPING_CONFIG,'animate-always'),transform:[{translateY:withSpring(isRendered?0:componentDimensions.height,ENTRANCE_ANIMATION_SPING_CONFIG)}]};}" };
const memoResult = react.memo(function QuestDockWithVisibilityContext() {
  let isMobileQuestDockVisibleToUser;
  let mobileQuestDock;
  let tmp14;
  let obj = mobileQuestDock(isMobileQuestDockVisibleToUser[48]);
  mobileQuestDock = obj.useMobileQuestDock();
  let obj2 = mobileQuestDock(isMobileQuestDockVisibleToUser[48]);
  const isMobileQuestDockRenderedBase = obj2.useIsMobileQuestDockRenderedBase(mobileQuestDock);
  let obj3 = mobileQuestDock(isMobileQuestDockVisibleToUser[48]);
  isMobileQuestDockVisibleToUser = obj3.useIsMobileQuestDockVisibleToUser(mobileQuestDock, isMobileQuestDockRenderedBase);
  const items = [isMobileQuestDockRenderedBase, isMobileQuestDockVisibleToUser];
  const memo = react.useMemo(() => ({ isRendered: isMobileQuestDockRenderedBase, isVisibleToUser: isMobileQuestDockVisibleToUser }), items);
  const tmp7 = isMobileQuestDockRenderedBase(isMobileQuestDockVisibleToUser[64]);
  const tmp7Result = tmp7(mobileQuestDock(isMobileQuestDockVisibleToUser[37]).AdPlacement.MOBILE_HOME_DOCK_AREA, "QuestDockWithVisibilityContext");
  const tmp9 = isMobileQuestDockRenderedBase(isMobileQuestDockVisibleToUser[65])();
  const items1 = [mobileQuestDock];
  const tmp10 = !tmp9;
  const obj4 = mobileQuestDock(isMobileQuestDockVisibleToUser[48]);
  const isMobileQuestDockVisibleToUser1 = obj4.useIsMobileQuestDockVisibleToUser(mobileQuestDock, tmp10);
  const memo1 = react.useMemo(() => {
    const type = mobileQuestDock.type;
    if (AdCreativeType.AdCreativeType.BOUNTY === type) {
      const obj2 = { bounty: mobileQuestDock.bounty };
      return closure_23(QuestDockBountyContent, obj2);
    } else if (AdCreativeType.AdCreativeType.PLAYABLE === type) {
      const obj3 = { playable: mobileQuestDock.playable };
      return closure_23(QuestDockPlayableContent, obj3);
    } else if (AdCreativeType.AdCreativeType.QUEST === type) {
      const obj = { quest: mobileQuestDock.quest };
      return closure_23(QuestDockQuestContent, obj);
    } else if (AdCreativeType.AdCreativeType.NO_FILL === type) {
      return null;
    }
  }, items1);
  if (mobileQuestDock.type === mobileQuestDock(isMobileQuestDockVisibleToUser[41]).AdCreativeType.NO_FILL) {
    let tmp16 = null;
    if (null != tmp7Result) {
      tmp16 = null;
      if (!tmp9) {
        const obj5 = { noFillDecision: tmp7Result, visible: isMobileQuestDockVisibleToUser1 };
        tmp16 = closure_23(tmp6(tmp[66]), obj5, tmp7Result.decisionId);
      }
    }
    tmp14 = tmp16;
  } else {
    obj6 = { value: memo, children: memo1 };
    tmp14 = closure_23(tmp6(tmp[43]).Provider, obj6);
  }
  return tmp14;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDock.tsx");

export default memoResult;
export { QuestDockQuestContent };
