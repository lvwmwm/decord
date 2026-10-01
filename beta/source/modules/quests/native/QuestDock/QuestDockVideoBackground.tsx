// Module ID: 14731
// Function ID: 14732
// Name: QuestDockVideoBackground
// Dependencies: [32, 19, 17, 4825, 5756, 14624, 1074, 21, 4836, 14625, 4566, 5280, 6494, 14628, 14711, 7715, 1479, 1613, 504, 14623, 672, 14732, 1364, 10678, 5899, 7755, 5293, 2]

// Module 14731 (QuestDockVideoBackground)
import _modDef672 from "module_672" /* 672 */;
import Constants from "Constants" /* 1074 */;
import spring from "spring" /* 5280 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import FastImageDefault from "FastImage" /* 5899 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 6494 */;
import QuestDockUtils from "QuestDockUtils" /* 14623 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import QuestDockConstants from "QuestDockConstants" /* 14624 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c10;
let c9;
let closure_12;
let hasOwnProperty;
let map1;
let metroRequire;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
function QuestDockBackgroundMediaFade(arg0) {
  let children;
  let items;
  let style;
  let activeQuestDockMode;
  ({ children, style } = arg0);
  const tmp = closure_17();
  activeQuestDockMode = react.useContext(activeQuestDockMode(14625).QuestDockGestureContext).activeQuestDockMode;
  let obj = activeQuestDockMode(4566);
  const fn = function n() {
    const withSpring = spring.withSpring;
    let num = 0;
    spring;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 1;
    }
    const obj = { opacity: withSpring(num, c9) };
    return obj;
  };
  fn.__closure = { withSpring: activeQuestDockMode(5280).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn.__workletHash = 5908890006198;
  fn.__initData = __initData;
  ({ withSpring: activeQuestDockMode(5280).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED });
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: items, children };
  items = [tmp.media, style, animatedStyle];
  return closure_12(ReanimatedNativeViewDefault, obj3);
}
let _slicedToArray = _slicedToArray_mod;
({ AppState: hasOwnProperty, StyleSheet, View: metroRequire } = react_native);
const QuestDockMode = QuestConstants.QuestDockMode;
({ QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: c9, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: c10 } = QuestDockConstants);
const VerticalGradient = Constants.VerticalGradient;
let Fragment = Fragment_mod;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let closure_14 = [0, 0.1, 0.8, 1];
const locations = [0, 0.33, 0.76, 1];
const QuestDockBackgroundCollapsedMediaMode = { PAUSED: "paused", HIDDEN: "hidden" };
let createStyles = createStyles_mod;
let obj2 = { backgroundWrapper: obj3, backgroundImage: obj4, backgroundImageWrapper: obj5, backgroundVideo: obj6, media: obj7, backgroundGradient: obj8, backdrop: obj9 };
obj3 = { right: undefined, bottom: undefined, zIndex: 1 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { resizeMode: "cover" };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj5 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj6 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj7 = {};
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj8 = {};
const merged5 = Object.assign(StyleSheet.absoluteFillObject);
obj9 = {};
const merged6 = Object.assign(StyleSheet.absoluteFillObject);
let closure_17 = createStyles(obj2);
const __initData = { code: "function QuestDockVideoBackgroundTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData2 = { code: "function QuestDockVideoBackgroundTsx2(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,windowDimensions}=this.__closure;return{transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}],width:windowDimensions.get().width};}" };
const __initData3 = { code: "function QuestDockVideoBackgroundTsx3(){const{withSpring,shouldShowVideo,videoLoaded,isMediaHiddenWhenCollapsed,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(shouldShowVideo&&videoLoaded&&(isMediaHiddenWhenCollapsed||activeQuestDockMode.get()===QuestDockMode.EXPANDED)?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const memoResult = react.memo(function QuestDockVideoBackground(imageUrl) {
  let backdropColor;
  let c9;
  let closure_3;
  let collapsedMediaMode;
  let expandedHeight;
  let items10;
  let items11;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj;
  let obj10;
  let obj7;
  let obj9;
  let tmp18;
  let videoUrl;
  imageUrl = imageUrl.imageUrl;
  ({ videoUrl, collapsedMediaMode } = imageUrl);
  const videoMimetype = imageUrl.videoMimetype;
  if (collapsedMediaMode === undefined) {
    let tmp = obj;
    collapsedMediaMode = obj.PAUSED;
  }
  const gradientBaseColor = imageUrl.gradientBaseColor;
  ({ backdropColor, expandedHeight } = imageUrl);
  let activeQuestDockMode;
  QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = undefined;
  let c10;
  let videoLoaded;
  closure_12 = undefined;
  let tmp2 = collapsedMediaMode === obj.HIDDEN;
  _slicedToArray = tmp2;
  const foregroundContent = imageUrl.foregroundContent;
  let tmp3 = closure_17();
  obj = activeQuestDockMode;
  let tmp4 = imageUrl;
  const context = activeQuestDockMode.useContext(imageUrl(expandedHeight[9]).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  const setRestingQuestDockMode = activeQuestDockMode.useContext(imageUrl(expandedHeight[13]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const isRendered = activeQuestDockMode.useContext(gradientBaseColor(expandedHeight[14])).isRendered;
  const tmp8 = gradientBaseColor(expandedHeight[15])(activeQuestDockMode);
  const height = gradientBaseColor(expandedHeight[16])().height;
  const top = gradientBaseColor(expandedHeight[17])().top;
  let obj2 = imageUrl(expandedHeight[18]);
  let items = [height];
  const items1 = [height, top, expandedHeight];
  const stateFromStores = obj2.useStateFromStores(items, () => height.useReducedMotion);
  const memo = activeQuestDockMode.useMemo(() => {
    let obj2;
    const obj = { height: obj2.getQuestDockExpandedHeightLimits(height, top, expandedHeight).maxHeight };
    obj2 = QuestDockUtils;
    return obj;
  }, items1);
  const items2 = [gradientBaseColor];
  const memo1 = activeQuestDockMode.useMemo(() => {
    let closure_0 = _modDef672(gradientBaseColor);
    return closure_14.map((item) => {
      const alphaResult = closure_0.alpha(item);
      return alphaResult.hex();
    });
  }, items2);
  let obj3 = imageUrl(expandedHeight[10]);
  const fn = function w() {
    const withSpring = spring.withSpring;
    let num = 0;
    spring;
    const obj = activeQuestDockMode;
    const tmp4 = QuestDockMode;
    if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
      num = -1 * authStore;
    }
    const items = [{ translateX: withSpring(num, c9) }, ];
    ({ translateX: withSpring(num, c9) });
    const withSpring2 = tmp(5280).withSpring;
    let num3 = 0;
    spring;
    if (obj.get() === tmp4.COLLAPSED) {
      num3 = -1 * authStore;
    }
    const obj3 = { transform: items, width: windowDimensions.get().width };
    items[1] = { translateY: withSpring2(num3, c9) };
    ({ translateY: withSpring2(num3, c9) });
    return obj3;
  };
  const obj4 = { withSpring: imageUrl(expandedHeight[11]).withSpring, activeQuestDockMode, QuestDockMode: top, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: c10, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, windowDimensions };
  fn.__closure = obj4;
  fn.__workletHash = 1105448000732;
  fn.__initData = __initData2;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const tmp15 = gradientBaseColor(expandedHeight[21])(top.EXPANDED);
  [tmp18, c9] = activeQuestDockMode.useState("active" !== windowDimensions.currentState);
  const items3 = [activeQuestDockMode, setRestingQuestDockMode];
  _slicedToArray(activeQuestDockMode.useState("active" !== windowDimensions.currentState), 2);
  const effect = activeQuestDockMode.useEffect(() => {
    let closure_0 = windowDimensions.addEventListener("change", (event) => {
      closure_1_9("active" !== event);
      const obj = imageUrl(expandedHeight[22]);
      const tmp3 = obj.isIOS() && tmp && activeQuestDockMode.get() === top.EXPANDED;
      if (tmp3) {
        setRestingQuestDockMode(top.COLLAPSED);
      }
    });
    return () => {
      closure_0.remove();
    };
  }, items3);
  let isHeroVideoSupportedResult = !tmp18 && isRendered && !stateFromStores;
  const tmp16 = _slicedToArray;
  if (isHeroVideoSupportedResult) {
    isHeroVideoSupportedResult = null != videoUrl;
  }
  if (isHeroVideoSupportedResult) {
    const tmp4Result = tmp4(expandedHeight[22]);
    isHeroVideoSupportedResult = !tmp4Result.isAndroid();
  }
  if (isHeroVideoSupportedResult) {
    const tmp4Result3 = tmp4(expandedHeight[23]);
    isHeroVideoSupportedResult = tmp4Result3.isHeroVideoSupported(videoMimetype);
  }
  if (isHeroVideoSupportedResult) {
    let tmp22 = !tmp2;
    if (tmp2) {
      tmp22 = tmp15;
    }
    isHeroVideoSupportedResult = tmp22;
  }
  c10 = isHeroVideoSupportedResult;
  const tmp16Result = tmp16(obj.useState(false), 2);
  videoLoaded = tmp16Result[0];
  closure_12 = tmp25;
  let tmp27 = videoLoaded;
  const callback = obj.useCallback(() => {
    closure_12(true);
  }, []);
  if (videoLoaded) {
    tmp27 = !isHeroVideoSupportedResult;
  }
  if (tmp27) {
    tmp16Result[1](false);
  }
  const items4 = [imageUrl, tmp2];
  const effect1 = obj.useEffect(() => {
    let tmp2 = null != imageUrl;
    const tmp = imageUrl;
    if (tmp2) {
      tmp2 = closure_3;
    }
    if (tmp2) {
      const obj = FastImageDefault;
      obj.preload(tmp);
    }
  }, items4);
  function de() {
    let num = 1;
    const withSpring = spring.withSpring;
    spring;
    if (c10) {
      num = 1;
      if (first) {
        const tmp3 = closure_3;
        if (tmp3) {
          num = 0;
        } else {
          num = 1;
        }
      }
    }
    const obj = { opacity: withSpring(num, c9) };
    return obj;
  }
  const tmp4Result4 = tmp4(expandedHeight[10]);
  de.__closure = { withSpring: tmp4(expandedHeight[11]).withSpring, shouldShowVideo: isHeroVideoSupportedResult, videoLoaded, isMediaHiddenWhenCollapsed: tmp2, activeQuestDockMode, QuestDockMode: top, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  de.__workletHash = 10281907446713;
  de.__initData = __initData3;
  let tmp32 = null;
  ({ withSpring: tmp4(expandedHeight[11]).withSpring, shouldShowVideo: isHeroVideoSupportedResult, videoLoaded, isMediaHiddenWhenCollapsed: tmp2, activeQuestDockMode, QuestDockMode: top, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED });
  const animatedStyle1 = tmp4Result4.useAnimatedStyle(de);
  const Fragment = obj.Fragment;
  if (isHeroVideoSupportedResult) {
    const obj6 = { style: tmp3.backgroundVideo, onLoad: callback, source: obj7, paused: tmp8 !== top.EXPANDED, resizeMode: "cover", muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false };
    obj7 = { uri: videoUrl };
    tmp32 = closure_12(tmp4(tmp5[25]).VideoComponent, obj6);
  }
  const items5 = [tmp32, ];
  let tmp34 = null;
  if (null != imageUrl) {
    if (!tmp2) {
      const obj8 = { style: items6, children: closure_12(gradientBaseColor(expandedHeight[24]), obj9) };
      items6 = [tmp3.backgroundImageWrapper, memo, animatedStyle1];
      obj9 = { style: items7, source: obj10 };
      items7 = [tmp3.backgroundImage, memo];
      obj10 = { uri: imageUrl };
      const tmp7Result = gradientBaseColor(expandedHeight[12]);
      tmp34 = closure_12(tmp7Result, obj8);
    } else {
      tmp34 = null;
    }
  }
  items5[1] = tmp34;
  const tmp31Result = closure_13(Fragment, { children: items5 });
  const obj11 = { style: items8, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items10 };
  items8 = [tmp3.backgroundWrapper, memo, animatedStyle];
  let tmp39 = null;
  const tmp7Result2 = gradientBaseColor(expandedHeight[12]);
  if (null != backdropColor) {
    const obj12 = { style: items9 };
    items9 = [tmp3.backdrop, memo, ];
    const obj13 = { backgroundColor: backdropColor };
    items9[2] = obj13;
    tmp39 = closure_12(setRestingQuestDockMode, obj12);
  }
  items10 = [tmp39, , , ];
  let tmp42 = tmp31Result;
  if (tmp2) {
    const obj14 = { style: memo, children: tmp31Result };
    tmp42 = closure_12(QuestDockBackgroundMediaFade, obj14);
  }
  items10[1] = tmp42;
  const obj15 = { locations, style: items11, start: videoLoaded.START, end: videoLoaded.END, colors: memo1 };
  items11 = [tmp3.backgroundGradient, memo];
  items10[2] = closure_12(gradientBaseColor(expandedHeight[26]), obj15);
  items10[3] = foregroundContent;
  return closure_13(tmp7Result2, obj11);
});
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockVideoBackground.tsx");

export default memoResult;
export { QuestDockBackgroundCollapsedMediaMode };
