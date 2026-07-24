// Module ID: 14141
// Function ID: 108705
// Name: getDragHandleOffsetLeft
// Dependencies: [31, 27, 4976, 14044, 33, 4130, 14126, 14045, 14046, 3991, 1324, 4542, 7678, 14043, 5446, 1212, 2]

// Module 14141 (getDragHandleOffsetLeft)
import importAllResult from "result";
import { StyleSheet } from "get ActivityIndicator";
import { QuestDockMode } from "QuestsExperimentLocations";
import QUEST_DOCK_COLLAPSED_HEIGHT from "QUEST_DOCK_COLLAPSED_HEIGHT";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_5, QUEST_DOCK_COLLAPSED_MAX_WIDTH: closure_6 } = QUEST_DOCK_COLLAPSED_HEIGHT);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = {};
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["bottom"] = undefined;
obj["right"] = undefined;
obj["zIndex"] = 4;
obj.dragHandleWrapper = obj;
_createForOfIteratorHelperLoose = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["bottom"] = undefined;
obj.dragHandleOverlay = _createForOfIteratorHelperLoose;
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_10 = { code: "function getDragHandleOffsetLeft_QuestDockDragHandleTsx1(activeQuestDockMode,horizontalEdgeGutter){const{QuestDockMode}=this.__closure;switch(activeQuestDockMode){case QuestDockMode.EXPANDED:return 0;default:return horizontalEdgeGutter*-1;}}" };
let closure_11 = (() => {
  function getDragHandleOffsetLeft(arg0, arg1) {
    let num = 0;
    if (arg0 !== outer1_4.EXPANDED) {
      num = -1 * arg1;
    }
    return num;
  }
  getDragHandleOffsetLeft.__closure = { QuestDockMode };
  getDragHandleOffsetLeft.__workletHash = 4145264969027;
  getDragHandleOffsetLeft.__initData = closure_10;
  return getDragHandleOffsetLeft;
})();
let closure_12 = { code: "function QuestDockDragHandleTsx2(){const{windowDimensions,QUEST_DOCK_COLLAPSED_MAX_WIDTH}=this.__closure;return{width:Math.min(windowDimensions.get().width,QUEST_DOCK_COLLAPSED_MAX_WIDTH)};}" };
let closure_13 = { code: "function QuestDockDragHandleTsx3(){const{getDragHandleOffsetLeft,activeQuestDockMode,questDockHorizontalGutterCollapsed,isVisualRefreshEnabled,QuestDockMode}=this.__closure;return{left:getDragHandleOffsetLeft(activeQuestDockMode.get(),questDockHorizontalGutterCollapsed),transform:[{translateY:isVisualRefreshEnabled&&activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?-4:0}]};}" };
let closure_14 = { code: "function QuestDockDragHandleTsx4(){const{withSpring,isEnrolled,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(isEnrolled||activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
let closure_15 = { code: "function QuestDockDragHandleTsx5(){const{withSpring,isEnrolled,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(!isEnrolled&&activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?0.5:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
const memoResult = importAllResult.memo(function QuestDockDragHandle(isExpanded) {
  const tmp = callback2();
  const context = youBarHorizontalMargin.useContext(activeQuestDockMode(14045).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  const userStatus = youBarHorizontalMargin.useContext(windowDimensions(14126)).quest.userStatus;
  let enrolledAt;
  if (null != userStatus) {
    enrolledAt = userStatus.enrolledAt;
  }
  const dependencyMap = tmp4;
  let obj = activeQuestDockMode(14046);
  youBarHorizontalMargin = obj.useYouBarHorizontalMargin();
  let obj1 = activeQuestDockMode(3991);
  class D {
    constructor() {
      obj = { width: Math.min(windowDimensions.get().width, outer1_6) };
      return obj;
    }
  }
  obj = { windowDimensions, QUEST_DOCK_COLLAPSED_MAX_WIDTH: closure_6 };
  D.__closure = obj;
  D.__workletHash = 13640576219747;
  D.__initData = closure_12;
  const animatedStyle = obj1.useAnimatedStyle(D);
  let obj3 = activeQuestDockMode(1324);
  const enabled = obj3.useMobileVisualRefreshConfig({ location: "QuestDockDragHandle" }).enabled;
  let obj4 = activeQuestDockMode(3991);
  class E {
    constructor() {
      obj = { left: outer1_11(activeQuestDockMode.get(), closure_3) };
      obj = {};
      num = 0;
      if (enabled) {
        tmp = activeQuestDockMode;
        tmp2 = enabled;
        num = 0;
        if (activeQuestDockMode.get() !== enabled.CLOSED) {
          tmp3 = activeQuestDockMode;
          tmp4 = enabled;
          num = 0;
          if (activeQuestDockMode.get() !== enabled.SOFT_DISMISSED) {
            num = -4;
          }
        }
      }
      obj.translateY = num;
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  obj = { getDragHandleOffsetLeft: closure_11, activeQuestDockMode, questDockHorizontalGutterCollapsed: youBarHorizontalMargin, isVisualRefreshEnabled: enabled, QuestDockMode: enabled };
  E.__closure = obj;
  E.__workletHash = 2091098328770;
  E.__initData = closure_13;
  const animatedStyle1 = obj4.useAnimatedStyle(E);
  let obj6 = activeQuestDockMode(3991);
  const fn = function h() {
    const obj = {};
    activeQuestDockMode(tmp4[11]);
    if (!tmp4) {
      if (activeQuestDockMode.get() !== enabled.CLOSED) {
        let num = 0;
      }
      obj.opacity = tmp2(num, outer1_5);
      return obj;
    }
    num = 1;
  };
  obj1 = { withSpring: activeQuestDockMode(4542).withSpring, isEnrolled: tmp4, activeQuestDockMode, QuestDockMode: enabled, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_5 };
  fn.__closure = obj1;
  fn.__workletHash = 12299455640931;
  fn.__initData = closure_14;
  const animatedStyle2 = obj6.useAnimatedStyle(fn);
  class C {
    constructor() {
      obj = {};
      tmp = activeQuestDockMode(outer1_2[11]);
      if (!closure_2) {
        tmp3 = activeQuestDockMode;
        tmp4 = enabled;
        if (activeQuestDockMode.get() !== enabled.CLOSED) {
          tmp5 = activeQuestDockMode;
          tmp6 = enabled;
          num = 0.5;
        }
        tmp7 = outer1_5;
        obj.opacity = tmp2(num, outer1_5);
        return obj;
      }
      num = 0;
      return;
    }
  }
  const obj9 = activeQuestDockMode(3991);
  C.__closure = { withSpring: activeQuestDockMode(4542).withSpring, isEnrolled: null != enrolledAt, activeQuestDockMode, QuestDockMode: enabled, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_5 };
  C.__workletHash = 9632835517209;
  C.__initData = closure_15;
  const animatedStyle3 = obj9.useAnimatedStyle(C);
  obj3 = { style: items };
  items = [tmp.dragHandleWrapper, animatedStyle];
  const obj2 = { withSpring: activeQuestDockMode(4542).withSpring, isEnrolled: null != enrolledAt, activeQuestDockMode, QuestDockMode: enabled, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_5 };
  obj4 = { style: animatedStyle1 };
  const tmp11 = windowDimensions(7678);
  const tmp12 = closure_8;
  obj4.layout = activeQuestDockMode(14043).dimensionsLayoutTransition;
  const obj5 = { style: items1 };
  items1 = [tmp.dragHandleOverlay, animatedStyle3];
  const tmp13 = windowDimensions(7678);
  obj6 = { variant: "overlay" };
  const intl = activeQuestDockMode(1212).intl;
  const string = intl.string;
  const t = activeQuestDockMode(1212).t;
  if (isExpanded.isExpanded) {
    let stringResult = string(t["GQ+4bk"]);
  } else {
    stringResult = string(t.Yplnt6);
  }
  obj6.accessibilityLabel = stringResult;
  obj5.children = callback(activeQuestDockMode(5446).ActionSheetHeaderBar, obj6);
  const items2 = [callback(windowDimensions(7678), obj5), ];
  const obj7 = { style: null, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
  const items3 = [tmp.dragHandleOverlay, animatedStyle2];
  obj7.style = items3;
  const tmp14 = windowDimensions(7678);
  obj7.children = callback(activeQuestDockMode(5446).ActionSheetHeaderBar, { variant: "default" });
  items2[1] = callback(windowDimensions(7678), obj7);
  obj4.children = items2;
  obj3.children = tmp12(tmp13, obj4);
  return callback(tmp11, obj3);
});
const result = require("QuestsExperimentLocations").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockDragHandle.tsx");

export default memoResult;
