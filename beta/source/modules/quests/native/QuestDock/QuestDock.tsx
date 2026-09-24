// Module ID: 15449
// Function ID: 15450
// Name: QuestDock
// Dependencies: [5, 32, 109, 19, 17, 15359, 5695, 15361, 1078, 1089, 21, 4790, 580, 558, 568, 15368, 15358, 15362, 15365, 5205, 4529, 8575, 1616, 15366, 4494, 15450, 5219, 15360, 5223, 1119, 7352, 15451, 15452, 15453, 15454, 5202, 5206, 5698, 11643, 15455, 5118, 5123, 8001, 15448, 504, 11644, 10600, 4503, 15357, 1245, 15456, 15457, 15464, 15465, 15467, 11942, 5702, 15469, 15470, 15472, 2]

// Module 15449 (QuestDock)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import native from "native" /* 4503 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4529 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5118 */;
import MetricEvents from "MetricEvents" /* 5123 */;
import spring from "spring" /* 5219 */;
import springPresets from "springPresets" /* 5223 */;
import QuestTypes from "QuestTypes" /* 5698 */;
import AdCreativeType from "AdCreativeType" /* 5702 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8001 */;
import QuestActionCreators from "QuestActionCreators" /* 10600 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 11643 */;
import QuestsEligibility from "QuestsEligibility" /* 11644 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 11942 */;
import QuestHooks from "QuestHooks" /* 15357 */;
import QuestDockUtils from "QuestDockUtils" /* 15360 */;
import QuestDockGestureContext from "QuestDockGestureContext" /* 15362 */;
import QuestDockVisibilityContextDefault from "QuestDockVisibilityContext" /* 15448 */;
import QuestDockBountyHeaderDefault from "QuestDockBountyHeader" /* 15469 */;
import QuestDockBountyBodyDefault from "QuestDockBountyBody" /* 15470 */;
import QuestDockBountyBackgroundDefault from "QuestDockBountyBackground" /* 15472 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 15359 */;

require = fn;
let closure_3 = ["mode"];
let closure_4 = ["mode"];
get_ActivityIndicator = fn(17);
({ View: closure_9, StyleSheet, Pressable: c10, Image: closure_11 } = get_ActivityIndicator);
const QuestConstants = fn(5695);
({ QuestDockMode: map1, QuestsExperimentLocations: closure_14 } = QuestConstants);
const QuestDockConstants = fn(15361);
({ QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_15, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_16, QUEST_DOCK_CONTENT_BORDER_RADII: closure_17, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_18, QUEST_DOCK_COLLAPSED_HEIGHT: closure_19, QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT: closure_20, QUEST_DOCK_PORTRAIT_MEDIA_EXPANDED_HEIGHT: closure_21 } = QuestDockConstants);
const AnalyticEvents = fn(1078).AnalyticEvents;
const ThemeTypes = fn(1089).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_24, jsxs: closure_25, Fragment: closure_26 } = jsxProd);
let createStyles = fn(4790);
let obj = { wrapper: { position: "absolute", left: "50%", bottom: 0, zIndex: 1 }, accessibilityWrapper: null, questDockWrapper: null, questDockContentWrapper: null, questDockHeaderBorder: null, nestedPressable: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.zIndex = 1;
obj.accessibilityWrapper = obj3;
const rect = { position: "absolute", bottom: 0, left: "50%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.modules.mobile.QUEST_DOCK_BORDER_RADIUS, zIndex: 1 };
obj.questDockWrapper = rect;
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.justifyContent = "flex-end";
obj4.zIndex = 4;
obj.questDockContentWrapper = obj4;
let obj5 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj5.bottom = undefined;
obj5.right = undefined;
obj5.borderWidth = 1;
obj5.borderColor = nativeDefault.colors.BORDER_MUTED;
obj5.zIndex = 5;
obj.questDockHeaderBorder = obj5;
let obj6 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj6.zIndex = 6;
obj.nestedPressable = obj6;
let closure_27 = createStyles.createStyles(obj);
const __initData = { code: "function QuestDockTsx1(){const{restingQuestDockMode,QuestDockMode}=this.__closure;return restingQuestDockMode.get()===QuestDockMode.EXPANDED;}" };
const __initData2 = { code: "function QuestDockTsx2(){const{backgroundColor,withSpring,bottomBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_MODE_CHANGE_PHYSICS,roundToNearestPixel}=this.__closure;return{backgroundColor:backgroundColor,borderBottomRightRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomLeftRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:questDockWrapperSpecs.get().height,width:questDockWrapperSpecs.get().width,opacity:withSpring(1,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(questDockWrapperSpecs.get().x+roundToNearestPixel(questDockWrapperSpecs.get().width/2)*-1,QUEST_DOCK_MODE_CHANGE_PHYSICS)},{translateY:withSpring(questDockWrapperSpecs.get().y,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}" };
const __initData3 = { code: "function QuestDockTsx3(){const{withSpring,interpolate,isPressed,springStandard}=this.__closure;return{transform:[{scale:withSpring(interpolate(isPressed.get(),[1,0],[1,1]),springStandard)}]};}" };
const __initData4 = { code: "function QuestDockTsx4(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,windowDimensions}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),height:windowDimensions.get().height};}" };
const __initData5 = { code: "function QuestDockTsx5(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?\"auto\":\"none\"};}" };
const __initData6 = { code: "function QuestDockTsx6(){const{questDockWrapperSpecs,windowDimensions,safeAreaTop}=this.__closure;const specs=questDockWrapperSpecs.get();const windowHeight=windowDimensions.get().height;return windowHeight-safeAreaTop-specs.height;}" };
let closure_34 = { code: "function QuestDockTsx7(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
const __initData7 = { code: "function QuestDockTsx8(){const{hasInsetHeaderTile,activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,bottomBorderRadius,withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,QUEST_DOCK_COLLAPSED_HEIGHT,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED}=this.__closure;return{borderTopLeftRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),borderBottomRightRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:activeQuestDockMode.get()===QuestDockMode.EXPANDED?hasInsetHeaderTile?QUEST_DOCK_COLLAPSED_HEIGHT:questDockWrapperSpecs.get().height:questDockWrapperSpecs.get().height,width:activeQuestDockMode.get()===QuestDockMode.EXPANDED&&hasInsetHeaderTile?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:hasInsetHeaderTile?withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):0},{translateY:hasInsetHeaderTile?withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):0}],borderBottomWidth:bottomBorderRadius.get()>0?1:0};}" };
const __initData8 = { code: "function QuestDockTsx9(){const{restingQuestDockMode,QuestDockMode}=this.__closure;return restingQuestDockMode.get()===QuestDockMode.EXPANDED;}" };
const __initData9 = { code: "function QuestDockTsx10(){const{backgroundColor,withSpring,bottomBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_MODE_CHANGE_PHYSICS,roundToNearestPixel}=this.__closure;return{backgroundColor:backgroundColor,borderBottomRightRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomLeftRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:questDockWrapperSpecs.get().height,width:questDockWrapperSpecs.get().width,opacity:withSpring(1,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(questDockWrapperSpecs.get().x+roundToNearestPixel(questDockWrapperSpecs.get().width/2)*-1,QUEST_DOCK_MODE_CHANGE_PHYSICS)},{translateY:withSpring(questDockWrapperSpecs.get().y,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}" };
const __initData10 = { code: "function QuestDockTsx11(){const{withSpring,interpolate,isPressed,springStandard}=this.__closure;return{transform:[{scale:withSpring(interpolate(isPressed.get(),[1,0],[1,1]),springStandard)}]};}" };
const __initData11 = { code: "function QuestDockTsx12(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,windowDimensions}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),height:windowDimensions.get().height};}" };
const __initData12 = { code: "function QuestDockTsx13(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};}" };
const __initData13 = { code: "function QuestDockTsx14(){const{questDockWrapperSpecs,windowDimensions,safeAreaTop}=this.__closure;const specs=questDockWrapperSpecs.get();const windowHeight=windowDimensions.get().height;return windowHeight-safeAreaTop-specs.height;}" };
const __initData14 = { code: "function QuestDockTsx15(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
const __initData15 = { code: "function QuestDockTsx16(){const{hasInsetHeaderTile,activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,bottomBorderRadius,withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,QUEST_DOCK_COLLAPSED_HEIGHT,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED}=this.__closure;return{borderTopLeftRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),borderBottomRightRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:activeQuestDockMode.get()===QuestDockMode.EXPANDED?hasInsetHeaderTile?QUEST_DOCK_COLLAPSED_HEIGHT:questDockWrapperSpecs.get().height:questDockWrapperSpecs.get().height,width:activeQuestDockMode.get()===QuestDockMode.EXPANDED&&hasInsetHeaderTile?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:hasInsetHeaderTile?withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):0},{translateY:hasInsetHeaderTile?withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):0}],borderBottomWidth:bottomBorderRadius.get()>0?1:0};}" };
let ReactCompilerGating = fn(558);
let closure_44 = ReactCompilerGating.isReactCompilerEnabled() ? ((backgroundColor) => {
  const cResult = backgroundColor(questDockExpandHandler[14]).c(79);
  backgroundColor = backgroundColor.backgroundColor;
  ({ layoutVariant, expandedHeight, collapsedContent, expandedContent, backgroundContent } = backgroundColor);
  importDefault = tmp4;
  let obj = backgroundColor(questDockExpandHandler[14]);
  const questDockCreative = backgroundColor(questDockExpandHandler[15]).useQuestDockCreative();
  const tmpResult = backgroundColor(questDockExpandHandler[15]);
  questDockExpandHandler = backgroundColor(questDockExpandHandler[16]).useQuestDockExpandHandler(questDockCreative);
  const tmp8 = closure_27();
  const context = top.useContext(tmp(tmp2[17]).QuestDockGestureContext);
  const questDockWrapperSpecs = context.questDockWrapperSpecs;
  const activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  const context1 = top.useContext(tmp(tmp2[18]).QuestDockExternalCoordinationContext);
  const restingQuestDockMode = context1.restingQuestDockMode;
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  const id = top.useId();
  if (cResult[0] !== setRestingQuestDockMode) {
    const fn = function o() {
      setRestingQuestDockMode(QuestDockMode.COLLAPSED);
    };
    cResult[0] = setRestingQuestDockMode;
    cResult[1] = fn;
  }
  const tmpResult16 = backgroundColor(questDockExpandHandler[16]);
  const questDockModeAnimatedReaction = backgroundColor(questDockExpandHandler[16]).useQuestDockModeAnimatedReaction();
  const tmpResult17 = backgroundColor(questDockExpandHandler[16]);
  const questDockDismissalReset = backgroundColor(questDockExpandHandler[16]).useQuestDockDismissalReset();
  const tmpResult18 = backgroundColor(questDockExpandHandler[16]);
  const isScreenReaderEnabled = backgroundColor(questDockExpandHandler[19]).useIsScreenReaderEnabled();
  const tmpResult19 = backgroundColor(questDockExpandHandler[19]);
  class Z {
    constructor() {
      return restingQuestDockMode.get() === QuestDockMode.EXPANDED;
    }
  }
  Z.__closure = { restingQuestDockMode, QuestDockMode };
  Z.__workletHash = 2415817673061;
  Z.__initData = __initData;
  const derivedValue = backgroundColor(questDockExpandHandler[20]).useDerivedValue(Z);
  require("useStateFromSharedValue")(derivedValue);
  top = require("useSafeAreaInsets")().top;
  let obj2 = { restingQuestDockMode, QuestDockMode };
  const tmp18 = importDefault;
  const tmpResult20 = backgroundColor(questDockExpandHandler[20]);
  const youBarTotalHeight = backgroundColor(questDockExpandHandler[23]).useYouBarTotalHeight();
  const tmpResult21 = backgroundColor(questDockExpandHandler[23]);
  const token = backgroundColor(questDockExpandHandler[24]).useToken(require("native").modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp22 = require("useQuestDockAnimatedBorderRadius")(token);
  closure_10 = tmp22;
  const tmpResult22 = backgroundColor(questDockExpandHandler[24]);
  function ee() {
    const size = { backgroundColor, borderBottomRightRadius: spring.withSpring(closure_10.get(), QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED), borderBottomLeftRadius: null, height: null, width: null, opacity: null, transform: null };
    size.borderBottomLeftRadius = spring.withSpring(closure_10.get(), QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
    size.height = questDockWrapperSpecs.get().height;
    size.width = questDockWrapperSpecs.get().width;
    size.opacity = spring.withSpring(1, QUEST_DOCK_MODE_CHANGE_PHYSICS);
    const obj = { translateX: null };
    const obj6 = spring;
    obj.translateX = obj6.withSpring(questDockWrapperSpecs.get().x + -1 * QuestDockUtils.roundToNearestPixel(questDockWrapperSpecs.get().width / 2), QUEST_DOCK_MODE_CHANGE_PHYSICS);
    const items = [obj, ];
    const obj5 = { translateY: null };
    obj5.translateY = spring.withSpring(questDockWrapperSpecs.get().y, QUEST_DOCK_MODE_CHANGE_PHYSICS);
    items[1] = obj5;
    size.transform = items;
    return size;
  }
  const tmpResult23 = backgroundColor(questDockExpandHandler[20]);
  ee.__closure = { backgroundColor, withSpring: backgroundColor(questDockExpandHandler[26]).withSpring, bottomBorderRadius: tmp22, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs, QUEST_DOCK_MODE_CHANGE_PHYSICS, roundToNearestPixel: backgroundColor(questDockExpandHandler[27]).roundToNearestPixel };
  ee.__workletHash = 9565489600157;
  ee.__initData = __initData2;
  const animatedStyle = tmpResult23.useAnimatedStyle(ee);
  let obj3 = { backgroundColor, withSpring: backgroundColor(questDockExpandHandler[26]).withSpring, bottomBorderRadius: tmp22, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs, QUEST_DOCK_MODE_CHANGE_PHYSICS, roundToNearestPixel: backgroundColor(questDockExpandHandler[27]).roundToNearestPixel };
  const tmp23 = QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
  const sharedValue = backgroundColor(questDockExpandHandler[20]).useSharedValue(0);
  const tmpResult24 = backgroundColor(questDockExpandHandler[20]);
  function te() {
    const obj = { transform: null };
    const obj2 = { scale: null };
    const obj3 = spring;
    obj2.scale = obj3.withSpring(ReanimatedRexport.interpolate(sharedValue.get(), [1, 0], [1, 1]), springPresets.springStandard);
    const items = [obj2];
    obj.transform = items;
    return obj;
  }
  const tmpResult25 = backgroundColor(questDockExpandHandler[20]);
  te.__closure = { withSpring: backgroundColor(questDockExpandHandler[26]).withSpring, interpolate: backgroundColor(questDockExpandHandler[20]).interpolate, isPressed: sharedValue, springStandard: backgroundColor(questDockExpandHandler[28]).springStandard };
  te.__workletHash = 3373473585356;
  te.__initData = __initData3;
  const animatedStyle1 = tmpResult25.useAnimatedStyle(te);
  if (cResult[2] === questDockExpandHandler) {
    if (cResult[5] !== sharedValue) {
      class Ee {
        constructor() {
          result = closure_11.set(1);
          return;
        }
      }
      cResult[5] = sharedValue;
      cResult[6] = Ee;
    } else {
      class Ee {
        constructor() {
          result = closure_11.set(1);
          return;
        }
      }
    }
    if (cResult[7] !== sharedValue) {
      class Ee {
        constructor() {
          result = closure_11.set(1);
          return;
        }
      }
      cResult[7] = sharedValue;
      cResult[8] = tmp31;
    } else {
      class Ee {
        constructor() {
          result = closure_11.set(1);
          return;
        }
      }
    }
    function he() {
      let num = 0;
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        num = 1;
      }
      return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS), height: windowDimensions.get().height };
    }
    let obj5 = { withSpring: tmp(tmp2[26]).withSpring, activeQuestDockMode, QuestDockMode: tmp16, QUEST_DOCK_MODE_CHANGE_PHYSICS: tmp24, windowDimensions };
    he.__closure = obj5;
    he.__workletHash = 6178969276321;
    he.__initData = __initData4;
    const animatedStyle2 = tmp(tmp2[20]).useAnimatedStyle(he);
    const tmpResult26 = tmp(tmp2[20]);
    class Se {
      constructor() {
        pointerEvents = "none";
        if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
          pointerEvents = "auto";
        }
        return { pointerEvents };
      }
    }
    let obj6 = { activeQuestDockMode, QuestDockMode: tmp16 };
    Se.__closure = obj6;
    Se.__workletHash = 17271982627769;
    Se.__initData = __initData5;
    const animatedProps = tmp(tmp2[20]).useAnimatedProps(Se);
    const tmpResult27 = tmp(tmp2[20]);
    class Ce {
      constructor() {
        value = questDockWrapperSpecs.get();
        return windowDimensions.get().height - top - value.height;
      }
    }
    obj7 = { questDockWrapperSpecs, windowDimensions, safeAreaTop: top };
    Ce.__closure = obj7;
    Ce.__workletHash = 8073454569923;
    Ce.__initData = __initData6;
    const derivedValue1 = tmp(tmp2[20]).useDerivedValue(Ce);
    tmp18(tmp2[21])(derivedValue1);
    const tmpResult28 = tmp(tmp2[20]);
    function ke() {
      if (activeQuestDockMode.get() === QuestDockMode.CLOSED) {
        let num = 0;
      } else {
        num = 1;
      }
      return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS) };
    }
    const obj8 = { withSpring: tmp(tmp2[26]).withSpring, activeQuestDockMode, QuestDockMode: tmp16, QUEST_DOCK_MODE_CHANGE_PHYSICS: tmp24 };
    ke.__closure = obj8;
    ke.__workletHash = 6468803634518;
    class Z {
      constructor() {
        return restingQuestDockMode.get() === QuestDockMode.EXPANDED;
      }
    }
    const animatedStyle3 = tmp(tmp2[20]).useAnimatedStyle(ke);
    const tmpResult29 = tmp(tmp2[20]);
    class Te {
      constructor() {
        tmp = closure_1;
        if (closure_1) {
          tmp2 = activeQuestDockMode;
          tmp3 = QuestDockMode;
          if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
            tmp4 = closure_17;
          }
          size = { borderTopLeftRadius: null, borderTopRightRadius: null, borderBottomLeftRadius: null, borderBottomRightRadius: null, opacity: null, height: null, width: null, transform: null, borderBottomWidth: null };
          size.borderTopLeftRadius = tmp4;
          if (tmp) {
            tmp5 = activeQuestDockMode;
            tmp6 = QuestDockMode;
            if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
              tmp7 = closure_17;
            }
            size.borderTopRightRadius = tmp7;
            if (tmp) {
              tmp8 = activeQuestDockMode;
              tmp9 = QuestDockMode;
              if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
                value1 = closure_17;
              }
              size.borderBottomLeftRadius = value1;
              if (tmp) {
                tmp12 = activeQuestDockMode;
                tmp13 = QuestDockMode;
                if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
                  value = closure_17;
                }
                size.borderBottomRightRadius = value;
                tmp16 = closure_0;
                tmp17 = closure_2;
                obj2 = closure_0(closure_2[26]);
                obj3 = activeQuestDockMode;
                tmp18 = QuestDockMode;
                num = 1;
                num2 = 1;
                if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
                  num2 = 0;
                }
                tmp19 = closure_16;
                size.opacity = obj2.withSpring(num2, closure_16);
                tmp20 = QuestDockMode;
                if (obj3.get() === QuestDockMode.EXPANDED) {
                  if (tmp) {
                    height = closure_19;
                  }
                  size.height = height;
                  tmp22 = QuestDockMode;
                  if (obj3.get() === QuestDockMode.EXPANDED) {
                    if (tmp) {
                      tmp24 = questDockWrapperSpecs;
                      tmp25 = closure_18;
                      num3 = 2;
                      width = questDockWrapperSpecs.get().width - 2 * closure_18;
                    }
                    size.width = width;
                    num4 = 0;
                    num5 = 0;
                    if (tmp) {
                      tmp16Result = tmp16(tmp17[26]);
                      tmp26 = QuestDockMode;
                      num6 = 0;
                      if (obj3.get() === QuestDockMode.EXPANDED) {
                        num6 = closure_18;
                      }
                      num5 = tmp16Result.withSpring(num6, tmp19);
                    }
                    obj1 = { translateX: null };
                    obj1.translateX = num5;
                    items = [, ];
                    items[0] = obj1;
                    num7 = 0;
                    if (tmp) {
                      tmp16Result1 = tmp16(tmp17[26]);
                      tmp27 = QuestDockMode;
                      num8 = 0;
                      if (obj3.get() === QuestDockMode.EXPANDED) {
                        num8 = closure_18;
                      }
                      num7 = tmp16Result1.withSpring(num8, tmp19);
                    }
                    obj8 = { translateY: null };
                    obj8.translateY = num7;
                    items[1] = obj8;
                    size.transform = items;
                    tmp28 = closure_10;
                    num9 = 0;
                    if (closure_10.get() > 0) {
                      num9 = 1;
                    }
                    size.borderBottomWidth = num9;
                    return size;
                  }
                  tmp23 = questDockWrapperSpecs;
                  width = questDockWrapperSpecs.get().width;
                }
                tmp21 = questDockWrapperSpecs;
                height = questDockWrapperSpecs.get().height;
              }
              tmp14 = closure_10;
              value = closure_10.get();
            }
            tmp10 = closure_10;
            value1 = closure_10.get();
          }
          tmp7 = closure_9;
        }
        tmp4 = closure_9;
        return;
      }
    }
    const obj9 = { hasInsetHeaderTile: tmp4, activeQuestDockMode, QuestDockMode: tmp16, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, bottomBorderRadius: tmp22, withSpring: tmp(tmp2[26]).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: tmp23, QUEST_DOCK_COLLAPSED_HEIGHT, questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_18 };
    Te.__closure = obj9;
    Te.__workletHash = 13161475723910;
    Te.__initData = __initData7;
    const animatedStyle4 = tmp(tmp2[20]).useAnimatedStyle(Te);
    ({ wrapper, accessibilityWrapper } = tmp8);
    if (tmp46) {
      class Ee {
        constructor() {
          result = closure_11.set(1);
          return;
        }
      }
    }
    const diff = youBarTotalHeight - 1;
    if (cResult[9] !== diff) {
      class Ee {
        constructor() {
          result = closure_11.set(1);
          return;
        }
      }
      tmp49[0] = diff;
      cResult[9] = diff;
      cResult[10] = tmp49;
    } else {
      class Ee {
        constructor() {
          result = closure_11.set(1);
          return;
        }
      }
    }
    if (cResult[11] === animatedStyle) {
      class Ee {
        constructor() {
          result = closure_11.set(1);
          return;
        }
      }
    }
    let items = [tmp8.questDockWrapper, tmp48, animatedStyle];
    cResult[11] = animatedStyle;
    cResult[12] = tmp8.questDockWrapper;
    cResult[13] = tmp48;
    cResult[14] = items;
    tmp46 = isScreenReaderEnabled;
    const tmpResult30 = tmp(tmp2[20]);
  }
  function oe() {
    setRestingQuestDockMode(QuestDockMode.EXPANDED);
    questDockExpandHandler();
  }
  cResult[2] = questDockExpandHandler;
  cResult[3] = setRestingQuestDockMode;
  cResult[4] = oe;
}) : ((backgroundColor) => {
  backgroundColor = backgroundColor.backgroundColor;
  const layoutVariant = backgroundColor.layoutVariant;
  importDefault = tmp;
  let str = "fixed";
  ({ expandedHeight, collapsedContent, expandedContent, backgroundContent } = backgroundColor);
  if ("flush" === layoutVariant) {
    str = "content";
  }
  let str2 = "overlay";
  if ("flush" === layoutVariant) {
    str2 = "default";
  }
  const questDockCreative = backgroundColor(questDockExpandHandler[15]).useQuestDockCreative();
  let obj = backgroundColor(questDockExpandHandler[15]);
  questDockExpandHandler = backgroundColor(questDockExpandHandler[16]).useQuestDockExpandHandler(questDockCreative);
  let tmp7 = closure_27();
  const context = top.useContext(backgroundColor(questDockExpandHandler[17]).QuestDockGestureContext);
  const questDockWrapperSpecs = context.questDockWrapperSpecs;
  const activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  const context1 = top.useContext(backgroundColor(questDockExpandHandler[18]).QuestDockExternalCoordinationContext);
  const restingQuestDockMode = context1.restingQuestDockMode;
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  let items = [setRestingQuestDockMode];
  const id = top.useId();
  const callback = top.useCallback(() => {
    setRestingQuestDockMode(QuestDockMode.COLLAPSED);
  }, items);
  let obj2 = backgroundColor(questDockExpandHandler[16]);
  const questDockModeAnimatedReaction = backgroundColor(questDockExpandHandler[16]).useQuestDockModeAnimatedReaction();
  let obj3 = backgroundColor(questDockExpandHandler[16]);
  const questDockDismissalReset = backgroundColor(questDockExpandHandler[16]).useQuestDockDismissalReset();
  let obj4 = backgroundColor(questDockExpandHandler[16]);
  const isScreenReaderEnabled = backgroundColor(questDockExpandHandler[19]).useIsScreenReaderEnabled();
  let obj5 = backgroundColor(questDockExpandHandler[19]);
  class G {
    constructor() {
      return restingQuestDockMode.get() === QuestDockMode.EXPANDED;
    }
  }
  G.__closure = { restingQuestDockMode, QuestDockMode };
  G.__workletHash = 7060288082029;
  G.__initData = __initData8;
  const derivedValue = backgroundColor(questDockExpandHandler[20]).useDerivedValue(G);
  const tmp17 = require("useStateFromSharedValue")(derivedValue);
  top = require("useSafeAreaInsets")().top;
  let obj6 = backgroundColor(questDockExpandHandler[20]);
  obj7 = { restingQuestDockMode, QuestDockMode };
  const youBarTotalHeight = backgroundColor(questDockExpandHandler[23]).useYouBarTotalHeight();
  const obj8 = backgroundColor(questDockExpandHandler[23]);
  const token = backgroundColor(questDockExpandHandler[24]).useToken(require("native").modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp20 = require("useQuestDockAnimatedBorderRadius")(token);
  closure_10 = tmp20;
  const obj9 = backgroundColor(questDockExpandHandler[24]);
  class K {
    constructor() {
      size = { backgroundColor, borderBottomRightRadius: null, borderBottomLeftRadius: null, height: null, width: null, opacity: null, transform: null };
      obj2 = closure_0(closure_2[26]);
      size.borderBottomRightRadius = obj2.withSpring(closure_10.get(), closure_16);
      obj3 = closure_0(closure_2[26]);
      size.borderBottomLeftRadius = obj3.withSpring(closure_10.get(), closure_16);
      size.height = questDockWrapperSpecs.get().height;
      size.width = questDockWrapperSpecs.get().width;
      obj4 = closure_0(closure_2[26]);
      size.opacity = obj4.withSpring(1, closure_15);
      obj1 = { translateX: null };
      obj6 = closure_0(closure_2[26]);
      obj7 = closure_0(closure_2[27]);
      obj1.translateX = obj6.withSpring(questDockWrapperSpecs.get().x + -1 * obj7.roundToNearestPixel(questDockWrapperSpecs.get().width / 2), closure_15);
      items = [, ];
      items[0] = obj1;
      obj10 = { translateY: null };
      obj9 = closure_0(closure_2[26]);
      obj10.translateY = obj9.withSpring(questDockWrapperSpecs.get().y, closure_15);
      items[1] = obj10;
      size.transform = items;
      return size;
    }
  }
  const obj10 = backgroundColor(questDockExpandHandler[20]);
  K.__closure = { backgroundColor, withSpring: backgroundColor(questDockExpandHandler[26]).withSpring, bottomBorderRadius: tmp20, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs, QUEST_DOCK_MODE_CHANGE_PHYSICS, roundToNearestPixel: backgroundColor(questDockExpandHandler[27]).roundToNearestPixel };
  K.__workletHash = 11927010554990;
  K.__initData = __initData9;
  const animatedStyle = obj10.useAnimatedStyle(K);
  const obj11 = { backgroundColor, withSpring: backgroundColor(questDockExpandHandler[26]).withSpring, bottomBorderRadius: tmp20, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs, QUEST_DOCK_MODE_CHANGE_PHYSICS, roundToNearestPixel: backgroundColor(questDockExpandHandler[27]).roundToNearestPixel };
  const sharedValue = backgroundColor(questDockExpandHandler[20]).useSharedValue(0);
  const obj12 = backgroundColor(questDockExpandHandler[20]);
  class X {
    constructor() {
      obj = { transform: null };
      obj1 = { scale: null };
      obj3 = closure_0(closure_2[26]);
      obj4 = closure_0(closure_2[20]);
      interpolateResult = obj4.interpolate(closure_11.get(), [1, 0], [1, 1]);
      obj1.scale = obj3.withSpring(interpolateResult, closure_0(closure_2[28]).springStandard);
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const obj13 = backgroundColor(questDockExpandHandler[20]);
  X.__closure = { withSpring: backgroundColor(questDockExpandHandler[26]).withSpring, interpolate: backgroundColor(questDockExpandHandler[20]).interpolate, isPressed: sharedValue, springStandard: backgroundColor(questDockExpandHandler[28]).springStandard };
  X.__workletHash = 5840865258847;
  X.__initData = __initData10;
  const items1 = [setRestingQuestDockMode, questDockExpandHandler];
  const animatedStyle1 = obj13.useAnimatedStyle(X);
  const items2 = [sharedValue];
  const callback1 = top.useCallback(() => {
    setRestingQuestDockMode(QuestDockMode.EXPANDED);
    questDockExpandHandler();
  }, items1);
  const items3 = [sharedValue];
  const callback2 = top.useCallback(() => {
    const result = sharedValue.set(1);
  }, items2);
  const callback3 = top.useCallback(() => {
    const result = sharedValue.set(0);
  }, items3);
  const obj14 = { withSpring: backgroundColor(questDockExpandHandler[26]).withSpring, interpolate: backgroundColor(questDockExpandHandler[20]).interpolate, isPressed: sharedValue, springStandard: backgroundColor(questDockExpandHandler[28]).springStandard };
  class Z {
    constructor() {
      obj = closure_0(closure_2[26]);
      num = 0;
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        num = 1;
      }
      obj1 = { opacity: obj.withSpring(num, closure_15), height: windowDimensions.get().height };
      return obj1;
    }
  }
  const obj15 = backgroundColor(questDockExpandHandler[20]);
  Z.__closure = { withSpring: backgroundColor(questDockExpandHandler[26]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS, windowDimensions };
  Z.__workletHash = 11488074451286;
  Z.__initData = __initData11;
  const animatedStyle2 = obj15.useAnimatedStyle(Z);
  const obj16 = { withSpring: backgroundColor(questDockExpandHandler[26]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS, windowDimensions };
  function ee() {
    let pointerEvents = "none";
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      pointerEvents = "auto";
    }
    return { pointerEvents };
  }
  ee.__closure = { activeQuestDockMode, QuestDockMode };
  ee.__workletHash = 6944577019790;
  ee.__initData = __initData12;
  const animatedProps = backgroundColor(questDockExpandHandler[20]).useAnimatedProps(ee);
  const obj17 = backgroundColor(questDockExpandHandler[20]);
  function te() {
    value = questDockWrapperSpecs.get();
    return windowDimensions.get().height - top - value.height;
  }
  te.__closure = { questDockWrapperSpecs, windowDimensions, safeAreaTop: top };
  te.__workletHash = 14953270062704;
  te.__initData = __initData13;
  const derivedValue1 = backgroundColor(questDockExpandHandler[20]).useDerivedValue(te);
  const obj18 = backgroundColor(questDockExpandHandler[20]);
  const tmp30 = require("useStateFromSharedValue")(derivedValue1);
  function oe() {
    if (activeQuestDockMode.get() === QuestDockMode.CLOSED) {
      let num = 0;
    } else {
      num = 1;
    }
    return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS) };
  }
  const obj19 = backgroundColor(questDockExpandHandler[20]);
  oe.__closure = { withSpring: backgroundColor(questDockExpandHandler[26]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  oe.__workletHash = 2744133111557;
  oe.__initData = __initData14;
  const animatedStyle3 = obj19.useAnimatedStyle(oe);
  const obj20 = { withSpring: backgroundColor(questDockExpandHandler[26]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  function re() {
    if (closure_1) {
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        let tmp4 = QUEST_DOCK_CONTENT_BORDER_RADII;
      }
      const size = { borderTopLeftRadius: tmp4, borderTopRightRadius: null, borderBottomLeftRadius: null, borderBottomRightRadius: null, opacity: null, height: null, width: null, transform: null, borderBottomWidth: null };
      if (tmp) {
        if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
          let tmp7 = QUEST_DOCK_CONTENT_BORDER_RADII;
        }
        size.borderTopRightRadius = tmp7;
        if (tmp) {
          if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
            value2 = QUEST_DOCK_CONTENT_BORDER_RADII;
          }
          size.borderBottomLeftRadius = value2;
          if (tmp) {
            if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
              value = QUEST_DOCK_CONTENT_BORDER_RADII;
            }
            size.borderBottomRightRadius = value;
            let num2 = 1;
            if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
              num2 = 0;
            }
            size.opacity = spring.withSpring(num2, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
            if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
              if (tmp) {
                let height = QUEST_DOCK_COLLAPSED_HEIGHT;
              }
              size.height = height;
              if (obj3.get() === QuestDockMode.EXPANDED) {
                if (tmp) {
                  let width = questDockWrapperSpecs.get().width - 2 * collapsedCategories;
                }
                size.width = width;
                let num5 = 0;
                if (tmp) {
                  let num6 = 0;
                  if (obj3.get() === QuestDockMode.EXPANDED) {
                    num6 = collapsedCategories;
                  }
                  num5 = tmp16(5219).withSpring(num6, tmp19);
                  const tmp16Result = tmp16(5219);
                }
                const obj = { translateX: num5 };
                const items = [obj, ];
                let num7 = 0;
                if (tmp) {
                  let num8 = 0;
                  if (obj3.get() === QuestDockMode.EXPANDED) {
                    num8 = collapsedCategories;
                  }
                  num7 = tmp16(5219).withSpring(num8, tmp19);
                  const tmp16Result2 = tmp16(5219);
                }
                const obj4 = { translateY: num7 };
                items[1] = obj4;
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
  const obj21 = backgroundColor(questDockExpandHandler[20]);
  re.__closure = { hasInsetHeaderTile: "insetHeader" === layoutVariant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, bottomBorderRadius: tmp20, withSpring: backgroundColor(questDockExpandHandler[26]).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, QUEST_DOCK_COLLAPSED_HEIGHT, questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_18 };
  re.__workletHash = 7661128291673;
  re.__initData = __initData15;
  const obj23 = { style: tmp7.wrapper, pointerEvents: "auto", children: null };
  const animatedStyle4 = obj21.useAnimatedStyle(re);
  const obj24 = { nativeID: id, style: tmp7.accessibilityWrapper, accessibilityViewIsModal: null, onAccessibilityEscape: null, pointerEvents: "box-none", children: null };
  let tmp37 = isScreenReaderEnabled;
  if (tmp37) {
    tmp37 = tmp17;
  }
  obj24.accessibilityViewIsModal = tmp37;
  obj24.onAccessibilityEscape = callback;
  const obj22 = { hasInsetHeaderTile: "insetHeader" === layoutVariant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, bottomBorderRadius: tmp20, withSpring: backgroundColor(questDockExpandHandler[26]).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, QUEST_DOCK_COLLAPSED_HEIGHT, questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_18 };
  const tmp34 = closure_26;
  const obj25 = { style: animatedStyle1, children: null };
  let tmp16Result = require("QuestDockGestureDetector");
  const obj26 = { style: null, layout: null, children: null };
  const items4 = [tmp7.questDockWrapper, { bottom: youBarTotalHeight - 1 }, animatedStyle];
  obj26.style = items4;
  const obj27 = { bottom: youBarTotalHeight - 1 };
  const tmp16Result6 = require("ReanimatedNativeView");
  obj26.layout = backgroundColor(questDockExpandHandler[27]).dimensionsLayoutTransition;
  const obj28 = { style: tmp7.nestedPressable, onPressIn: callback2, onPressOut: callback3, onPress: callback1, pointerEvents: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null };
  let str3 = "auto";
  if (tmp17) {
    str3 = "none";
  }
  obj28.pointerEvents = str3;
  const intl = tmp3(tmp4[29]).intl;
  obj28.accessibilityLabel = intl.string(backgroundColor(questDockExpandHandler[29]).t.rjVPdM);
  let str4 = "";
  if (!tmp17) {
    const intl2 = tmp3(tmp4[29]).intl;
    str4 = intl2.string(tmp3(tmp4[29]).t.n0MlOB);
  }
  const obj29 = { children: null };
  const obj30 = { children: null };
  obj28.accessibilityHint = str4;
  const items5 = [closure_24(closure_10, obj28), , , ];
  const obj31 = { style: null, layout: null, pointerEvents: "none" };
  const items6 = [tmp7.questDockHeaderBorder, animatedStyle4];
  obj31.style = items6;
  const tmp16Result7 = require("ReanimatedNativeView");
  obj31.layout = backgroundColor(questDockExpandHandler[27]).dimensionsLayoutTransition;
  items5[1] = closure_24(require("ReanimatedNativeView"), obj31);
  const obj32 = { style: null, children: null };
  const items7 = [tmp7.questDockContentWrapper, animatedStyle3];
  obj32.style = items7;
  const obj33 = { style: tmp7.questDockContentWrapper, children: null };
  const tmp16Result8 = require("ReanimatedNativeView");
  const items8 = [closure_24(require("QuestDockContentCollapsed"), { hideOnExpand: "flush" === layoutVariant, children: collapsedContent }), closure_24(require("QuestDockContentExpanded"), { expandedHeightMode: str, expandedHeight, children: expandedContent })];
  obj33.children = items8;
  const items9 = [closure_25(token, obj33), backgroundContent];
  obj32.children = items9;
  items5[2] = closure_25(require("ReanimatedNativeView"), obj32);
  items5[3] = closure_24(require("QuestDockDragHandle"), { isExpanded: tmp17, variant: str2 });
  obj26.children = items5;
  obj25.children = closure_25(tmp16Result7, obj26);
  obj30.children = closure_24(tmp16Result6, obj25);
  obj24.children = closure_24(tmp16Result, obj30);
  obj23.children = closure_24(backgroundColor(questDockExpandHandler[35]).AccessibilityViewAnimated, obj24);
  const items10 = [closure_24(token, obj23), ];
  const obj34 = { style: animatedStyle2, animatedProps, children: null };
  const tmp16Result9 = require("ReanimatedNativeView");
  obj34.children = closure_24(backgroundColor(questDockExpandHandler[36]).Backdrop, { onDismiss: callback, accessibleDismissStyle: { height: tmp30 } });
  items10[1] = closure_24(require("ReanimatedNativeView"), obj34);
  obj29.children = items10;
  return closure_25(tmp34, obj29);
});
ReactCompilerGating = fn(558);
let closure_45 = ReactCompilerGating.isReactCompilerEnabled() ? ((mode) => {
  const cResult = c.c(6);
  if (cResult[0] !== mode) {
    mode = mode.mode;
    const tmp8 = _objectWithoutProperties(mode, closure_3);
    cResult[0] = mode;
    cResult[1] = mode;
    cResult[2] = tmp8;
    let tmp5 = tmp8;
    let tmp4 = mode;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === tmp4) {
    if (cResult[4] === tmp5) {
      let tmp9 = cResult[5];
    }
    const questBarOrDockModeChangeTracking = tmp(11643).useQuestBarOrDockModeChangeTracking(tmp9);
    return null;
  }
  const obj2 = { mode: tmp4 };
  const merged = Object.assign(tmp5);
  obj2.questContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
  obj2.sourceQuestContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
  cResult[3] = tmp4;
  cResult[4] = tmp5;
  cResult[5] = obj2;
  tmp9 = obj2;
}) : ((mode) => {
  const tmp = _objectWithoutProperties(mode, closure_4);
  const obj2 = { mode: mode.mode };
  const merged = Object.assign(tmp);
  obj2.questContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
  obj2.sourceQuestContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
  const questBarOrDockModeChangeTracking = hooks_QuestHooks.useQuestBarOrDockModeChangeTracking(obj2);
  return null;
});
ReactCompilerGating = fn(558);
let closure_46 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const QuestBarRenderedTriggerPoint = require("QuestBarRenderedTriggerPoint").QuestBarRenderedTriggerPoint;
      QuestBarRenderedTriggerPoint.trigger();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp2 = fn;
    tmp3 = items;
  } else {
    [tmp2, tmp3] = cResult;
  }
  const effect = noop.useEffect(tmp2, tmp3);
  return null;
}) : (() => {
  const effect = noop.useEffect(() => {
    const QuestBarRenderedTriggerPoint = require("QuestBarRenderedTriggerPoint").QuestBarRenderedTriggerPoint;
    QuestBarRenderedTriggerPoint.trigger();
  }, []);
  return null;
});
createStyles = fn(4790);
let closure_47 = createStyles.createStyles(() => ({ wrapperAnimated: { position: "absolute", bottom: 0, padding: 0, width: "100%" } }));
let obj7 = {};
const merged4 = Object.assign(fn(5223).SUBTLE_SPRING);
obj7.overshootClamping = true;
obj7.damping = 54;
const constants2 = { PENDING: "pending", SUCCEEDED: "succeeded", FAILED: "failed" };
ReactCompilerGating = fn(558);
let closure_50 = ReactCompilerGating.isReactCompilerEnabled() ? ((identifierMetricTag) => {
  const cResult = identifierMetricTag(iconUrl[14]).c(13);
  identifierMetricTag = identifierMetricTag.identifierMetricTag;
  const backgroundImageUrl = identifierMetricTag.backgroundImageUrl;
  iconUrl = identifierMetricTag.iconUrl;
  const trackAssetLoadingFailure = identifierMetricTag.trackAssetLoadingFailure;
  const tmp2 = effectEvent(noop.useState(constants2.PENDING), 2);
  const first = tmp2[0];
  asyncGeneratorStep = tmp2[1];
  if (cResult[0] !== trackAssetLoadingFailure) {
    const fn = function o(arg0) {
      if (trackAssetLoadingFailure != null) {
        tmp(arg0);
      }
    };
    cResult[0] = trackAssetLoadingFailure;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  effectEvent = obj2.useEffectEvent(tmp4);
  if (cResult[2] === backgroundImageUrl) {
    if (cResult[3] === iconUrl) {
      if (cResult[4] === effectEvent) {
        let tmp6 = cResult[5];
      }
      if (cResult[6] === backgroundImageUrl) {
        if (cResult[7] === iconUrl) {
          let tmp7 = cResult[8];
        }
        const effect = obj2.useEffect(tmp6, tmp7);
        if (cResult[9] === identifierMetricTag) {
          if (cResult[10] === first) {
            let tmp9 = cResult[11];
            let tmp10 = cResult[12];
          }
          const effect1 = obj2.useEffect(tmp9, tmp10);
          return first;
        }
        class A {
          constructor() {
            if (closure_4 === closure_49.FAILED) {
              tmp = closure_1;
              tmp2 = closure_2;
              obj = closure_1(closure_2[40]);
              obj1 = { name: null, tags: null };
              tmp3 = closure_0;
              obj1.name = closure_0(closure_2[41]).MetricEvents.QUEST_CONTENT_RENDERING_FAILURE;
              tmp4 = identifierMetricTag;
              items = [, , ];
              items[0] = identifierMetricTag;
              obj3 = closure_0(closure_2[42]);
              tmp5 = globalThis;
              _HermesInternal = HermesInternal;
              str = "quest_content:";
              items[1] = "quest_content:" + obj3.getQuestContentName(closure_0(closure_2[37]).QuestContent.QUEST_BAR_MOBILE);
              str2 = "reason:asset_loading_error";
              items[2] = "reason:asset_loading_error";
              obj1.tags = items;
              incrementResult = obj.increment(obj1);
            }
            return;
          }
        }
        let items = [first, identifierMetricTag];
        cResult[9] = identifierMetricTag;
        cResult[10] = first;
        cResult[11] = A;
        cResult[12] = items;
        tmp10 = items;
        tmp9 = A;
      }
      const items1 = [, iconUrl];
      cResult[6] = backgroundImageUrl;
      cResult[7] = iconUrl;
      cResult[8] = items1;
      tmp7 = items1;
    }
  }
  class T {
    constructor() {
      closure_129_0 = closure_5(function*(arg0, value) {
        if (v3 === 2) {
          v3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            v3 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                v3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_2 = tmp3;
                closure_1 = tmp7;
                closure_129_0 = closure_0;
                c4 = 1;
                c5 = 2;
                v3 = 1;
                const obj4 = { value: closure_2_11.prefetch(closure_0), done: false };
                return obj4;
              }
            } else if (1 === tmp7) {
              c4 = 0;
              v3(closure_129_0);
              v3 = 3;
              return { value: false, done: true };
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              v3 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              c4 = 0;
              v3 = 3;
              return { value: true, done: true };
            }
          } catch (tmp16) {
            closure_3 = tmp16;
            if (tmp4 === c4) {
              v3 = tmp2;
              throw tmp16;
            } else {
              c5 = tmp;
            }
          }
        }
      });
      closure_0 = closure_5(function*(arg0, value) {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
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
                closure_1 = tmp5;
                closure_128_0 = undefined;
                const items = [];
                if (null != backgroundImageUrl) {
                  items.push(tmp2(tmp24));
                }
                if (null != iconUrl) {
                  items.push(tmp2(tmp15));
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
              const obj = { value, done: true };
              return obj;
            } else {
              closure_128_0 = value;
              if (closure_128_0.every(/* F154086 */ function() { ... })) {
                let FAILED = tmp11.SUCCEEDED;
              } else {
                FAILED = tmp11.FAILED;
              }
              closure_2_5(FAILED);
              c3 = 3;
            }
          } catch (tmp19) {
            c3 = tmp;
            throw tmp19;
          }
        }
      });
      tmp = (function preloadQuestDockAssets() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
      return;
    }
  }
  cResult[2] = backgroundImageUrl;
  cResult[3] = iconUrl;
  cResult[4] = effectEvent;
  cResult[5] = T;
  tmp6 = T;
}) : ((identifierMetricTag) => {
  identifierMetricTag = identifierMetricTag.identifierMetricTag;
  const backgroundImageUrl = identifierMetricTag.backgroundImageUrl;
  const iconUrl = identifierMetricTag.iconUrl;
  const trackAssetLoadingFailure = identifierMetricTag.trackAssetLoadingFailure;
  [first, closure_5] = noop.useState(constants2.PENDING);
  _slicedToArray = noop.useEffectEvent((arg0) => {
    if (trackAssetLoadingFailure != null) {
      tmp(arg0);
    }
  });
  let items = [backgroundImageUrl, iconUrl];
  const effect = noop.useEffect(() => {
    function prefetchWithErrorReporting(arg0) {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    closure_1 = async function _prefetchWithErrorReporting2(arg0, value) {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = tmp3;
              closure_1 = tmp7;
              closure_129_0 = closure_0;
              c4 = 1;
              c5 = 2;
              v3 = 1;
              const obj4 = { value: closure_2_11.prefetch(closure_0), done: false };
              return obj4;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            v3(closure_129_0);
            v3 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c4 = 0;
            v3 = 3;
            return { value: true, done: true };
          }
        } catch (tmp16) {
          closure_3 = tmp16;
          if (tmp4 === c4) {
            v3 = tmp2;
            throw tmp16;
          } else {
            c5 = tmp;
          }
        }
      }
    };
    closure_2 = async function _preloadQuestDockAssets2(arg0, value) {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
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
              closure_1 = tmp5;
              closure_0 = tmp2;
              closure_128_0 = undefined;
              const items = [];
              if (null != closure_1) {
                items.push(prefetchWithErrorReporting(tmp24));
              }
              if (null != c2) {
                items.push(prefetchWithErrorReporting(tmp15));
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
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            if (closure_128_0.every((item) => true === item)) {
              let FAILED = tmp11.SUCCEEDED;
            } else {
              FAILED = tmp11.FAILED;
            }
            closure_1_5(FAILED);
            c3 = 3;
          }
        } catch (tmp19) {
          c3 = tmp;
          throw tmp19;
        }
      }
    };
    !(function preloadQuestDockAssets() {
      const self = this;
      const apply = closure_2.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  }, items);
  const items1 = [first, identifierMetricTag];
  const effect1 = noop.useEffect(() => {
    if (first === constants.FAILED) {
      const obj2 = { name: MetricEvents.MetricEvents.QUEST_CONTENT_RENDERING_FAILURE, tags: null };
      const items = [identifierMetricTag, , ];
      const obj = MonitoringAgentDefault;
      const _HermesInternal = HermesInternal;
      items[1] = "quest_content:" + AnalyticsTypes.getQuestContentName(QuestTypes.QuestContent.QUEST_BAR_MOBILE);
      items[2] = "reason:asset_loading_error";
      obj2.tags = items;
      obj.increment(obj2);
    }
  }, items1);
  return first;
});
const __initData16 = { code: "function QuestDockTsx17(){const{withSpring,isRendered,ENTRANCE_ANIMATION_SPING_CONFIG,componentDimensions}=this.__closure;return{opacity:withSpring(isRendered?1:0,ENTRANCE_ANIMATION_SPING_CONFIG,\"animate-always\"),transform:[{translateY:withSpring(isRendered?0:componentDimensions.height,ENTRANCE_ANIMATION_SPING_CONFIG)}]};}" };
const __initData17 = { code: "function QuestDockTsx18(){const{withSpring,isRendered,ENTRANCE_ANIMATION_SPING_CONFIG,componentDimensions}=this.__closure;return{opacity:withSpring(isRendered?1:0,ENTRANCE_ANIMATION_SPING_CONFIG,'animate-always'),transform:[{translateY:withSpring(isRendered?0:componentDimensions.height,ENTRANCE_ANIMATION_SPING_CONFIG)}]};}" };
ReactCompilerGating = fn(558);
let closure_53 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDockWithEntranceAnimation(identifierMetricTag) {
  const cResult = renderModeChangeTracker(layoutVariant[14]).c(37);
  ({ renderImpressionTracker, renderModeChangeTracker } = identifierMetricTag);
  identifierMetricTag = identifierMetricTag.identifierMetricTag;
  ({ backgroundImageUrl, iconUrl, trackAssetLoadingFailure, layoutVariant } = identifierMetricTag);
  const theme = identifierMetricTag.theme;
  const backgroundColor = identifierMetricTag.backgroundColor;
  expandedHeight = identifierMetricTag.expandedHeight;
  const collapsedContent = identifierMetricTag.collapsedContent;
  const expandedContent = identifierMetricTag.expandedContent;
  const backgroundContent = identifierMetricTag.backgroundContent;
  const context = backgroundContent.useContext(identifierMetricTag(layoutVariant[43]));
  const isRendered = context.isRendered;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ref];
    const fn = function s() {
      return ref.prevRestingQuestDockMode;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = renderModeChangeTracker(layoutVariant[14]);
  const stateFromStores = renderModeChangeTracker(layoutVariant[44]).useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        return performance.now();
      }
    }
    cResult[2] = R;
    const tmp9 = R;
  } else {
    class R {
      constructor() {
        return performance.now();
      }
    }
  }
  closure_11 = collapsedContent(obj2.useState(tmp9), 1)[0];
  ref = backgroundContent.useRef(false);
  closure_47();
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        return performance.now();
      }
    }
    cResult[3] = tmp13;
    const tmp12 = tmp13;
  } else {
    class R {
      constructor() {
        return performance.now();
      }
    }
  }
  const tmp10Result = collapsedContent(backgroundContent.useState(tmp12), 2);
  const componentDimensions = tmp10Result[0];
  closure_14 = tmp10Result[1];
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        return performance.now();
      }
    }
    const isEligibleForQuests = obj4.getIsEligibleForQuests();
    cResult[4] = isEligibleForQuests;
  } else {
    class R {
      constructor() {
        return performance.now();
      }
    }
  }
  let tmpResult = renderModeChangeTracker(layoutVariant[44]);
  class W {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[26]);
      num = 0;
      tmp3 = isRendered;
      if (isRendered) {
        num = 1;
      }
      obj1 = { opacity: obj.withSpring(num, closure_48, "animate-always"), transform: null };
      tmp4 = closure_48;
      tmpResult = tmp(tmp2[26]);
      num2 = 0;
      if (!tmp3) {
        tmp5 = closure_13;
        num2 = closure_13.height;
      }
      obj5 = { translateY: tmpResult.withSpring(num2, tmp4) };
      items = [];
      items[0] = obj5;
      obj1.transform = items;
      return obj1;
    }
  }
  const tmpResult2 = renderModeChangeTracker(layoutVariant[20]);
  W.__closure = { withSpring: renderModeChangeTracker(layoutVariant[26]).withSpring, isRendered, ENTRANCE_ANIMATION_SPING_CONFIG: obj7, componentDimensions };
  W.__workletHash = 7000537051560;
  W.__initData = __initData16;
  const animatedStyle = tmpResult2.useAnimatedStyle(W);
  if (cResult[5] === backgroundImageUrl) {
    class R {
      constructor() {
        return performance.now();
      }
    }
  }
  cResult[5] = backgroundImageUrl;
  cResult[6] = iconUrl;
  cResult[7] = identifierMetricTag;
  cResult[8] = trackAssetLoadingFailure;
  cResult[9] = { identifierMetricTag, backgroundImageUrl, iconUrl, trackAssetLoadingFailure };
}) : (function QuestDockWithEntranceAnimation(arg0) {
  ({ renderModeChangeTracker: require, identifierMetricTag } = arg0);
  ({ layoutVariant: dependencyMap, theme: closure_3, backgroundColor: closure_4, expandedHeight: asyncGeneratorStep, collapsedContent: _slicedToArray, expandedContent: _objectWithoutProperties, backgroundContent: noop } = arg0);
  ({ renderImpressionTracker, backgroundImageUrl, iconUrl, trackAssetLoadingFailure } = arg0);
  const context = noop.useContext(identifierMetricTag(15448));
  const isRendered = context.isRendered;
  let items = [ref];
  const mode = initialize.useStateFromStores(items, () => ref.prevRestingQuestDockMode);
  closure_11 = _slicedToArray(noop.useState(() => performance.now()), 1)[0];
  let obj = noop;
  let tmp = identifierMetricTag;
  ref = noop.useRef(false);
  [componentDimensions, closure_14] = noop.useState({ width: 0, height: 0 });
  let tmp4 = closure_47();
  const isEligibleForQuests = QuestsEligibility.getIsEligibleForQuests();
  const fn = function o() {
    let num = 0;
    if (isRendered) {
      num = 1;
    }
    const obj2 = { opacity: spring.withSpring(num, obj7, "animate-always"), transform: null };
    const tmp3 = isRendered;
    const tmp4 = obj7;
    let num2 = 0;
    if (!tmp3) {
      num2 = first.height;
    }
    const tmpResult = spring;
    const items = [{ translateY: spring.withSpring(num2, tmp4) }];
    obj2.transform = items;
    return obj2;
  };
  let obj4 = ReanimatedRexport;
  fn.__closure = { withSpring: spring.withSpring, isRendered, ENTRANCE_ANIMATION_SPING_CONFIG: obj7, componentDimensions };
  fn.__workletHash = 13272356181063;
  fn.__initData = __initData17;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  let tmp10 = !isEligibleForQuests;
  if (isEligibleForQuests) {
    tmp10 = tmp9 !== constants2.SUCCEEDED;
  }
  closure_15 = tmp10;
  const items1 = [tmp10];
  const effect = obj.useEffect(() => {
    let result = QuestActionCreators.updateQuestDockVisibilityEligibility({ isEligibleToBeVisible: !closure_15 });
    return () => {
      const result = closure_1_0(layoutVariant[46]).updateQuestDockVisibilityEligibility({ isEligibleToBeVisible: false });
    };
  }, items1);
  let tmp13 = null;
  if (!tmp10) {
    const obj6 = { pointerEvents: "box-none", style: null, onLayout: null, children: null };
    const items2 = [tmp4.wrapperAnimated, animatedStyle];
    obj6.style = items2;
    obj6.onLayout = function onLayout(height) {
      const size = { height: height.nativeEvent.layout.height, width: height.nativeEvent.layout.width };
      closure_14(size);
      if (!ref.current) {
        tmp2.current = true;
        const _Math = Math;
        if (Math.random() < 0.1) {
          const _Math2 = Math;
          const _performance = performance;
          const rounded = Math.round(performance.now() - closure_11);
          const obj = { name: MetricEvents.MetricEvents.QUEST_BAR_MOBILE_TIME_TO_FIRST_PAINT, tags: null };
          const items = [identifierMetricTag];
          obj.tags = items;
          MonitoringAgentDefault.distribution(obj, rounded);
        }
      }
    };
    obj7 = {
      children() {
          const obj = { children: null };
          const items = [_require({ mode }), closure_2_24(closure_46, {}), ];
          const obj3 = { expandedHeight, children: null };
          const obj4 = { theme, children: closure_2_24(closure_44, { backgroundColor, layoutVariant, expandedHeight, collapsedContent, expandedContent, backgroundContent }) };
          obj3.children = closure_2_24(native.ThemeContextProvider, obj4);
          items[2] = closure_2_24(QuestDockGestureContext.QuestDockGestureContextProvider, obj3);
          obj.children = items;
          return closure_2_25(closure_2_26, obj);
        },
      overrideVisibility: context.isVisibleToUser
    };
    obj6.children = renderImpressionTracker(obj7);
    tmp13 = closure_24(tmp(4529).View, obj6);
  }
  return tmp13;
});
ReactCompilerGating = fn(558);
let tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDockQuestContent(quest) {
  const cResult = quest(568).c(27);
  quest = quest.quest;
  const obj = quest(568);
  const questBarImpressionSurvey = quest(11643).useQuestBarImpressionSurvey(quest);
  const obj2 = quest(11643);
  const questDockAppThemedBackgroundColor = quest(15358).useQuestDockAppThemedBackgroundColor();
  const obj3 = quest(15358);
  const staticUrl = quest(15357).useQuestDockHeroAsset(quest).staticUrl;
  const obj4 = quest(15357);
  const questGameLogotypeAssetUrl = quest(15357).useQuestGameLogotypeAssetUrl(quest);
  const userStatus = quest.userStatus;
  let enrolledAt;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  const combined = "quest_id:" + quest.id;
  if (cResult[0] !== quest.id) {
    const fn = function o(asset_id) {
      AnalyticsUtilsDefault.track(AnalyticEvents.QUEST_ASSET_LOADING_FAILURE, { quest_id: quest.id, source: constants.QUESTS_BAR_MOBILE, asset_id });
    };
    cResult[0] = quest.id;
    cResult[1] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[1];
  }
  let str = "insetHeader";
  if (null != enrolledAt) {
    str = "flush";
  }
  if (null == enrolledAt) {
    const DARK = ThemeTypes.DARK;
  }
  if (cResult[2] !== (null != enrolledAt)) {
    const tmp14Result = closure_24(questBarImpressionSurvey(tmp7 ? 15456 : 15457), {});
    const tmp14Result3 = closure_24(questBarImpressionSurvey(tmp7 ? 15464 : 15465), {});
    let tmp14Result4 = null;
    if (!tmp7) {
      tmp14Result4 = tmp14(tmp15(15467), {});
    }
    cResult[2] = tmp7;
    cResult[3] = tmp14Result;
    cResult[4] = tmp14Result3;
    cResult[5] = tmp14Result4;
    let tmp13 = tmp14Result4;
    let tmp12 = tmp14Result3;
    let tmp11 = tmp14Result;
  } else {
    tmp11 = cResult[3];
    tmp12 = cResult[4];
    tmp13 = cResult[5];
  }
  if (cResult[6] === questBarImpressionSurvey) {
    if (cResult[7] === quest) {
      let tmp19 = cResult[8];
    }
    if (cResult[9] !== quest.id) {
      class T {
        constructor(arg0) {
          obj = { questId: quest.id, mode: quest.mode };
          return jsx(f69872, obj);
        }
      }
      cResult[9] = quest.id;
      cResult[10] = T;
    } else {
      class T {
        constructor(arg0) {
          obj = { questId: quest.id, mode: quest.mode };
          return jsx(f69872, obj);
        }
      }
    }
    if (cResult[11] === questDockAppThemedBackgroundColor) {
      class T {
        constructor(arg0) {
          obj = { questId: quest.id, mode: quest.mode };
          return jsx(f69872, obj);
        }
      }
    }
    const obj6 = { identifierMetricTag: combined, backgroundImageUrl: staticUrl, iconUrl: questGameLogotypeAssetUrl, trackAssetLoadingFailure: tmp9, layoutVariant: str, theme: DARK, backgroundColor: questDockAppThemedBackgroundColor, expandedHeight, collapsedContent: tmp11, expandedContent: tmp12, backgroundContent: tmp13, renderImpressionTracker: tmp19, renderModeChangeTracker: tmp20 };
    const tmp25 = closure_24(closure_53, obj6);
    cResult[11] = questDockAppThemedBackgroundColor;
    cResult[12] = staticUrl;
    cResult[13] = questGameLogotypeAssetUrl;
    cResult[14] = combined;
    cResult[15] = tmp9;
    cResult[16] = str;
    class C {
      constructor(arg0) {
        ({ children, overrideVisibility } = quest);
        obj = { questOrQuests: quest, overrideVisibility, questContent: closure_0(closure_2[37]).QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: closure_0(closure_2[37]).QuestContent.QUEST_BAR_MOBILE, onImpression: closure_1, children };
        return jsx(closure_0(closure_2[55]).BillableAdPlacementImpressionTrackerNative, obj);
      }
    }
    cResult[18] = tmp11;
    cResult[19] = tmp12;
    cResult[20] = tmp13;
    cResult[21] = tmp19;
    cResult[22] = tmp20;
    cResult[23] = tmp25;
  }
  class C {
    constructor(arg0) {
      ({ children, overrideVisibility } = quest);
      obj = { questOrQuests: quest, overrideVisibility, questContent: closure_0(closure_2[37]).QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: closure_0(closure_2[37]).QuestContent.QUEST_BAR_MOBILE, onImpression: closure_1, children };
      return jsx(closure_0(closure_2[55]).BillableAdPlacementImpressionTrackerNative, obj);
    }
  }
  cResult[6] = questBarImpressionSurvey;
  cResult[7] = quest;
  cResult[8] = C;
  tmp19 = C;
}) : (function QuestDockQuestContent(quest) {
  quest = quest.quest;
  const onImpression = quest(11643).useQuestBarImpressionSurvey(quest);
  const obj = quest(11643);
  const tmp = quest;
  const questDockAppThemedBackgroundColor = quest(15358).useQuestDockAppThemedBackgroundColor();
  const obj2 = quest(15358);
  const obj3 = quest(15357);
  const userStatus = quest.userStatus;
  let enrolledAt;
  const questGameLogotypeAssetUrl = quest(15357).useQuestGameLogotypeAssetUrl(quest);
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  const obj5 = { quest, children: null };
  const obj6 = {
    identifierMetricTag: "quest_id:" + quest.id,
    backgroundImageUrl: obj3.useQuestDockHeroAsset(quest).staticUrl,
    iconUrl: questGameLogotypeAssetUrl,
    trackAssetLoadingFailure(asset_id) {
      AnalyticsUtilsDefault.track(AnalyticEvents.QUEST_ASSET_LOADING_FAILURE, { quest_id: quest.id, source: constants.QUESTS_BAR_MOBILE, asset_id });
    },
    layoutVariant: null,
    theme: null,
    backgroundColor: null,
    expandedHeight: null,
    collapsedContent: null,
    expandedContent: null,
    backgroundContent: null,
    renderImpressionTracker: null,
    renderModeChangeTracker: null
  };
  let str = "insetHeader";
  if (null != enrolledAt) {
    str = "flush";
  }
  obj6.layoutVariant = str;
  let DARK;
  if (null == enrolledAt) {
    DARK = ThemeTypes.DARK;
  }
  obj6.theme = DARK;
  obj6.backgroundColor = questDockAppThemedBackgroundColor;
  obj6.expandedHeight = expandedHeight;
  obj6.collapsedContent = closure_24(onImpression(null != enrolledAt ? 15456 : 15457), {});
  obj6.expandedContent = closure_24(onImpression(null != enrolledAt ? 15464 : 15465), {});
  let tmp7Result = null;
  if (null == enrolledAt) {
    tmp7Result = tmp7(tmp11(15467), {});
  }
  obj6.backgroundContent = tmp7Result;
  obj6.renderImpressionTracker = function renderImpressionTracker(arg0) {
    ({ children, overrideVisibility } = arg0);
    return closure_2_24(QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative, { questOrQuests: quest, overrideVisibility, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, onImpression, children });
  };
  obj6.renderModeChangeTracker = function renderModeChangeTracker(mode) {
    return closure_2_24(closure_45, { questId: quest.id, mode: mode.mode });
  };
  obj5.children = closure_24(closure_53, obj6);
  return closure_24(tmp(15368).QuestDockQuestProvider, obj5);
});
let closure_54 = tmp11;
ReactCompilerGating = fn(558);
let closure_55 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDockBountyContent(bounty) {
  const cResult = bounty(568).c(21);
  bounty = bounty.bounty;
  let obj = bounty(568);
  const tmp = bounty;
  const bountyPreviewImageUrl = bounty(15358).useBountyPreviewImageUrl(bounty);
  const obj2 = bounty(15358);
  const questDockAppThemedBackgroundColor = bounty(15358).useQuestDockAppThemedBackgroundColor();
  const combined = "ad_creative_id:" + bounty.id;
  if (cResult[0] !== bounty.id) {
    const fn = function o(asset_id) {
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.AD_ASSET_LOADING_FAILURE, { source: constants.QUESTS_BAR_MOBILE, ad_creative_id: bounty.id, ad_creative_type: AdCreativeType.AdCreativeType.BOUNTY, asset_id });
    };
    cResult[0] = bounty.id;
    cResult[1] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp12 = closure_24(QuestDockBountyHeaderDefault, {});
    const tmp13 = closure_24(QuestDockBountyBodyDefault, {});
    cResult[2] = tmp12;
    cResult[3] = tmp13;
    let tmp9 = tmp13;
    let tmp8 = tmp12;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  if (cResult[4] !== bountyPreviewImageUrl) {
    const obj4 = { previewImageUrl: bountyPreviewImageUrl };
    const tmp17 = closure_24(QuestDockBountyBackgroundDefault, obj4);
    cResult[4] = bountyPreviewImageUrl;
    cResult[5] = tmp17;
    let tmp14 = tmp17;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] !== bounty.id) {
    const fn2 = function u(arg0) {
      ({ children, overrideVisibility } = arg0);
      return closure_2_24(QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative, { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, overrideVisibility, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, children });
    };
    class D {
      constructor(arg0) {
        obj = { adCreativeType: closure_0(closure_2[56]).AdCreativeType.BOUNTY, adContentId: bounty.id, mode: bounty.mode };
        return jsx(f69872, obj);
      }
    }
    cResult[6] = bounty.id;
    cResult[7] = fn2;
    cResult[8] = D;
    let tmp18 = fn2;
  } else {
    tmp18 = cResult[7];
    class D {
      constructor(arg0) {
        obj = { adCreativeType: closure_0(closure_2[56]).AdCreativeType.BOUNTY, adContentId: bounty.id, mode: bounty.mode };
        return jsx(f69872, obj);
      }
    }
  }
  if (cResult[9] === questDockAppThemedBackgroundColor) {
    if (cResult[10] === bounty.productIcon) {
      if (cResult[11] === bountyPreviewImageUrl) {
        if (cResult[12] === combined) {
          if (cResult[13] === tmp7) {
            if (cResult[14] === tmp14) {
              if (cResult[15] === tmp18) {
                if (cResult[16] === tmp19) {
                  let tmp20 = cResult[17];
                }
                class D {
                  constructor(arg0) {
                    obj = { adCreativeType: closure_0(closure_2[56]).AdCreativeType.BOUNTY, adContentId: bounty.id, mode: bounty.mode };
                    return jsx(f69872, obj);
                  }
                }
                const obj5 = { bounty, children: tmp20 };
                const tmp24 = closure_24(tmp(15368).QuestDockBountyProvider, obj5);
                cResult[18] = bounty;
                cResult[19] = tmp20;
                cResult[20] = tmp24;
              }
            }
          }
        }
      }
    }
  }
  const tmp21 = closure_24(closure_53, { identifierMetricTag: combined, backgroundImageUrl: bountyPreviewImageUrl, iconUrl: bounty.productIcon, trackAssetLoadingFailure: tmp7, layoutVariant: "insetHeader", theme: ThemeTypes.DARK, backgroundColor: questDockAppThemedBackgroundColor, expandedHeight: expandedHeight2, collapsedContent: tmp8, expandedContent: tmp9, backgroundContent: tmp14, renderImpressionTracker: tmp18, renderModeChangeTracker: tmp19 });
  cResult[9] = questDockAppThemedBackgroundColor;
  cResult[10] = bounty.productIcon;
  cResult[11] = bountyPreviewImageUrl;
  cResult[12] = combined;
  cResult[13] = tmp7;
  cResult[14] = tmp14;
  cResult[15] = tmp18;
  cResult[16] = tmp19;
  cResult[17] = tmp21;
  tmp20 = tmp21;
}) : (function QuestDockBountyContent(bounty) {
  bounty = bounty.bounty;
  const bountyPreviewImageUrl = bounty(15358).useBountyPreviewImageUrl(bounty);
  let obj = bounty(15358);
  const questDockAppThemedBackgroundColor = bounty(15358).useQuestDockAppThemedBackgroundColor();
  const obj3 = { bounty, children: null };
  const obj2 = bounty(15358);
  obj3.children = closure_24(closure_53, {
    identifierMetricTag: "ad_creative_id:" + bounty.id,
    backgroundImageUrl: bountyPreviewImageUrl,
    iconUrl: bounty.productIcon,
    trackAssetLoadingFailure(asset_id) {
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.AD_ASSET_LOADING_FAILURE, { source: constants.QUESTS_BAR_MOBILE, ad_creative_id: bounty.id, ad_creative_type: AdCreativeType.AdCreativeType.BOUNTY, asset_id });
    },
    layoutVariant: "insetHeader",
    theme: ThemeTypes.DARK,
    backgroundColor: questDockAppThemedBackgroundColor,
    expandedHeight: expandedHeight2,
    collapsedContent: closure_24(QuestDockBountyHeaderDefault, {}),
    expandedContent: closure_24(QuestDockBountyBodyDefault, {}),
    backgroundContent: closure_24(QuestDockBountyBackgroundDefault, { previewImageUrl: bountyPreviewImageUrl }),
    renderImpressionTracker(arg0) {
      ({ children, overrideVisibility } = arg0);
      return closure_2_24(QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative, { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, overrideVisibility, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, children });
    },
    renderModeChangeTracker(mode) {
      return closure_2_24(closure_45, { adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, adContentId: bounty.id, mode: mode.mode });
    }
  });
  return closure_24(bounty(15368).QuestDockBountyProvider, obj3);
});
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDock.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDockWithVisibilityContext() {
  let tmp2 = dependencyMap;
  const cResult = c.c(10);
  const mobileQuestDock = QuestHooks.useMobileQuestDock();
  const isMobileQuestDockRenderedBase = QuestHooks.useIsMobileQuestDockRenderedBase(mobileQuestDock);
  const isMobileQuestDockVisibleToUser = QuestHooks.useIsMobileQuestDockVisibleToUser(mobileQuestDock, isMobileQuestDockRenderedBase);
  if (cResult[0] === isMobileQuestDockRenderedBase) {
    if (cResult[1] === isMobileQuestDockVisibleToUser) {
      let tmp7 = cResult[2];
    }
    const type = mobileQuestDock.type;
    if (tmp(5702).AdCreativeType.BOUNTY === type) {
      if (cResult[3] !== mobileQuestDock.bounty) {
        const obj5 = { bounty: mobileQuestDock.bounty };
        const tmp16 = closure_1_24(closure_55, obj5);
        cResult[3] = mobileQuestDock.bounty;
        cResult[4] = tmp16;
      }
    } else {
      if (tmp(5702).AdCreativeType.QUEST === type) {
        if (cResult[5] !== mobileQuestDock.quest) {
          const obj6 = { quest: mobileQuestDock.quest };
          const tmp12 = closure_1_24(closure_54, obj6);
          cResult[5] = mobileQuestDock.quest;
          cResult[6] = tmp12;
          let tmp9 = tmp12;
        } else {
          tmp9 = cResult[6];
        }
        let tmp8 = tmp9;
      } else if (tmp(5702).AdCreativeType.NO_FILL === type) {
        tmp8 = null;
      }
      if (mobileQuestDock.type === tmp(5702).AdCreativeType.NO_FILL) {
        return null;
      } else {
        if (cResult[7] === tmp8) {
        }
        obj7 = { value: tmp7, children: tmp8 };
        tmp2 = closure_1_24(QuestDockVisibilityContextDefault.Provider, obj7);
        cResult[7] = tmp8;
        cResult[8] = tmp7;
        cResult[9] = tmp2;
      }
    }
  }
  const obj8 = { isRendered: isMobileQuestDockRenderedBase, isVisibleToUser: isMobileQuestDockVisibleToUser };
  cResult[0] = isMobileQuestDockRenderedBase;
  cResult[1] = isMobileQuestDockVisibleToUser;
  cResult[2] = obj8;
  tmp7 = obj8;
}) : (function QuestDockWithVisibilityContext() {
  mobileQuestDock = mobileQuestDock(isMobileQuestDockVisibleToUser[48]).useMobileQuestDock();
  let obj = mobileQuestDock(isMobileQuestDockVisibleToUser[48]);
  const tmp = isMobileQuestDockVisibleToUser;
  const isMobileQuestDockRenderedBase = mobileQuestDock(isMobileQuestDockVisibleToUser[48]).useIsMobileQuestDockRenderedBase(mobileQuestDock);
  let obj2 = mobileQuestDock(isMobileQuestDockVisibleToUser[48]);
  isMobileQuestDockVisibleToUser = mobileQuestDock(isMobileQuestDockVisibleToUser[48]).useIsMobileQuestDockVisibleToUser(mobileQuestDock, isMobileQuestDockRenderedBase);
  const items = [isMobileQuestDockRenderedBase, isMobileQuestDockVisibleToUser];
  const items1 = [mobileQuestDock];
  const memo = noop.useMemo(() => ({ isRendered: isMobileQuestDockRenderedBase, isVisibleToUser: isMobileQuestDockVisibleToUser }), items);
  const memo1 = noop.useMemo(() => {
    const type = mobileQuestDock.type;
    if (AdCreativeType.AdCreativeType.BOUNTY === type) {
      const obj2 = { bounty: tmp.bounty };
      return closure_2_24(closure_55, obj2);
    } else if (tmp2(5702).AdCreativeType.QUEST === type) {
      const obj = { quest: tmp.quest };
      return closure_2_24(closure_54, obj);
    } else if (tmp2(5702).AdCreativeType.NO_FILL === type) {
      return null;
    }
  }, items1);
  let tmp7 = null;
  if (mobileQuestDock.type !== mobileQuestDock(isMobileQuestDockVisibleToUser[56]).AdCreativeType.NO_FILL) {
    const obj4 = { value: memo, children: memo1 };
    tmp7 = closure_24(isMobileQuestDockRenderedBase(tmp[43]).Provider, obj4);
  }
  return tmp7;
}));
export const QuestDockQuestContent = tmp11;
