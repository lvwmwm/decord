// Module ID: 14716
// Function ID: 14717
// Name: QuestDockContentExpanded
// Dependencies: [19, 17, 5756, 14624, 21, 4836, 14625, 10895, 4566, 14623, 5280, 6494, 2]

// Module 14716 (QuestDockContentExpanded)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import spring from "spring" /* 5280 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import QuestDockUtils from "QuestDockUtils" /* 14623 */;
import QuestDockConstants from "QuestDockConstants" /* 14624 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let maxHeight, num, obj1, tmp2, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, withSpring2;

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
const __initData = { code: "function QuestDockContentExpandedTsx1(){const{expandedHeightMode,getQuestDockExpandedHeightLimits,windowDimensions,safeArea,expandedHeight,withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,questDockWrapperSpecs}=this.__closure;return{height:expandedHeightMode==='content'?undefined:getQuestDockExpandedHeightLimits(windowDimensions.get().height,safeArea.get().top,expandedHeight).maxHeight,width:windowDimensions.get().width,opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring((questDockWrapperSpecs.get().width-windowDimensions.get().width)/2,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}" };
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
      size = { height: maxHeight, width: windowDimensions.get().width, opacity: null, transform: null };
      obj2 = windowDimensions;
      tmp8 = closure_0(closure_2[10]);
      withSpring = tmp8.withSpring;
      num = 0;
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        num = 1;
      }
      size.opacity = withSpring(num, closure_5);
      obj1 = { translateX: null };
      tmp9 = closure_0(closure_2[10]);
      withSpring2 = tmp9.withSpring;
      obj1.translateX = withSpring2((questDockWrapperSpecs.get().width - obj2.get().width) / 2, closure_5);
      items = [];
      items[0] = obj1;
      size.transform = items;
      return size;
    }
  }
  let obj2 = { expandedHeightMode, getQuestDockExpandedHeightLimits: expandedHeightMode(activeQuestDockMode[9]).getQuestDockExpandedHeightLimits, windowDimensions, safeArea: tmp3, expandedHeight, withSpring: expandedHeightMode(activeQuestDockMode[10]).withSpring, activeQuestDockMode, QuestDockMode: windowDimensions, QUEST_DOCK_MODE_CHANGE_PHYSICS, questDockWrapperSpecs };
  D.__closure = obj2;
  D.__workletHash = 2386648099246;
  D.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(D);
  let items = [tmp.wrapper, animatedStyle];
  return jsx(expandedHeight(activeQuestDockMode[11]), { style: items, children });
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContentExpanded.tsx");

export default memoResult;
