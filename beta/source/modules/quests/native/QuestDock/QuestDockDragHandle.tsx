// Module ID: 14717
// Function ID: 14718
// Name: QuestDockDragHandle
// Dependencies: [19, 17, 5756, 14624, 21, 4836, 14625, 14626, 4566, 5280, 6494, 14623, 6575, 1115, 2]

// Module 14717 (QuestDockDragHandle)
import react_native from "react-native" /* 17 */;
import spring from "spring" /* 5280 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import react from "react" /* 19 */;
import QuestDockConstants from "QuestDockConstants" /* 14624 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const StyleSheet = react_native.StyleSheet;
const QuestDockMode = QuestConstants.QuestDockMode;
({ QUEST_DOCK_MODE_CHANGE_PHYSICS: hasOwnProperty, QUEST_DOCK_COLLAPSED_MAX_WIDTH: metroRequire } = QuestDockConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { dragHandleWrapper: obj2, dragHandleOverlay: obj3 };
obj2 = { bottom: undefined, right: undefined, zIndex: 4 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { bottom: undefined };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
let closure_9 = createStyles(obj);
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
const __initData = { code: "function QuestDockDragHandleTsx2(){const{windowDimensions,QUEST_DOCK_COLLAPSED_MAX_WIDTH}=this.__closure;return{width:Math.min(windowDimensions.get().width,QUEST_DOCK_COLLAPSED_MAX_WIDTH)};}" };
const __initData2 = { code: "function QuestDockDragHandleTsx3(){const{getDragHandleOffsetLeft,activeQuestDockMode,questDockHorizontalGutterCollapsed,QuestDockMode}=this.__closure;return{left:getDragHandleOffsetLeft(activeQuestDockMode.get(),questDockHorizontalGutterCollapsed),transform:[{translateY:activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?-4:0}]};}" };
const __initData3 = { code: "function QuestDockDragHandleTsx4(){const{withSpring,isDefaultVariant,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(isDefaultVariant||activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
const __initData4 = { code: "function QuestDockDragHandleTsx5(){const{withSpring,isDefaultVariant,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(!isDefaultVariant&&activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?0.5:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
const memoResult = react.memo(function QuestDockDragHandle(arg0) {
  let ActionSheetHeaderBar;
  let activeQuestDockMode;
  let closure_2;
  let isExpanded;
  let items;
  let items1;
  let items2;
  let items3;
  let obj11;
  let stringResult;
  let tmp14;
  let tmp15;
  let variant;
  let youBarHorizontalMargin;
  ({ isExpanded, variant } = arg0);
  const tmp = closure_9();
  let tmp3 = dependencyMap;
  const tmp2 = activeQuestDockMode;
  const context = youBarHorizontalMargin.useContext(activeQuestDockMode(14625).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  dependencyMap = tmp5;
  let obj = activeQuestDockMode(14626);
  youBarHorizontalMargin = obj.useYouBarHorizontalMargin();
  let obj2 = activeQuestDockMode(4566);
  const fn = function n() {
    const obj = { width: Math.min(windowDimensions.get().width, metroRequire) };
    return obj;
  };
  const obj3 = { windowDimensions, QUEST_DOCK_COLLAPSED_MAX_WIDTH };
  fn.__closure = obj3;
  fn.__workletHash = 13640576219747;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const fn2 = function u() {
    let items;
    if (typeof getDragHandleOffsetLeft === "function") {
      let num = 0;
      if (tmp !== QuestDockMode.EXPANDED) {
        num = -1 * tmp2;
      }
      let num3 = 0;
      const obj2 = { left: num, transform: items };
      if (activeQuestDockMode.get() !== QuestDockMode.CLOSED) {
        num3 = 0;
        if (activeQuestDockMode.get() !== QuestDockMode.SOFT_DISMISSED) {
          num3 = -4;
        }
      }
      items = [{ translateY: num3 }];
      return obj2;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  const obj5 = { getDragHandleOffsetLeft, activeQuestDockMode, questDockHorizontalGutterCollapsed: youBarHorizontalMargin, QuestDockMode };
  fn2.__closure = obj5;
  fn2.__workletHash = 6256743736366;
  fn2.__initData = __initData2;
  const obj4 = activeQuestDockMode(4566);
  const animatedStyle1 = obj4.useAnimatedStyle(fn2);
  const obj6 = activeQuestDockMode(4566);
  class M {
    constructor() {
      spring;
      const tmp3 = closure_2;
      if (!tmp3) {
        let num;
        if (activeQuestDockMode.get() !== QuestDockMode.CLOSED) {
          num = 0;
        }
        const obj2 = { opacity: tmp2(num, hasOwnProperty) };
        return obj2;
      }
      num = 1;
    }
  }
  M.__closure = { withSpring: activeQuestDockMode(5280).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  M.__workletHash = 7055026667171;
  M.__initData = __initData3;
  ({ withSpring: activeQuestDockMode(5280).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS });
  const animatedStyle2 = obj6.useAnimatedStyle(M);
  const obj8 = activeQuestDockMode(4566);
  class C {
    constructor() {
      spring;
      const tmp3 = closure_2;
      if (!tmp3) {
        let num;
        if (activeQuestDockMode.get() !== QuestDockMode.CLOSED) {
          num = 0.5;
        }
        const obj2 = { opacity: tmp2(num, hasOwnProperty) };
        return obj2;
      }
      num = 0;
    }
  }
  C.__closure = { withSpring: activeQuestDockMode(5280).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  C.__workletHash = 14421154962041;
  C.__initData = __initData4;
  ({ withSpring: activeQuestDockMode(5280).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS });
  const animatedStyle3 = obj8.useAnimatedStyle(C);
  const obj10 = { style: items, children: tmp14(tmp15, obj11) };
  items = [tmp.dragHandleWrapper, animatedStyle];
  obj11 = { style: animatedStyle1, layout: activeQuestDockMode(14623).dimensionsLayoutTransition, children: items2 };
  const tmp13 = windowDimensions(6494);
  tmp15 = windowDimensions(6494);
  const obj12 = { style: items1, children: closure_7(ActionSheetHeaderBar, { variant: "overlay", accessibilityLabel: stringResult }) };
  items1 = [tmp.dragHandleOverlay, animatedStyle3];
  const tmp16 = windowDimensions(6494);
  ActionSheetHeaderBar = activeQuestDockMode(6575).ActionSheetHeaderBar;
  const intl = activeQuestDockMode(1115).intl;
  const string = intl.string;
  const t = activeQuestDockMode(1115).t;
  const tmp12 = windowDimensions;
  tmp14 = closure_8;
  if (isExpanded) {
    stringResult = string(t["GQ+4bk"]);
  } else {
    stringResult = string(t.Yplnt6);
  }
  items2 = [closure_7(tmp16, obj12), ];
  const obj13 = { style: items3, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_7(tmp2(6575).ActionSheetHeaderBar, { variant: "default" }) };
  items3 = [tmp.dragHandleOverlay, animatedStyle2];
  const tmp12Result = tmp12(6494);
  items2[1] = closure_7(tmp12Result, obj13);
  return closure_7(tmp13, obj10);
});
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockDragHandle.tsx");

export default memoResult;
