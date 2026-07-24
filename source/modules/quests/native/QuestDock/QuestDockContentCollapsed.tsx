// Module ID: 14130
// Function ID: 108636
// Dependencies: [31, 27, 4976, 14044, 33, 4130, 14126, 14045, 3991, 4542, 7678, 14131, 14136, 2]

// Module 14130
import importAllResult from "result";
import { QuestDockMode } from "QuestsExperimentLocations";
import { QUEST_DOCK_MODE_CHANGE_PHYSICS as closure_5 } from "QUEST_DOCK_COLLAPSED_HEIGHT";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let obj = {};
obj = {};
const merged = Object.assign(require("get ActivityIndicator").StyleSheet.absoluteFillObject);
obj["bottom"] = undefined;
obj["zIndex"] = 2;
obj.questDockContentCollapsed = obj;
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_9 = { code: "function QuestDockContentCollapsedTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,hideOnExpand,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
let closure_10 = { code: "function QuestDockContentCollapsedTsx2(){const{activeQuestDockMode,QuestDockMode,hideOnExpand}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?'auto':'none'};}" };
const memoResult = importAllResult.memo(function QuestDockContentCollapsed(hideOnExpand) {
  hideOnExpand = hideOnExpand.hideOnExpand;
  const require = tmp;
  const userStatus = importAllResult.useContext(activeQuestDockMode(14126)).quest.userStatus;
  let enrolledAt;
  if (null != userStatus) {
    enrolledAt = userStatus.enrolledAt;
  }
  let tmp4 = null != enrolledAt;
  activeQuestDockMode = importAllResult.useContext(require(14045) /* QuestDockMode */.QuestDockGestureContext).activeQuestDockMode;
  let obj = require(3991);
  const fn = function p() {
    const obj = {};
    let num = 1;
    if (activeQuestDockMode.get() !== outer1_4.COLLAPSED) {
      num = 1;
      if (tmp) {
        num = 0;
      }
    }
    obj.opacity = tmp(outer1_2[9]).withSpring(num, outer1_5);
    return obj;
  };
  obj = { withSpring: require(4542) /* withSpring */.withSpring, activeQuestDockMode, QuestDockMode, hideOnExpand: tmp, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_5 };
  fn.__closure = obj;
  fn.__workletHash = 13361221764426;
  fn.__initData = closure_9;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const tmp2 = callback2();
  class S {
    constructor() {
      obj = {};
      str = "auto";
      if (activeQuestDockMode.get() !== outer1_4.COLLAPSED) {
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
  const animatedProps = require(3991).useAnimatedProps(S);
  obj = { style: items, animatedProps };
  items = [tmp2.questDockContentCollapsed, animatedStyle];
  let tmp9 = !tmp4;
  const obj3 = require(3991);
  const tmp7 = closure_7;
  if (!tmp4) {
    tmp9 = callback(activeQuestDockMode(14131), {});
  }
  const items1 = [tmp9, ];
  if (tmp4) {
    tmp4 = callback(activeQuestDockMode(14136), {});
  }
  items1[1] = tmp4;
  obj.children = items1;
  return tmp7(activeQuestDockMode(7678), obj);
});
const result = require("QuestsExperimentLocations").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContentCollapsed.tsx");

export default memoResult;
