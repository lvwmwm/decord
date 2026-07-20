// Module ID: 13949
// Function ID: 106062
// Dependencies: []

// Module 13949
const importAllResult = importAll(dependencyMap[0]);
const QuestDockMode = arg1(dependencyMap[2]).QuestDockMode;
let closure_5 = arg1(dependencyMap[3]).QUEST_DOCK_MODE_CHANGE_PHYSICS;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
let obj = {};
obj = {};
const merged = Object.assign(arg1(dependencyMap[1]).StyleSheet.absoluteFillObject);
obj["bottom"] = undefined;
obj["zIndex"] = 2;
obj.questDockContentCollapsed = obj;
let closure_8 = arg1(dependencyMap[5]).createStyles(obj);
let closure_9 = { code: "function QuestDockContentCollapsedTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,hideOnExpand,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
let closure_10 = { code: "function QuestDockContentCollapsedTsx2(){const{activeQuestDockMode,QuestDockMode,hideOnExpand}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?'auto':'none'};}" };
const obj2 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo(function QuestDockContentCollapsed(hideOnExpand) {
  hideOnExpand = hideOnExpand.hideOnExpand;
  const arg1 = tmp;
  const userStatus = importAllResult.useContext(importDefault(dependencyMap[6])).quest.userStatus;
  let enrolledAt;
  if (null != userStatus) {
    enrolledAt = userStatus.enrolledAt;
  }
  let tmp4 = null != enrolledAt;
  const activeQuestDockMode = importAllResult.useContext(arg1(dependencyMap[7]).QuestDockGestureContext).activeQuestDockMode;
  const importDefault = activeQuestDockMode;
  let obj = arg1(dependencyMap[8]);
  const fn = function p() {
    const obj = {};
    let num = 1;
    if (activeQuestDockMode.get() !== constants.COLLAPSED) {
      num = 1;
      if (tmp) {
        num = 0;
      }
    }
    obj.opacity = tmp(closure_2[9]).withSpring(num, closure_5);
    return obj;
  };
  obj = { withSpring: arg1(dependencyMap[9]).withSpring, activeQuestDockMode, QuestDockMode, hideOnExpand: tmp, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_5 };
  fn.__closure = obj;
  fn.__workletHash = 13361221764426;
  fn.__initData = closure_9;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const tmp2 = callback2();
  class S {
    constructor() {
      obj = {};
      str = "auto";
      if (activeQuestDockMode.get() !== closure_4.COLLAPSED) {
        tmp = closure_0;
        str = "auto";
        if (closure_0) {
          str = "none";
        }
      }
      obj.pointerEvents = str;
      return obj;
    }
  }
  S.__closure = { activeQuestDockMode, QuestDockMode, hideOnExpand: undefined === hideOnExpand || hideOnExpand };
  S.__workletHash = 14339269503421;
  S.__initData = closure_10;
  const animatedProps = arg1(dependencyMap[8]).useAnimatedProps(S);
  obj = { style: items, animatedProps };
  const items = [tmp2.questDockContentCollapsed, animatedStyle];
  let tmp9 = !tmp4;
  const obj3 = arg1(dependencyMap[8]);
  const tmp7 = closure_7;
  if (!tmp4) {
    tmp9 = callback(importDefault(dependencyMap[11]), {});
  }
  const items1 = [tmp9, ];
  if (tmp4) {
    tmp4 = callback(importDefault(dependencyMap[12]), {});
  }
  items1[1] = tmp4;
  obj.children = items1;
  return tmp7(importDefault(dependencyMap[10]), obj);
});
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContentCollapsed.tsx");

export default memoResult;
