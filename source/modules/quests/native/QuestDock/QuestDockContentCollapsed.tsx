// Module ID: 14204
// Function ID: 14205
// Dependencies: [19, 17, 5033, 14118, 21, 4189, 14200, 14119, 4050, 4599, 7676, 14205, 14210, 2]

// Module 14204
import importAllResult from "noop";
import { QuestDockMode } from "QuestsExperimentLocations";
import { QUEST_DOCK_MODE_CHANGE_PHYSICS as closure_5 } from "QUEST_DOCK_COLLAPSED_HEIGHT";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
let require = arg1;
let c3 = importAllResult;
({ jsx: closure_6, jsxs: error } = jsxProd);
let obj = { questDockContentCollapsed: null };
obj = {};
const merged = Object.assign(require("get ActivityIndicator").StyleSheet.absoluteFillObject);
obj.bottom = undefined;
obj.zIndex = 2;
obj[0] = obj;
let closure_8 = createCacheKey.createStyles(obj);
let closure_9 = { code: "function QuestDockContentCollapsedTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,hideOnExpand,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
let closure_10 = { code: "function QuestDockContentCollapsedTsx2(){const{activeQuestDockMode,QuestDockMode,hideOnExpand}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?'auto':'none'};}" };
const memoResult = importAllResult.memo(function QuestDockContentCollapsed(hideOnExpand) {
  hideOnExpand = hideOnExpand.hideOnExpand;
  const require = tmp;
  let obj = importAllResult;
  const userStatus = importAllResult.useContext(activeQuestDockMode(14200)).quest.userStatus;
  let enrolledAt;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  let tmp6 = null != enrolledAt;
  activeQuestDockMode = obj.useContext(require(14119) /* QuestDockMode */.QuestDockGestureContext).activeQuestDockMode;
  const tmp4 = callback2();
  const fn = function u() {
    let obj = tmp(outer1_2[9]);
    let num = 1;
    if (activeQuestDockMode.get() !== outer1_4.COLLAPSED) {
      num = 1;
      if (tmp) {
        num = 0;
      }
    }
    obj = { opacity: obj.withSpring(num, outer1_5) };
    return obj;
  };
  obj = { withSpring: require(4599) /* CONFIG_NEVER_ANIMATE */.withSpring, activeQuestDockMode, QuestDockMode, hideOnExpand: tmp, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_5 };
  fn.__closure = obj;
  fn.__workletHash = 13361221764426;
  fn.__initData = closure_9;
  const animatedStyle = require(4050).useAnimatedStyle(fn);
  const obj2 = require(4050);
  const fn2 = function p() {
    let pointerEvents = "auto";
    if (activeQuestDockMode.get() !== outer1_4.COLLAPSED) {
      pointerEvents = "auto";
      if (closure_0) {
        pointerEvents = "none";
      }
    }
    return { pointerEvents };
  };
  fn2.__closure = { activeQuestDockMode, QuestDockMode, hideOnExpand: undefined === hideOnExpand || hideOnExpand };
  fn2.__workletHash = 14339269503421;
  fn2.__initData = closure_10;
  const animatedProps = require(4050).useAnimatedProps(fn2);
  obj = { style: items, animatedProps, children: null };
  items = [tmp4.questDockContentCollapsed, animatedStyle];
  let tmp11 = !tmp6;
  const obj4 = require(4050);
  const tmp9 = closure_7;
  if (!tmp6) {
    tmp11 = callback(tmp2(14205), {});
  }
  const items1 = [tmp11, ];
  if (tmp6) {
    tmp6 = callback(tmp2(14210), {});
  }
  items1[1] = tmp6;
  obj[2] = items1;
  return tmp9(activeQuestDockMode(7676), obj);
});
const result = require("QuestsExperimentLocations").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContentCollapsed.tsx");

export default memoResult;
