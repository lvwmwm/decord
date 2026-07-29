// Module ID: 14219
// Function ID: 14220
// Name: QuestDockMode
// Dependencies: [19, 17, 5033, 14122, 21, 4189, 14204, 14123, 14124, 4050, 1348, 4599, 7679, 14121, 5499, 1236, 2]

// Module 14219 (QuestDockMode)
import importAllResult from "noop";
import { StyleSheet } from "get ActivityIndicator";
import { QuestDockMode } from "QuestsExperimentLocations";
import QUEST_DOCK_COLLAPSED_HEIGHT from "QUEST_DOCK_COLLAPSED_HEIGHT";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
let c3 = importAllResult;
({ QUEST_DOCK_MODE_CHANGE_PHYSICS: c5, QUEST_DOCK_COLLAPSED_MAX_WIDTH: closure_6 } = QUEST_DOCK_COLLAPSED_HEIGHT);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let obj = { dragHandleWrapper: null, dragHandleOverlay: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.bottom = undefined;
obj.right = undefined;
obj.zIndex = 4;
obj[0] = obj;
createCacheKey = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.bottom = undefined;
obj[1] = createCacheKey;
let closure_9 = createCacheKey.createStyles(obj);
function getDragHandleOffsetLeft(arg0, arg1) {
  let num = 0;
  if (arg0 !== QuestDockMode.EXPANDED) {
    num = -1 * arg1;
  }
  return num;
}
getDragHandleOffsetLeft.__closure = { QuestDockMode };
getDragHandleOffsetLeft.__workletHash = 4145264969027;
getDragHandleOffsetLeft.__initData = { code: "function getDragHandleOffsetLeft_QuestDockDragHandleTsx1(activeQuestDockMode,horizontalEdgeGutter){const{QuestDockMode}=this.__closure;switch(activeQuestDockMode){case QuestDockMode.EXPANDED:return 0;default:return horizontalEdgeGutter*-1;}}" };
let closure_11 = { code: "function QuestDockDragHandleTsx2(){const{windowDimensions,QUEST_DOCK_COLLAPSED_MAX_WIDTH}=this.__closure;return{width:Math.min(windowDimensions.get().width,QUEST_DOCK_COLLAPSED_MAX_WIDTH)};}" };
let closure_12 = { code: "function QuestDockDragHandleTsx3(){const{getDragHandleOffsetLeft,activeQuestDockMode,questDockHorizontalGutterCollapsed,isVisualRefreshEnabled,QuestDockMode}=this.__closure;return{left:getDragHandleOffsetLeft(activeQuestDockMode.get(),questDockHorizontalGutterCollapsed),transform:[{translateY:isVisualRefreshEnabled&&activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?-4:0}]};}" };
let closure_13 = { code: "function QuestDockDragHandleTsx4(){const{withSpring,isEnrolled,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(isEnrolled||activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
let closure_14 = { code: "function QuestDockDragHandleTsx5(){const{withSpring,isEnrolled,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(!isEnrolled&&activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?0.5:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
const memoResult = importAllResult.memo(function QuestDockDragHandle(isExpanded) {
  const tmp3 = callback();
  const context = youBarHorizontalMargin.useContext(activeQuestDockMode(14123).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  const userStatus = youBarHorizontalMargin.useContext(windowDimensions(14204)).quest.userStatus;
  let enrolledAt;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  const dependencyMap = tmp7;
  let tmp4Result = tmp4(14124);
  youBarHorizontalMargin = tmp4Result.useYouBarHorizontalMargin();
  tmp4Result = tmp4(4050);
  const fn = function n() {
    return { width: Math.min(windowDimensions.get().width, outer1_6) };
  };
  let obj = { windowDimensions, QUEST_DOCK_COLLAPSED_MAX_WIDTH: closure_6 };
  fn.__closure = obj;
  fn.__workletHash = 13640576219747;
  fn.__initData = closure_11;
  const animatedStyle = tmp4Result.useAnimatedStyle(fn);
  const enabled = activeQuestDockMode(1348).useMobileVisualRefreshConfig({ location: "QuestDockDragHandle" }).enabled;
  const tmp4Result1 = activeQuestDockMode(1348);
  class D {
    constructor() {
      obj = activeQuestDockMode;
      value = activeQuestDockMode.get();
      tmp2 = closure_3;
      if (typeof outer1_10 !== "find") {
        str = "Trying to call a non-function";
        throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      tmp3 = enabled;
      num = 0;
      if (value !== enabled.EXPANDED) {
        num2 = -1;
        num = -1 * tmp2;
      }
      obj = { left: num, transform: null };
      num3 = 0;
      if (enabled) {
        num3 = 0;
        if (obj.get() !== tmp3.CLOSED) {
          num3 = 0;
          if (obj.get() !== tmp3.SOFT_DISMISSED) {
            num3 = -4;
          }
        }
      }
      items = [];
      items[0] = { translateY: num3 };
      obj[1] = items;
      return obj;
    }
  }
  obj = { getDragHandleOffsetLeft, activeQuestDockMode, questDockHorizontalGutterCollapsed: youBarHorizontalMargin, isVisualRefreshEnabled: enabled, QuestDockMode: enabled };
  D.__closure = obj;
  D.__workletHash = 2091098328770;
  D.__initData = closure_12;
  const animatedStyle1 = activeQuestDockMode(4050).useAnimatedStyle(D);
  const tmp4Result2 = activeQuestDockMode(4050);
  class E {
    constructor() {
      tmp = activeQuestDockMode(c2[11]);
      if (!c2) {
        obj = activeQuestDockMode;
        if (activeQuestDockMode.get() !== enabled.CLOSED) {
          num = 0;
        }
        obj = { opacity: null };
        tmp4 = outer1_5;
        obj[0] = tmp2(num, outer1_5);
        return obj;
      }
      num = 1;
      return;
    }
  }
  const tmp4Result3 = activeQuestDockMode(4050);
  E.__closure = { withSpring: activeQuestDockMode(4599).withSpring, isEnrolled: null != enrolledAt, activeQuestDockMode, QuestDockMode: enabled, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_5 };
  E.__workletHash = 12299455640931;
  E.__initData = closure_13;
  const animatedStyle2 = tmp4Result3.useAnimatedStyle(E);
  const obj1 = { withSpring: activeQuestDockMode(4599).withSpring, isEnrolled: null != enrolledAt, activeQuestDockMode, QuestDockMode: enabled, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_5 };
  const fn2 = function h() {
    activeQuestDockMode(tmp7[11]);
    if (!tmp7) {
      let obj = activeQuestDockMode;
      if (activeQuestDockMode.get() !== enabled.CLOSED) {
        let num = 0.5;
      }
      obj = { opacity: null };
      obj[0] = tmp2(num, outer1_5);
      return obj;
    }
    num = 0;
  };
  const tmp4Result4 = activeQuestDockMode(4050);
  fn2.__closure = { withSpring: activeQuestDockMode(4599).withSpring, isEnrolled: null != enrolledAt, activeQuestDockMode, QuestDockMode: enabled, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_5 };
  fn2.__workletHash = 9632835517209;
  fn2.__initData = closure_14;
  const animatedStyle3 = tmp4Result4.useAnimatedStyle(fn2);
  const obj3 = { style: items, children: null };
  items = [tmp3.dragHandleWrapper, animatedStyle];
  let tmpResult = tmp(7679);
  const obj4 = { style: animatedStyle1, layout: null, children: null };
  tmpResult = tmp(7679);
  obj4[1] = activeQuestDockMode(14121).dimensionsLayoutTransition;
  const obj5 = { style: items1, children: null };
  items1 = [tmp3.dragHandleOverlay, animatedStyle3];
  const obj2 = { withSpring: activeQuestDockMode(4599).withSpring, isEnrolled: null != enrolledAt, activeQuestDockMode, QuestDockMode: enabled, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_5 };
  const tmp15 = closure_8;
  const intl = tmp4(1236).intl;
  const string = intl.string;
  const t = tmp4(1236).t;
  if (isExpanded.isExpanded) {
    let stringResult = string(t["GQ+4bk"]);
  } else {
    stringResult = string(t.Yplnt6);
  }
  obj5[1] = closure_7(activeQuestDockMode(5499).ActionSheetHeaderBar, { variant: "overlay", accessibilityLabel: stringResult });
  const items2 = [closure_7(windowDimensions(7679), obj5), ];
  const obj6 = { style: items3, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  items3 = [tmp3.dragHandleOverlay, animatedStyle2];
  const tmpResult1 = windowDimensions(7679);
  obj6[4] = closure_7(activeQuestDockMode(5499).ActionSheetHeaderBar, { variant: "default" });
  items2[1] = closure_7(windowDimensions(7679), obj6);
  obj4[2] = items2;
  obj3[1] = tmp15(tmpResult, obj4);
  return closure_7(tmpResult, obj3);
});
const result = require("QuestsExperimentLocations").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockDragHandle.tsx");

export default memoResult;
