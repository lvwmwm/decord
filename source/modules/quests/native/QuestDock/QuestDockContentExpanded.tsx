// Module ID: 14137
// Function ID: 108672
// Dependencies: [31, 27, 4976, 14044, 33, 4130, 14126, 14045, 3991, 4542, 7678, 14138, 14139, 2]

// Module 14137
import importAllResult from "result";
import { QuestDockMode } from "QuestsExperimentLocations";
import QUEST_DOCK_COLLAPSED_HEIGHT from "QUEST_DOCK_COLLAPSED_HEIGHT";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_5, QUEST_DOCK_EXPANDED_HEIGHT: closure_6 } = QUEST_DOCK_COLLAPSED_HEIGHT);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = {};
obj = {};
const merged = Object.assign(require("get ActivityIndicator").StyleSheet.absoluteFillObject);
obj["bottom"] = undefined;
obj["display"] = "flex";
obj["zIndex"] = 1;
obj.wrapper = obj;
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_10 = { code: "function QuestDockContentExpandedTsx1(){const{isEnrolled,QUEST_DOCK_EXPANDED_HEIGHT,windowDimensions,withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,questDockWrapperSpecs}=this.__closure;return{height:isEnrolled?undefined:QUEST_DOCK_EXPANDED_HEIGHT,width:windowDimensions.get().width,opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring((questDockWrapperSpecs.get().width-windowDimensions.get().width)/2,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}" };
const memoResult = importAllResult.memo(function QuestDockContentExpanded() {
  const quest = importAllResult.useContext(questDockWrapperSpecs(windowDimensions[6])).quest;
  const context = importAllResult.useContext(activeQuestDockMode(windowDimensions[7]).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  questDockWrapperSpecs = context.questDockWrapperSpecs;
  windowDimensions = context.windowDimensions;
  const userStatus = quest.userStatus;
  let enrolledAt;
  if (null != userStatus) {
    enrolledAt = userStatus.enrolledAt;
  }
  let tmp4 = null != enrolledAt;
  let obj = activeQuestDockMode(windowDimensions[8]);
  const fn = function n() {
    let obj = {};
    let tmp;
    if (!closure_3) {
      tmp = outer1_6;
    }
    obj.height = tmp;
    obj.width = windowDimensions.get().width;
    let num = 0;
    if (activeQuestDockMode.get() === outer1_4.EXPANDED) {
      num = 1;
    }
    obj.opacity = activeQuestDockMode(windowDimensions[9]).withSpring(num, outer1_5);
    obj = {};
    const obj2 = activeQuestDockMode(windowDimensions[9]);
    obj.translateX = activeQuestDockMode(windowDimensions[9]).withSpring((questDockWrapperSpecs.get().width - windowDimensions.get().width) / 2, outer1_5);
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { isEnrolled: tmp4, QUEST_DOCK_EXPANDED_HEIGHT: closure_6, windowDimensions, withSpring: activeQuestDockMode(windowDimensions[9]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_5, questDockWrapperSpecs };
  fn.__closure = obj;
  fn.__workletHash = 17161265612101;
  fn.__initData = closure_10;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: items };
  items = [callback2().wrapper, animatedStyle];
  let tmp8 = !tmp4;
  let tmp = callback2();
  const tmp6 = closure_8;
  if (!tmp4) {
    tmp8 = callback(questDockWrapperSpecs(windowDimensions[11]), {});
  }
  const items1 = [tmp8, ];
  if (tmp4) {
    const obj1 = { quest };
    tmp4 = callback(questDockWrapperSpecs(windowDimensions[12]), obj1);
  }
  items1[1] = tmp4;
  obj.children = items1;
  return tmp6(questDockWrapperSpecs(windowDimensions[10]), obj);
});
const result = require("QuestsExperimentLocations").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContentExpanded.tsx");

export default memoResult;
