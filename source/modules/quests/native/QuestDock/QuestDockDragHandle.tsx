// Module ID: 13977
// Function ID: 106226
// Name: getDragHandleOffsetLeft
// Dependencies: []

// Module 13977 (getDragHandleOffsetLeft)
const importAllResult = importAll(dependencyMap[0]);
const StyleSheet = arg1(dependencyMap[1]).StyleSheet;
const QuestDockMode = arg1(dependencyMap[2]).QuestDockMode;
({ QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_5, QUEST_DOCK_COLLAPSED_MAX_WIDTH: closure_6 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
let obj = {};
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["bottom"] = undefined;
obj["right"] = undefined;
obj["zIndex"] = 4;
obj.dragHandleWrapper = obj;
obj1 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj1["bottom"] = undefined;
obj.dragHandleOverlay = obj1;
let closure_9 = obj1.createStyles(obj);
let closure_10 = { code: "function getDragHandleOffsetLeft_QuestDockDragHandleTsx1(activeQuestDockMode,horizontalEdgeGutter){const{QuestDockMode}=this.__closure;switch(activeQuestDockMode){case QuestDockMode.EXPANDED:return 0;default:return horizontalEdgeGutter*-1;}}" };
let closure_11 = () => {
  function getDragHandleOffsetLeft(arg0, arg1) {
    let num = 0;
    if (arg0 !== constants.EXPANDED) {
      num = -1 * arg1;
    }
    return num;
  }
  getDragHandleOffsetLeft.__closure = { QuestDockMode };
  getDragHandleOffsetLeft.__workletHash = 4145264969027;
  getDragHandleOffsetLeft.__initData = closure_10;
  return getDragHandleOffsetLeft;
}();
let closure_12 = { code: "function QuestDockDragHandleTsx2(){const{windowDimensions,QUEST_DOCK_COLLAPSED_MAX_WIDTH}=this.__closure;return{width:Math.min(windowDimensions.get().width,QUEST_DOCK_COLLAPSED_MAX_WIDTH)};}" };
let closure_13 = { code: "function QuestDockDragHandleTsx3(){const{getDragHandleOffsetLeft,activeQuestDockMode,questDockHorizontalGutterCollapsed,isVisualRefreshEnabled,QuestDockMode}=this.__closure;return{left:getDragHandleOffsetLeft(activeQuestDockMode.get(),questDockHorizontalGutterCollapsed),transform:[{translateY:isVisualRefreshEnabled&&activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?-4:0}]};}" };
let closure_14 = { code: "function QuestDockDragHandleTsx4(){const{withSpring,isEnrolled,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(isEnrolled||activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
let closure_15 = { code: "function QuestDockDragHandleTsx5(){const{withSpring,isEnrolled,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(!isEnrolled&&activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?0.5:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
const tmp3 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function QuestDockDragHandle(isExpanded) {
  const tmp = callback2();
  const context = importAllResult.useContext(arg1(dependencyMap[7]).QuestDockGestureContext);
  const activeQuestDockMode = context.activeQuestDockMode;
  const arg1 = activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  const importDefault = windowDimensions;
  const userStatus = importAllResult.useContext(importDefault(dependencyMap[6])).quest.userStatus;
  let enrolledAt;
  if (null != userStatus) {
    enrolledAt = userStatus.enrolledAt;
  }
  const dependencyMap = tmp4;
  let obj = arg1(dependencyMap[8]);
  const youBarHorizontalMargin = obj.useYouBarHorizontalMargin();
  let obj1 = arg1(dependencyMap[9]);
  class D {
    constructor() {
      obj = { width: Math.min(windowDimensions.get().width, closure_6) };
      return obj;
    }
  }
  obj = { windowDimensions, QUEST_DOCK_COLLAPSED_MAX_WIDTH: closure_6 };
  D.__closure = obj;
  D.__workletHash = 13640576219747;
  D.__initData = closure_12;
  const animatedStyle = obj1.useAnimatedStyle(D);
  let obj3 = arg1(dependencyMap[10]);
  const enabled = obj3.useMobileVisualRefreshConfig({ location: "QuestDockDragHandle" }).enabled;
  const QuestDockMode = enabled;
  let obj4 = arg1(dependencyMap[9]);
  class E {
    constructor() {
      obj = { left: closure_11(activeQuestDockMode.get(), closure_3) };
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
  obj = { getDragHandleOffsetLeft: closure_11, activeQuestDockMode, questDockHorizontalGutterCollapsed: youBarHorizontalMargin, isVisualRefreshEnabled: enabled, QuestDockMode };
  E.__closure = obj;
  E.__workletHash = 2091098328770;
  E.__initData = closure_13;
  const animatedStyle1 = obj4.useAnimatedStyle(E);
  let obj6 = arg1(dependencyMap[9]);
  const fn = function h() {
    const obj = {};
    activeQuestDockMode(tmp4[11]);
    if (!tmp4) {
      if (activeQuestDockMode.get() !== enabled.CLOSED) {
        let num = 0;
      }
      obj.opacity = tmp2(num, closure_5);
      return obj;
    }
    num = 1;
  };
  obj1 = { withSpring: arg1(dependencyMap[11]).withSpring, isEnrolled: tmp4, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_5 };
  fn.__closure = obj1;
  fn.__workletHash = 12299455640931;
  fn.__initData = closure_14;
  const animatedStyle2 = obj6.useAnimatedStyle(fn);
  class C {
    constructor() {
      obj = {};
      tmp = activeQuestDockMode(closure_2[11]);
      if (!closure_2) {
        tmp3 = activeQuestDockMode;
        tmp4 = enabled;
        if (activeQuestDockMode.get() !== enabled.CLOSED) {
          tmp5 = activeQuestDockMode;
          tmp6 = enabled;
          num = 0.5;
        }
        tmp7 = closure_5;
        obj.opacity = tmp2(num, closure_5);
        return obj;
      }
      num = 0;
      return;
    }
  }
  const obj9 = arg1(dependencyMap[9]);
  C.__closure = { withSpring: arg1(dependencyMap[11]).withSpring, isEnrolled: null != enrolledAt, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_5 };
  C.__workletHash = 9632835517209;
  C.__initData = closure_15;
  const animatedStyle3 = obj9.useAnimatedStyle(C);
  obj3 = { style: items };
  const items = [tmp.dragHandleWrapper, animatedStyle];
  const obj2 = { withSpring: arg1(dependencyMap[11]).withSpring, isEnrolled: null != enrolledAt, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_5 };
  obj4 = { style: animatedStyle1 };
  const tmp11 = importDefault(dependencyMap[12]);
  const tmp12 = closure_8;
  obj4.layout = arg1(dependencyMap[13]).dimensionsLayoutTransition;
  const obj5 = { style: items1 };
  const items1 = [tmp.dragHandleOverlay, animatedStyle3];
  const tmp13 = importDefault(dependencyMap[12]);
  obj6 = { variant: "overlay" };
  const intl = arg1(dependencyMap[15]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[15]).t;
  if (isExpanded.isExpanded) {
    let stringResult = string(t.GQ+4bk);
  } else {
    stringResult = string(t.Yplnt6);
  }
  obj6.accessibilityLabel = stringResult;
  obj5.children = callback(arg1(dependencyMap[14]).ActionSheetHeaderBar, obj6);
  const items2 = [callback(importDefault(dependencyMap[12]), obj5), ];
  const obj7 = { 1649302097: "50%", -866014378: 60, 77722194: 60, -1594137938: true };
  const items3 = [tmp.dragHandleOverlay, animatedStyle2];
  obj7.style = items3;
  const tmp14 = importDefault(dependencyMap[12]);
  obj7.children = callback(arg1(dependencyMap[14]).ActionSheetHeaderBar, { variant: "default" });
  items2[1] = callback(importDefault(dependencyMap[12]), obj7);
  obj4.children = items2;
  obj3.children = tmp12(tmp13, obj4);
  return callback(tmp11, obj3);
});
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/quests/native/QuestDock/QuestDockDragHandle.tsx");

export default memoResult;
