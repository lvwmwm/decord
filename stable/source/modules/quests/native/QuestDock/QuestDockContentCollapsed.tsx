// Module ID: 17514
// Function ID: 17515
// Name: QuestDockContentCollapsed
// Dependencies: [19, 17, 6869, 17427, 21, 5170, 17428, 1652, 5793, 2]

// Module 17514 (QuestDockContentCollapsed)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod1652 from "module_1652" /* 1652 */;
import spring_spring from "spring/spring" /* 5793 */;
import QuestConstants from "QuestConstants" /* 6869 */;
import QuestDockConstants from "QuestDockConstants" /* 17427 */;
import QuestDockGestureContext from "QuestDockGestureContext" /* 17428 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
let num, pointerEvents;

let obj2;
const StyleSheet = react_native.StyleSheet;
const QuestDockMode = QuestConstants.QuestDockMode;
let closure_5 = QuestDockConstants.QUEST_DOCK_MODE_CHANGE_PHYSICS;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { questDockContentCollapsed: obj2 };
createStyles = createStyles.createStyles;
obj2 = { bottom: undefined, zIndex: 2 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_7 = createStyles(obj);
let closure_8 = { code: "(function QuestDockContentCollapsedTsx1(){let[withSpring,activeQuestDockMode,QuestDockMode,hideOnExpand,QUEST_DOCK_MODE_CHANGE_PHYSICS]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};})" };
let closure_9 = { code: "(function QuestDockContentCollapsedTsx2(){let[activeQuestDockMode,QuestDockMode,hideOnExpand]=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?'auto':'none'};})" };
const memoResult = react.memo(function QuestDockContentCollapsed(hideOnExpand) {
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp7;
  let tmp8;
  let tmp9;
  hideOnExpand = hideOnExpand.hideOnExpand;
  let tmp = undefined === hideOnExpand;
  const children = hideOnExpand.children;
  if (!tmp) {
    tmp = hideOnExpand;
  }
  const tmp2 = closure_7();
  const activeQuestDockMode = react.useContext(QuestDockGestureContext.QuestDockGestureContext).activeQuestDockMode;
  const items = [closure_8, , , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[1] = spring_spring.withSpring;
  items[2] = activeQuestDockMode;
  items[3] = QuestDockMode;
  items[4] = tmp;
  items[5] = closure_5;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
  class QuestDockContentCollapsedTsx1 {
    constructor() {
      tmp = closure_0;
      num = 1;
      if (closure_1.get() !== closure_2.COLLAPSED) {
        tmp2 = closure_3;
        num = 1;
        if (closure_3) {
          num = 0;
        }
      }
      obj = { opacity: tmp(num, closure_4) };
      return obj;
    }
  }
  const items1 = [tmp8, tmp9, tmp10, tmp11, tmp12];
  QuestDockContentCollapsedTsx1.__closure = items1;
  QuestDockContentCollapsedTsx1.__workletHash = 8739411300627;
  QuestDockContentCollapsedTsx1.__initData = tmp7;
  const animatedStyle = useAnimatedStyle(QuestDockContentCollapsedTsx1);
  const items2 = [closure_9, activeQuestDockMode, QuestDockMode, tmp];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp14, tmp15, tmp16, tmp17] = items2;
  const tmp3Result = _mod1652;
  class QuestDockContentCollapsedTsx2 {
    constructor() {
      pointerEvents = "auto";
      if (closure_0.get() !== closure_1.COLLAPSED) {
        tmp = closure_2;
        pointerEvents = "auto";
        if (closure_2) {
          pointerEvents = "none";
        }
      }
      return { pointerEvents };
    }
  }
  const items3 = [tmp15, tmp16, tmp17];
  QuestDockContentCollapsedTsx2.__closure = items3;
  QuestDockContentCollapsedTsx2.__workletHash = 6789144201508;
  QuestDockContentCollapsedTsx2.__initData = tmp14;
  const animatedProps = tmp3Result.useAnimatedProps(QuestDockContentCollapsedTsx2);
  const items4 = [tmp2.questDockContentCollapsed, animatedStyle];
  return jsx(_modDef1652.View, { style: items4, animatedProps, children });
});
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContentCollapsed.tsx");

export default memoResult;
