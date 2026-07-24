// Module ID: 14140
// Function ID: 108694
// Name: QUEST_DOCK_EXPANDED_HEIGHT
// Dependencies: [57, 31, 27, 4122, 4976, 14044, 653, 33, 4130, 14126, 14040, 14045, 14048, 8321, 566, 3834, 689, 666, 3991, 4542, 477, 10946, 7678, 8346, 5085, 4554, 2]

// Module 14140 (QUEST_DOCK_EXPANDED_HEIGHT)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { QuestDockMode } from "QuestsExperimentLocations";
import QUEST_DOCK_COLLAPSED_HEIGHT from "QUEST_DOCK_COLLAPSED_HEIGHT";
import { VerticalGradient } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let QUEST_DOCK_EXPANDED_HEIGHT;
let StyleSheet;
let closure_11;
let closure_12;
let closure_5;
let closure_8;
let closure_9;
const require = arg1;
({ AppState: closure_5, StyleSheet } = get_ActivityIndicator);
({ QUEST_DOCK_EXPANDED_HEIGHT, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_8, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_9 } = QUEST_DOCK_COLLAPSED_HEIGHT);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let obj = {};
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["right"] = undefined;
obj["bottom"] = undefined;
obj["height"] = QUEST_DOCK_EXPANDED_HEIGHT;
obj["zIndex"] = 1;
obj.backgroundWrapper = obj;
_createForOfIteratorHelperLoose = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["height"] = QUEST_DOCK_EXPANDED_HEIGHT;
_createForOfIteratorHelperLoose["resizeMode"] = "cover";
obj.backgroundHeroAsset = _createForOfIteratorHelperLoose;
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj.backgroundHeroAssetVideo = {};
let obj3 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj3["height"] = QUEST_DOCK_EXPANDED_HEIGHT;
obj.backgroundGradient = obj3;
let closure_13 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_14 = { code: "function QuestDockUnenrolledBackgroundTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,windowDimensions}=this.__closure;return{transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}],width:windowDimensions.get().width};}" };
let closure_15 = { code: "function QuestDockUnenrolledBackgroundTsx2(){const{withSpring,activeQuestDockMode,QuestDockMode,videoLoaded,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()!==QuestDockMode.EXPANDED||!videoLoaded?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const memoResult = importAllResult.memo(function QuestDockUnenrolledBackground() {
  let staticUrl;
  let videoAsset;
  const tmp = callback3();
  let obj = activeQuestDockMode(setRestingQuestDockMode[10]);
  const questDockHeroAsset = obj.useQuestDockHeroAsset(importAllResult.useContext(windowDimensions(setRestingQuestDockMode[9])).quest);
  ({ staticUrl, videoAsset } = questDockHeroAsset);
  const context = importAllResult.useContext(activeQuestDockMode(setRestingQuestDockMode[11]).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  windowDimensions = context.windowDimensions;
  setRestingQuestDockMode = importAllResult.useContext(activeQuestDockMode(setRestingQuestDockMode[12]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  let obj1 = activeQuestDockMode(setRestingQuestDockMode[14]);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => lib.useReducedMotion);
  let obj2 = activeQuestDockMode(setRestingQuestDockMode[15]);
  const token = obj2.useToken(windowDimensions(setRestingQuestDockMode[16]).colors.CARD_BACKGROUND_DEFAULT);
  const items1 = [token];
  const memo = importAllResult.useMemo(() => {
    const obj = windowDimensions(setRestingQuestDockMode[17])(token);
    const items = [obj.alpha(0).hex(), , , ];
    const alphaResult = obj.alpha(0);
    items[1] = obj.alpha(0.1).hex();
    const alphaResult1 = obj.alpha(0.1);
    items[2] = obj.alpha(0.8).hex();
    const alphaResult2 = obj.alpha(0.8);
    items[3] = obj.alpha(1).hex();
    return items;
  }, items1);
  const memo1 = importAllResult.useMemo(() => [0, 0.33, 0.76, 1], []);
  let obj3 = activeQuestDockMode(setRestingQuestDockMode[18]);
  const fn = function s() {
    let obj = {};
    obj = {};
    let num = 0;
    if (activeQuestDockMode.get() === outer1_7.COLLAPSED) {
      num = -1 * outer1_9;
    }
    obj.translateX = activeQuestDockMode(setRestingQuestDockMode[19]).withSpring(num, outer1_8);
    const items = [obj, ];
    obj = {};
    const obj3 = activeQuestDockMode(setRestingQuestDockMode[19]);
    let num3 = 0;
    if (activeQuestDockMode.get() === outer1_7.COLLAPSED) {
      num3 = -1 * outer1_9;
    }
    obj.translateY = activeQuestDockMode(setRestingQuestDockMode[19]).withSpring(num3, outer1_8);
    items[1] = obj;
    obj.transform = items;
    obj.width = windowDimensions.get().width;
    return obj;
  };
  obj = { withSpring: activeQuestDockMode(setRestingQuestDockMode[19]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_9, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_8, windowDimensions };
  fn.__closure = obj;
  fn.__workletHash = 3565242281634;
  fn.__initData = closure_14;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const tmp10 = token(importAllResult.useState("active" !== first.currentState), 2);
  const items2 = [activeQuestDockMode, setRestingQuestDockMode];
  const effect = importAllResult.useEffect(() => {
    let closure_0 = first.addEventListener("change", (arg0) => {
      outer1_4("active" !== arg0);
      let tmp3 = activeQuestDockMode(setRestingQuestDockMode[20]).isIOS() && tmp;
      if (tmp3) {
        tmp3 = closure_0.get() === outer2_7.EXPANDED;
      }
      if (tmp3) {
        outer1_2(outer2_7.COLLAPSED);
      }
    });
    return () => {
      closure_0.remove();
    };
  }, items2);
  let isHeroVideoSupportedResult = !tmp10[0] && importAllResult.useContext(windowDimensions(setRestingQuestDockMode[9])).isRendered && !stateFromStores;
  if (isHeroVideoSupportedResult) {
    isHeroVideoSupportedResult = null != videoAsset;
  }
  if (isHeroVideoSupportedResult) {
    let obj5 = activeQuestDockMode(setRestingQuestDockMode[20]);
    isHeroVideoSupportedResult = !obj5.isAndroid();
  }
  if (isHeroVideoSupportedResult) {
    let obj6 = activeQuestDockMode(setRestingQuestDockMode[21]);
    isHeroVideoSupportedResult = obj6.isHeroVideoSupported(videoAsset);
  }
  const tmp18 = token(tmp10[1].useState(false), 2);
  first = tmp18[0];
  _isNativeReflectConstruct = tmp18[1];
  const callback = importAllResult.useCallback(() => {
    lib(true);
  }, []);
  let obj7 = activeQuestDockMode(setRestingQuestDockMode[18]);
  class G {
    constructor() {
      obj = {};
      obj2 = activeQuestDockMode(setRestingQuestDockMode[19]);
      num = 1;
      if (activeQuestDockMode.get() === outer1_7.EXPANDED) {
        tmp = isRendered;
        num = 1;
        if (isRendered) {
          num = 0;
        }
      }
      obj.opacity = obj2.withSpring(num, outer1_8);
      return obj;
    }
  }
  obj = { withSpring: activeQuestDockMode(setRestingQuestDockMode[19]).withSpring, activeQuestDockMode, QuestDockMode, videoLoaded: first, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_8 };
  G.__closure = obj;
  G.__workletHash = 13084905891385;
  G.__initData = closure_15;
  const animatedStyle1 = obj7.useAnimatedStyle(G);
  obj1 = { style: items3 };
  items3 = [tmp.backgroundWrapper, animatedStyle];
  const tmp22 = callback2;
  const tmp4 = windowDimensions(setRestingQuestDockMode[13])(activeQuestDockMode);
  if (isHeroVideoSupportedResult) {
    obj2 = {};
    obj3 = { style: tmp.backgroundHeroAssetVideo, onLoad: callback };
    const obj4 = { uri: videoAsset.url };
    obj3.source = obj4;
    obj3.paused = tmp4 !== QuestDockMode.EXPANDED;
    obj3.resizeMode = "cover";
    obj3.muted = true;
    obj3.disableFocus = true;
    obj3.preventsDisplaySleepDuringVideoPlayback = false;
    const items4 = [callback(activeQuestDockMode(setRestingQuestDockMode[23]).VideoComponent, obj3), ];
    obj5 = { style: animatedStyle1 };
    obj6 = { style: tmp.backgroundHeroAsset };
    obj7 = { uri: staticUrl };
    obj6.source = obj7;
    obj5.children = callback(windowDimensions(setRestingQuestDockMode[24]), obj6);
    items4[1] = callback(windowDimensions(setRestingQuestDockMode[22]), obj5);
    obj2.children = items4;
    let tmp27 = callback2(importAllResult.Fragment, obj2);
    const tmp35 = windowDimensions(setRestingQuestDockMode[22]);
  } else {
    const obj8 = { style: tmp.backgroundHeroAsset };
    const obj9 = { uri: staticUrl };
    obj8.source = obj9;
    tmp27 = callback(windowDimensions(setRestingQuestDockMode[24]), obj8);
  }
  const items5 = [tmp27, callback(windowDimensions(setRestingQuestDockMode[25]), { locations: memo1, style: tmp.backgroundGradient, start: VerticalGradient.START, end: VerticalGradient.END, colors: memo })];
  obj1.children = items5;
  return tmp22(windowDimensions(setRestingQuestDockMode[22]), obj1);
});
let obj2 = {};
const result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBackground.tsx");

export default memoResult;
