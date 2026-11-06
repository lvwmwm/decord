// Module ID: 17421
// Function ID: 17422
// Name: QuestDockContentExpanded
// Dependencies: [19, 17, 6861, 17334, 21, 5170, 17335, 11402, 1652, 17333, 5791, 2]

// Module 17421 (QuestDockContentExpanded)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod1652 from "module_1652" /* 1652 */;
import spring_spring from "spring/spring" /* 5791 */;
import QuestConstants from "QuestConstants" /* 6861 */;
import useSafeAreaInsetsSharedValueDefault from "useSafeAreaInsetsSharedValue" /* 11402 */;
import QuestDockUtils from "QuestDockUtils" /* 17333 */;
import QuestDockConstants from "QuestDockConstants" /* 17334 */;
import QuestDockGestureContext from "QuestDockGestureContext" /* 17335 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

let maxHeight, num, obj1, obj3, tmp2, tmp3, width, width2, width3;

let obj2;
let tmp4;
const _modDef1652 = tmp4(1652);
const StyleSheet = react_native.StyleSheet;
const QuestDockMode = QuestConstants.QuestDockMode;
let closure_5 = QuestDockConstants.QUEST_DOCK_MODE_CHANGE_PHYSICS;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { wrapper: obj2 };
obj2 = { bottom: undefined, display: "flex", zIndex: 1 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_7 = createStyles(obj);
const constants = { code: "(function QuestDockContentExpandedTsx1(){let[expandedHeightMode,getQuestDockExpandedHeightLimits,windowDimensions,safeArea,expandedHeight,getQuestDockExpandedWidth,withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,questDockWrapperSpecs]=this.__closure;return{height:expandedHeightMode==='content'?undefined:getQuestDockExpandedHeightLimits(windowDimensions.get().height,safeArea.get().top,expandedHeight).maxHeight,width:getQuestDockExpandedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring((questDockWrapperSpecs.get().width-getQuestDockExpandedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right))/2,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};})" };
const memoResult = react.memo(function QuestDockContentExpanded(arg0) {
  let activeQuestDockMode;
  let children;
  let expandedHeight;
  let expandedHeightMode;
  let questDockWrapperSpecs;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp7;
  let tmp8;
  let tmp9;
  let windowDimensions;
  ({ children, expandedHeightMode, expandedHeight } = arg0);
  const tmp = closure_7();
  const context = react.useContext(QuestDockGestureContext.QuestDockGestureContext);
  ({ activeQuestDockMode, questDockWrapperSpecs, windowDimensions } = context);
  const tmp5 = useSafeAreaInsetsSharedValueDefault();
  let tmp6 = _mod1652;
  let items = [constants, expandedHeightMode, , , , , , , , , , ];
  const useAnimatedStyle = tmp6.useAnimatedStyle;
  items[2] = QuestDockUtils.getQuestDockExpandedHeightLimits;
  items[3] = windowDimensions;
  items[4] = tmp5;
  items[5] = expandedHeight;
  items[6] = QuestDockUtils.getQuestDockExpandedWidth;
  items[7] = spring_spring.withSpring;
  items[8] = activeQuestDockMode;
  items[9] = QuestDockMode;
  items[10] = closure_5;
  items[11] = questDockWrapperSpecs;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  let c10;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items;
  class QuestDockContentExpandedTsx1 {
    constructor() {
      maxHeight = undefined;
      if ("content" !== closure_0) {
        tmp2 = closure_1;
        tmp3 = closure_2;
        tmp4 = closure_3;
        tmp5 = closure_4;
        maxHeight = closure_1(closure_2.get().height, closure_3.get().top, closure_4).maxHeight;
      }
      size = { height: maxHeight, width: null, opacity: null, transform: null };
      obj2 = closure_2;
      tmp6 = closure_5;
      obj3 = closure_3;
      width = closure_2.get().width;
      size.width = closure_5(width, closure_3.get().left, closure_3.get().right);
      tmp7 = closure_6;
      num = 0;
      if (closure_7.get() === closure_8.EXPANDED) {
        num = 1;
      }
      size.opacity = tmp7(num, closure_9);
      obj1 = { translateX: null };
      width2 = closure_10.get().width;
      width3 = obj2.get().width;
      obj1.translateX = tmp7((width2 - tmp6(width3, obj3.get().left, obj3.get().right)) / 2, closure_9);
      items = [];
      items[0] = obj1;
      size.transform = items;
      return size;
    }
  }
  const items1 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
  QuestDockContentExpandedTsx1.__closure = items1;
  QuestDockContentExpandedTsx1.__workletHash = 5435658496809;
  QuestDockContentExpandedTsx1.__initData = tmp7;
  const animatedStyle = useAnimatedStyle(QuestDockContentExpandedTsx1);
  const items2 = [tmp.wrapper, animatedStyle];
  return jsx(_modDef1652.View, { style: items2, children });
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContentExpanded.tsx");

export default memoResult;
