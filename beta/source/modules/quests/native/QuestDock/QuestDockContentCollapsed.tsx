// Module ID: 14715
// Function ID: 14716
// Name: QuestDockContentCollapsed
// Dependencies: [19, 17, 5756, 14624, 21, 4836, 14625, 4566, 5280, 6494, 2]

// Module 14715 (QuestDockContentCollapsed)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import spring from "spring" /* 5280 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import QuestDockConstants from "QuestDockConstants" /* 14624 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
const StyleSheet = react_native.StyleSheet;
const QuestDockMode = QuestConstants.QuestDockMode;
const QUEST_DOCK_MODE_CHANGE_PHYSICS = QuestDockConstants.QUEST_DOCK_MODE_CHANGE_PHYSICS;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { questDockContentCollapsed: obj2 };
obj2 = { bottom: undefined, zIndex: 2 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_7 = createStyles(obj);
const __initData = { code: "function QuestDockContentCollapsedTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,hideOnExpand,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
const __initData2 = { code: "function QuestDockContentCollapsedTsx2(){const{activeQuestDockMode,QuestDockMode,hideOnExpand}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?'auto':'none'};}" };
const memoResult = react.memo(function QuestDockContentCollapsed(hideOnExpand) {
  hideOnExpand = hideOnExpand.hideOnExpand;
  let tmp = undefined === hideOnExpand;
  const children = hideOnExpand.children;
  if (!tmp) {
    tmp = hideOnExpand;
  }
  hideOnExpand = tmp;
  const tmp2 = closure_7();
  const activeQuestDockMode = react.useContext(hideOnExpand(14625).QuestDockGestureContext).activeQuestDockMode;
  let obj = hideOnExpand(4566);
  const fn = function l() {
    const withSpring = spring.withSpring;
    let num = 1;
    spring;
    if (activeQuestDockMode.get() !== QuestDockMode.COLLAPSED) {
      num = 1;
      if (hideOnExpand) {
        num = 0;
      }
    }
    const obj = { opacity: withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS) };
    return obj;
  };
  fn.__closure = { withSpring: hideOnExpand(5280).withSpring, activeQuestDockMode, QuestDockMode, hideOnExpand: tmp, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  fn.__workletHash = 13361221764426;
  fn.__initData = __initData;
  ({ withSpring: hideOnExpand(5280).withSpring, activeQuestDockMode, QuestDockMode, hideOnExpand: tmp, QUEST_DOCK_MODE_CHANGE_PHYSICS });
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = hideOnExpand(4566);
  class C {
    constructor() {
      let pointerEvents = "auto";
      if (activeQuestDockMode.get() !== QuestDockMode.COLLAPSED) {
        pointerEvents = "auto";
        if (hideOnExpand) {
          pointerEvents = "none";
        }
      }
      return { pointerEvents };
    }
  }
  C.__closure = { activeQuestDockMode, QuestDockMode, hideOnExpand: tmp };
  C.__workletHash = 14339269503421;
  C.__initData = __initData2;
  const animatedProps = obj3.useAnimatedProps(C);
  const items = [tmp2.questDockContentCollapsed, animatedStyle];
  return jsx(activeQuestDockMode(6494), { style: items, animatedProps, children });
});
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContentCollapsed.tsx");

export default memoResult;
