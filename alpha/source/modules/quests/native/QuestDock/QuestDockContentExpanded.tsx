// Module ID: 17088
// Function ID: 17089
// Name: QuestDockContentExpanded
// Dependencies: [19, 17, 6775, 17001, 21, 5009, 17002, 11220, 5090, 17000, 5632, 7235, 2]

// Module 17088 (QuestDockContentExpanded)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import spring from "spring" /* 5632 */;
import QuestConstants from "QuestConstants" /* 6775 */;
import QuestDockUtils from "QuestDockUtils" /* 17000 */;
import QuestDockConstants from "QuestDockConstants" /* 17001 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let getQuestDockExpandedWidth2, maxHeight, num, obj1, obj3, tmp10, tmp11, tmp2, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, width, width2, width3, withSpring2;

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
const __initData = { code: "function QuestDockContentExpandedTsx1(){const{expandedHeightMode,getQuestDockExpandedHeightLimits,windowDimensions,safeArea,expandedHeight,getQuestDockExpandedWidth,withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,questDockWrapperSpecs}=this.__closure;return{height:expandedHeightMode==='content'?undefined:getQuestDockExpandedHeightLimits(windowDimensions.get().height,safeArea.get().top,expandedHeight).maxHeight,width:getQuestDockExpandedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring((questDockWrapperSpecs.get().width-getQuestDockExpandedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right))/2,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}" };
const memoResult = react.memo(function QuestDockContentExpanded(expandedHeightMode) {
  let activeQuestDockMode;
  let closure_5;
  let questDockWrapperSpecs;
  expandedHeightMode = expandedHeightMode.expandedHeightMode;
  const expandedHeight = expandedHeightMode.expandedHeight;
  const children = expandedHeightMode.children;
  const tmp = closure_7();
  const context = questDockWrapperSpecs.useContext(expandedHeightMode(activeQuestDockMode[6]).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  questDockWrapperSpecs = context.questDockWrapperSpecs;
  const windowDimensions = context.windowDimensions;
  const tmp3 = expandedHeight(activeQuestDockMode[7])();
  QUEST_DOCK_MODE_CHANGE_PHYSICS = tmp3;
  let obj = expandedHeightMode(activeQuestDockMode[8]);
  class D {
    constructor() {
      maxHeight = undefined;
      if ("content" !== expandedHeightMode) {
        tmp2 = closure_0;
        tmp3 = closure_2;
        tmp4 = closure_0(closure_2[9]);
        tmp5 = windowDimensions;
        getQuestDockExpandedHeightLimits = tmp4.getQuestDockExpandedHeightLimits;
        tmp6 = closure_5;
        tmp7 = expandedHeight;
        maxHeight = getQuestDockExpandedHeightLimits(windowDimensions.get().height, closure_5.get().top, expandedHeight).maxHeight;
      }
      size = { height: maxHeight, width: null, opacity: null, transform: null };
      tmp8 = closure_0(closure_2[9]);
      obj2 = windowDimensions;
      getQuestDockExpandedWidth = tmp8.getQuestDockExpandedWidth;
      obj3 = closure_5;
      width = windowDimensions.get().width;
      size.width = getQuestDockExpandedWidth(width, closure_5.get().left, closure_5.get().right);
      tmp9 = closure_0(closure_2[10]);
      withSpring = tmp9.withSpring;
      num = 0;
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        num = 1;
      }
      size.opacity = withSpring(num, closure_5);
      obj1 = { translateX: null };
      tmp10 = closure_0(closure_2[10]);
      withSpring2 = tmp10.withSpring;
      width2 = questDockWrapperSpecs.get().width;
      tmp11 = closure_0(closure_2[9]);
      getQuestDockExpandedWidth2 = tmp11.getQuestDockExpandedWidth;
      width3 = obj2.get().width;
      obj1.translateX = withSpring2((width2 - getQuestDockExpandedWidth2(width3, obj3.get().left, obj3.get().right)) / 2, closure_5);
      items = [];
      items[0] = obj1;
      size.transform = items;
      return size;
    }
  }
  let obj2 = { expandedHeightMode, getQuestDockExpandedHeightLimits: expandedHeightMode(activeQuestDockMode[9]).getQuestDockExpandedHeightLimits, windowDimensions, safeArea: tmp3, expandedHeight, getQuestDockExpandedWidth: expandedHeightMode(activeQuestDockMode[9]).getQuestDockExpandedWidth, withSpring: expandedHeightMode(activeQuestDockMode[10]).withSpring, activeQuestDockMode, QuestDockMode: windowDimensions, QUEST_DOCK_MODE_CHANGE_PHYSICS, questDockWrapperSpecs };
  D.__closure = obj2;
  D.__workletHash = 16780670669392;
  D.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(D);
  let items = [tmp.wrapper, animatedStyle];
  return jsx(expandedHeight(activeQuestDockMode[11]), { style: items, children });
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContentExpanded.tsx");

export default memoResult;
