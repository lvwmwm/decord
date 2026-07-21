// Module ID: 13963
// Function ID: 106121
// Dependencies: []

// Module 13963
const importAllResult = importAll(dependencyMap[0]);
const QuestDockMode = arg1(dependencyMap[2]).QuestDockMode;
({ QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_5, QUEST_DOCK_EXPANDED_HEIGHT: closure_6 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
let obj = {};
obj = {};
const merged = Object.assign(arg1(dependencyMap[1]).StyleSheet.absoluteFillObject);
obj["bottom"] = undefined;
obj["display"] = "flex";
obj["zIndex"] = 1;
obj.wrapper = obj;
let closure_9 = arg1(dependencyMap[5]).createStyles(obj);
let closure_10 = { code: "function QuestDockContentExpandedTsx1(){const{isEnrolled,QUEST_DOCK_EXPANDED_HEIGHT,windowDimensions,withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,questDockWrapperSpecs}=this.__closure;return{height:isEnrolled?undefined:QUEST_DOCK_EXPANDED_HEIGHT,width:windowDimensions.get().width,opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring((questDockWrapperSpecs.get().width-windowDimensions.get().width)/2,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}" };
const obj2 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo(function QuestDockContentExpanded() {
  const quest = importAllResult.useContext(importDefault(dependencyMap[6])).quest;
  const context = importAllResult.useContext(arg1(dependencyMap[7]).QuestDockGestureContext);
  const activeQuestDockMode = context.activeQuestDockMode;
  const arg1 = activeQuestDockMode;
  const importDefault = questDockWrapperSpecs;
  const windowDimensions = context.windowDimensions;
  const dependencyMap = windowDimensions;
  const userStatus = quest.userStatus;
  let enrolledAt;
  if (null != userStatus) {
    enrolledAt = userStatus.enrolledAt;
  }
  let tmp4 = null != enrolledAt;
  let obj = arg1(dependencyMap[8]);
  const fn = function n() {
    let obj = {};
    let tmp;
    if (!tmp4) {
      tmp = closure_6;
    }
    obj.height = tmp;
    obj.width = windowDimensions.get().width;
    let num = 0;
    if (activeQuestDockMode.get() === constants.EXPANDED) {
      num = 1;
    }
    obj.opacity = activeQuestDockMode(windowDimensions[9]).withSpring(num, closure_5);
    obj = {};
    const obj2 = activeQuestDockMode(windowDimensions[9]);
    obj.translateX = activeQuestDockMode(windowDimensions[9]).withSpring((questDockWrapperSpecs.get().width - windowDimensions.get().width) / 2, closure_5);
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { isEnrolled: tmp4, QUEST_DOCK_EXPANDED_HEIGHT: closure_6, windowDimensions, withSpring: arg1(dependencyMap[9]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_5, questDockWrapperSpecs: context.questDockWrapperSpecs };
  fn.__closure = obj;
  fn.__workletHash = 17161265612101;
  fn.__initData = closure_10;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: items };
  const items = [callback2().wrapper, animatedStyle];
  let tmp8 = !tmp4;
  const tmp = callback2();
  const tmp6 = closure_8;
  if (!tmp4) {
    tmp8 = callback(importDefault(dependencyMap[11]), {});
  }
  const items1 = [tmp8, ];
  if (tmp4) {
    const obj1 = { quest };
    tmp4 = callback(importDefault(dependencyMap[12]), obj1);
  }
  items1[1] = tmp4;
  obj.children = items1;
  return tmp6(importDefault(dependencyMap[10]), obj);
});
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContentExpanded.tsx");

export default memoResult;
