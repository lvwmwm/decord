// Module ID: 14211
// Function ID: 14212
// Dependencies: [19, 17, 5033, 14118, 21, 4189, 14200, 14119, 4050, 4599, 7676, 14212, 14213, 2]

// Module 14211
import importAllResult from "noop";
import { QuestDockMode } from "QuestsExperimentLocations";
import QUEST_DOCK_COLLAPSED_HEIGHT from "QUEST_DOCK_COLLAPSED_HEIGHT";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
let c3 = importAllResult;
({ QUEST_DOCK_MODE_CHANGE_PHYSICS: c5, QUEST_DOCK_EXPANDED_HEIGHT: closure_6 } = QUEST_DOCK_COLLAPSED_HEIGHT);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let obj = { wrapper: null };
obj = {};
const merged = Object.assign(require("get ActivityIndicator").StyleSheet.absoluteFillObject);
obj.bottom = undefined;
obj.display = "flex";
obj.zIndex = 1;
obj[0] = obj;
let closure_9 = createCacheKey.createStyles(obj);
let closure_10 = { code: "function QuestDockContentExpandedTsx1(){const{isEnrolled,QUEST_DOCK_EXPANDED_HEIGHT,windowDimensions,withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,questDockWrapperSpecs}=this.__closure;return{height:isEnrolled?undefined:QUEST_DOCK_EXPANDED_HEIGHT,width:windowDimensions.get().width,opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring((questDockWrapperSpecs.get().width-windowDimensions.get().width)/2,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}" };
const memoResult = importAllResult.memo(function QuestDockContentExpanded() {
  const quest = importAllResult.useContext(questDockWrapperSpecs(windowDimensions[6])).quest;
  const context = importAllResult.useContext(activeQuestDockMode(windowDimensions[7]).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  questDockWrapperSpecs = context.questDockWrapperSpecs;
  windowDimensions = context.windowDimensions;
  const userStatus = quest.userStatus;
  let enrolledAt;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  let tmp7 = null != enrolledAt;
  let tmp3 = callback2();
  const fn = function o() {
    let tmp;
    if (!closure_3) {
      tmp = outer1_6;
    }
    let obj = { height: tmp, width: windowDimensions.get().width, opacity: null, transform: null };
    let num = 0;
    if (activeQuestDockMode.get() === outer1_4.EXPANDED) {
      num = 1;
    }
    obj[2] = activeQuestDockMode(windowDimensions[9]).withSpring(num, outer1_5);
    obj = { translateX: null };
    const obj2 = windowDimensions;
    const obj3 = activeQuestDockMode(windowDimensions[9]);
    const tmp2 = activeQuestDockMode;
    const tmp3 = windowDimensions;
    obj[0] = activeQuestDockMode(windowDimensions[9]).withSpring((questDockWrapperSpecs.get().width - obj2.get().width) / 2, outer1_5);
    const items = [obj];
    obj[3] = items;
    return obj;
  };
  let obj = { isEnrolled: tmp7, QUEST_DOCK_EXPANDED_HEIGHT: closure_6, windowDimensions, withSpring: tmp4(tmp2[9]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_5, questDockWrapperSpecs };
  fn.__closure = obj;
  fn.__workletHash = 17161265612101;
  fn.__initData = closure_10;
  const animatedStyle = activeQuestDockMode(windowDimensions[8]).useAnimatedStyle(fn);
  obj = { style: items, children: null };
  items = [tmp3.wrapper, animatedStyle];
  let tmp11 = !tmp7;
  const tmp4Result = activeQuestDockMode(windowDimensions[8]);
  const tmp9 = closure_8;
  if (!tmp7) {
    tmp11 = callback(tmp(tmp2[11]), {});
  }
  const items1 = [tmp11, ];
  if (tmp7) {
    const obj1 = { quest: null };
    obj1[0] = quest;
    tmp7 = callback(tmp(tmp2[12]), obj1);
  }
  items1[1] = tmp7;
  obj[1] = items1;
  return tmp9(questDockWrapperSpecs(windowDimensions[10]), obj);
});
const result = require("QuestsExperimentLocations").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContentExpanded.tsx");

export default memoResult;
