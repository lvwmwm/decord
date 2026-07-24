// Module ID: 14132
// Function ID: 108654
// Name: QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED
// Dependencies: [31, 27, 4976, 14044, 33, 4130, 14045, 14133, 3991, 2]

// Module 14132 (QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { QuestDockMode } from "QuestsExperimentLocations";
import QUEST_DOCK_COLLAPSED_HEIGHT from "QUEST_DOCK_COLLAPSED_HEIGHT";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let QUEST_DOCK_EXPANDED_HEIGHT;
let QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED;
let StyleSheet;
let closure_4;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ StyleSheet, View: closure_4 } = get_ActivityIndicator);
({ QUEST_DOCK_EXPANDED_HEIGHT, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED } = QUEST_DOCK_COLLAPSED_HEIGHT);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
let obj = {};
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["height"] = QUEST_DOCK_EXPANDED_HEIGHT;
obj["top"] = -QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED;
obj.image = obj;
_createForOfIteratorHelperLoose = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["backgroundColor"] = "rgba(38, 39, 50, 0.3)";
_createForOfIteratorHelperLoose["height"] = QUEST_DOCK_EXPANDED_HEIGHT;
obj.overlay = _createForOfIteratorHelperLoose;
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_11 = { code: "function QuestDockBlurredHeaderPlaceholderTsx1(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,questDockWrapperSpecs}=this.__closure;return{left:activeQuestDockMode.get()===QuestDockMode.EXPANDED?-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,width:questDockWrapperSpecs.get().width+QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED};}" };
const memoResult = importAllResult.memo(function QuestDockBlurredContentBackground(placeholder) {
  let animatedLayout;
  let animatedStyle;
  placeholder = placeholder.placeholder;
  ({ animatedLayout, animatedStyle } = placeholder);
  const context = importAllResult.useContext(placeholder(activeQuestDockMode[6]).QuestDockGestureContext);
  const questDockWrapperSpecs = context.questDockWrapperSpecs;
  activeQuestDockMode = context.activeQuestDockMode;
  const items = [placeholder];
  const memo = importAllResult.useMemo(() => {
    const obj = { uri: placeholder(activeQuestDockMode[7]).thumbHashToDataURL(Uint8Array.from(atob(placeholder), (str) => str.charCodeAt(0))) };
    return obj;
  }, items);
  const tmp3 = callback3();
  let obj = placeholder(activeQuestDockMode[8]);
  class D {
    constructor() {
      obj = {};
      num = 0;
      if (activeQuestDockMode.get() === outer1_5.EXPANDED) {
        tmp = outer1_6;
        num = -outer1_6;
      }
      obj.left = num;
      obj.width = questDockWrapperSpecs.get().width + outer1_6;
      return obj;
    }
  }
  obj = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED, questDockWrapperSpecs };
  D.__closure = obj;
  D.__workletHash = 11176778421725;
  D.__initData = closure_11;
  obj = {};
  animatedStyle = obj.useAnimatedStyle(D);
  const items1 = [tmp3.image, animatedStyle, animatedStyle];
  const items2 = [callback(questDockWrapperSpecs(activeQuestDockMode[8]).Image, { source: memo, style: items1, layout: animatedLayout }), callback(closure_4, { style: tmp3.overlay })];
  obj.children = items2;
  return callback2(closure_8, obj);
});
const result = require("QuestsExperimentLocations").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBlurredHeaderPlaceholder.tsx");

export default memoResult;
