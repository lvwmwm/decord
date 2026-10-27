// Module ID: 16566
// Function ID: 16567
// Name: QuestDockContentExpanded
// Dependencies: [19, 17, 6711, 16480, 21, 4972, 558, 576, 16481, 10920, 5053, 16479, 5248, 7170, 2]

// Module 16566 (QuestDockContentExpanded)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import spring from "spring" /* 5248 */;
import QuestConstants from "QuestConstants" /* 6711 */;
import QuestDockUtils from "QuestDockUtils" /* 16479 */;
import QuestDockConstants from "QuestDockConstants" /* 16480 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let obj1, tmp10, tmp2, tmp4, tmp7;

let obj2;
const StyleSheet = react_native.StyleSheet;
const QuestDockMode = QuestConstants.QuestDockMode;
let QUEST_DOCK_MODE_CHANGE_PHYSICS = QuestDockConstants.QUEST_DOCK_MODE_CHANGE_PHYSICS;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { wrapper: obj2 };
obj2 = { bottom: undefined, display: "flex", zIndex: 1 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_7 = createStyles(obj);
const __initData = { code: "function QuestDockContentExpandedTsx1(){const{expandedHeightMode,getQuestDockExpandedHeightLimits,windowDimensions,safeArea,expandedHeight,getQuestDockExpandedWidth,withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,questDockWrapperSpecs}=this.__closure;return{height:expandedHeightMode===\"content\"?undefined:getQuestDockExpandedHeightLimits(windowDimensions.get().height,safeArea.get().top,expandedHeight).maxHeight,width:getQuestDockExpandedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring((questDockWrapperSpecs.get().width-getQuestDockExpandedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right))/2,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}" };
const __initData2 = { code: "function QuestDockContentExpandedTsx2(){const{expandedHeightMode,getQuestDockExpandedHeightLimits,windowDimensions,safeArea,expandedHeight,getQuestDockExpandedWidth,withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,questDockWrapperSpecs}=this.__closure;return{height:expandedHeightMode==='content'?undefined:getQuestDockExpandedHeightLimits(windowDimensions.get().height,safeArea.get().top,expandedHeight).maxHeight,width:getQuestDockExpandedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring((questDockWrapperSpecs.get().width-getQuestDockExpandedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right))/2,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDockContentExpanded(expandedHeight) {
  let activeQuestDockMode;
  let children;
  let closure_5;
  let expandedHeightMode;
  let questDockWrapperSpecs;
  let obj = expandedHeightMode(activeQuestDockMode[7]);
  const cResult = obj.c(6);
  ({ children, expandedHeightMode } = expandedHeight);
  expandedHeight = expandedHeight.expandedHeight;
  const tmp3 = closure_7();
  const context = questDockWrapperSpecs.useContext(expandedHeightMode(activeQuestDockMode[8]).QuestDockGestureContext);
  const tmp = activeQuestDockMode;
  activeQuestDockMode = context.activeQuestDockMode;
  questDockWrapperSpecs = context.questDockWrapperSpecs;
  const windowDimensions = context.windowDimensions;
  const tmp6 = expandedHeight(activeQuestDockMode[9])();
  QUEST_DOCK_MODE_CHANGE_PHYSICS = tmp6;
  let obj2 = expandedHeightMode(activeQuestDockMode[10]);
  const tmp5 = expandedHeight;
  class D {
    constructor() {
      maxHeight = undefined;
      if ("content" !== expandedHeightMode) {
        tmp2 = closure_0;
        tmp3 = closure_2;
        tmp4 = closure_0(closure_2[11]);
        tmp5 = windowDimensions;
        getQuestDockExpandedHeightLimits = tmp4.getQuestDockExpandedHeightLimits;
        tmp6 = closure_5;
        tmp7 = expandedHeight;
        maxHeight = getQuestDockExpandedHeightLimits(windowDimensions.get().height, closure_5.get().top, expandedHeight).maxHeight;
      }
      size = { height: maxHeight, width: null, opacity: null, transform: null };
      tmp8 = closure_0(closure_2[11]);
      obj2 = windowDimensions;
      getQuestDockExpandedWidth = tmp8.getQuestDockExpandedWidth;
      obj3 = closure_5;
      width = windowDimensions.get().width;
      size.width = getQuestDockExpandedWidth(width, closure_5.get().left, closure_5.get().right);
      tmp9 = closure_0(closure_2[12]);
      withSpring = tmp9.withSpring;
      num = 0;
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        num = 1;
      }
      size.opacity = withSpring(num, closure_5);
      obj1 = { translateX: null };
      tmp10 = closure_0(closure_2[12]);
      withSpring2 = tmp10.withSpring;
      width2 = questDockWrapperSpecs.get().width;
      tmp11 = closure_0(closure_2[11]);
      getQuestDockExpandedWidth2 = tmp11.getQuestDockExpandedWidth;
      width3 = obj2.get().width;
      obj1.translateX = withSpring2((width2 - getQuestDockExpandedWidth2(width3, obj3.get().left, obj3.get().right)) / 2, closure_5);
      items = [];
      items[0] = obj1;
      size.transform = items;
      return size;
    }
  }
  D.__closure = { expandedHeightMode, getQuestDockExpandedHeightLimits: expandedHeightMode(activeQuestDockMode[11]).getQuestDockExpandedHeightLimits, windowDimensions, safeArea: tmp6, expandedHeight, getQuestDockExpandedWidth: expandedHeightMode(activeQuestDockMode[11]).getQuestDockExpandedWidth, withSpring: expandedHeightMode(activeQuestDockMode[12]).withSpring, activeQuestDockMode, QuestDockMode: windowDimensions, QUEST_DOCK_MODE_CHANGE_PHYSICS, questDockWrapperSpecs };
  D.__workletHash = 9392780249296;
  D.__initData = __initData;
  const obj3 = { expandedHeightMode, getQuestDockExpandedHeightLimits: expandedHeightMode(activeQuestDockMode[11]).getQuestDockExpandedHeightLimits, windowDimensions, safeArea: tmp6, expandedHeight, getQuestDockExpandedWidth: expandedHeightMode(activeQuestDockMode[11]).getQuestDockExpandedWidth, withSpring: expandedHeightMode(activeQuestDockMode[12]).withSpring, activeQuestDockMode, QuestDockMode: windowDimensions, QUEST_DOCK_MODE_CHANGE_PHYSICS, questDockWrapperSpecs };
  const animatedStyle = obj2.useAnimatedStyle(D);
  if (cResult[0] === tmp3.wrapper) {
    let tmp8;
    if (cResult[1] === animatedStyle) {
      tmp8 = cResult[2];
    }
    if (cResult[3] === children) {
      let tmp9;
      if (cResult[4] === tmp8) {
        tmp9 = cResult[5];
      }
      return tmp9;
    }
    const tmp11 = jsx(tmp5(tmp[13]), { style: tmp8, children });
    let num = 3;
    cResult[3] = children;
    cResult[4] = tmp8;
    cResult[5] = tmp11;
    tmp9 = tmp11;
  }
  let items = [tmp3.wrapper, animatedStyle];
  cResult[0] = tmp3.wrapper;
  cResult[1] = animatedStyle;
  cResult[2] = items;
  tmp8 = items;
}) : (function QuestDockContentExpanded(expandedHeightMode) {
  let activeQuestDockMode;
  let closure_5;
  let questDockWrapperSpecs;
  expandedHeightMode = expandedHeightMode.expandedHeightMode;
  const expandedHeight = expandedHeightMode.expandedHeight;
  const children = expandedHeightMode.children;
  const tmp = closure_7();
  const context = questDockWrapperSpecs.useContext(expandedHeightMode(activeQuestDockMode[8]).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  questDockWrapperSpecs = context.questDockWrapperSpecs;
  const windowDimensions = context.windowDimensions;
  const tmp3 = expandedHeight(activeQuestDockMode[9])();
  QUEST_DOCK_MODE_CHANGE_PHYSICS = tmp3;
  let obj = expandedHeightMode(activeQuestDockMode[10]);
  const fn = function c() {
    let getQuestDockExpandedWidth;
    let getQuestDockExpandedWidth2;
    let items;
    let num;
    let width;
    let width2;
    let width3;
    let withSpring;
    let withSpring2;
    let maxHeight;
    if ("content" !== expandedHeightMode) {
      const getQuestDockExpandedHeightLimits = QuestDockUtils.getQuestDockExpandedHeightLimits;
      QuestDockUtils;
      maxHeight = getQuestDockExpandedHeightLimits(windowDimensions.get().height, closure_5.get().top, expandedHeight).maxHeight;
    }
    size = { height: maxHeight, width: getQuestDockExpandedWidth(width, closure_5.get().left, closure_5.get().right), opacity: withSpring(num, closure_5), transform: items };
    getQuestDockExpandedWidth = QuestDockUtils.getQuestDockExpandedWidth;
    QuestDockUtils;
    width = windowDimensions.get().width;
    withSpring = spring.withSpring;
    num = 0;
    spring;
    const obj2 = windowDimensions;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 1;
    }
    const obj = { translateX: withSpring2((width2 - getQuestDockExpandedWidth2(width3, closure_5.get().left, closure_5.get().right)) / 2, closure_5) };
    withSpring2 = spring.withSpring;
    spring;
    width2 = questDockWrapperSpecs.get().width;
    getQuestDockExpandedWidth2 = QuestDockUtils.getQuestDockExpandedWidth;
    QuestDockUtils;
    width3 = obj2.get().width;
    items = [obj];
    return size;
  };
  let obj2 = { expandedHeightMode, getQuestDockExpandedHeightLimits: expandedHeightMode(activeQuestDockMode[11]).getQuestDockExpandedHeightLimits, windowDimensions, safeArea: tmp3, expandedHeight, getQuestDockExpandedWidth: expandedHeightMode(activeQuestDockMode[11]).getQuestDockExpandedWidth, withSpring: expandedHeightMode(activeQuestDockMode[12]).withSpring, activeQuestDockMode, QuestDockMode: windowDimensions, QUEST_DOCK_MODE_CHANGE_PHYSICS, questDockWrapperSpecs };
  fn.__closure = obj2;
  fn.__workletHash = 159575831059;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let items = [tmp.wrapper, animatedStyle];
  return jsx(expandedHeight(activeQuestDockMode[13]), { style: items, children });
}));
let size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContentExpanded.tsx");

export default memoResult;
