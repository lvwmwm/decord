// Module ID: 14089
// Function ID: 108359
// Name: EnrolledBodyWatchTask
// Dependencies: [5, 31, 27, 13992, 4976, 13994, 33, 4130, 689, 13998, 13995, 8277, 13990, 14020, 4979, 14017, 14016, 14018, 1557, 6965, 2]

// Module 14089 (EnrolledBodyWatchTask)
import closure_3 from "QUEST_DOCK_COLLAPSED_HEIGHT";
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import QuestsExperimentLocations from "QuestsExperimentLocations";
import QUEST_DOCK_COLLAPSED_HEIGHT from "QUEST_DOCK_COLLAPSED_HEIGHT";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let QUEST_DOCK_EXPANDED_PADDING_BOTTOM;
let closure_11;
let closure_12;
let closure_13;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function EnrolledBodyWatchTask(quest) {
  quest = quest.quest;
  const tmp = callback3();
  const context = hasWatchVideoOnMobileTasks.useContext(quest(questDockWrapperSpecs[9]).QuestDockExternalCoordinationContext);
  const setRestingQuestDockMode = context.setRestingQuestDockMode;
  questDockWrapperSpecs = hasWatchVideoOnMobileTasks.useContext(quest(questDockWrapperSpecs[10]).QuestDockGestureContext).questDockWrapperSpecs;
  const tmp3 = setRestingQuestDockMode(questDockWrapperSpecs[11])(context.restingQuestDockMode);
  let closure_3 = tmp3;
  let obj = quest(questDockWrapperSpecs[12]);
  hasWatchVideoOnMobileTasks = obj.useHasWatchVideoOnMobileTasks(quest.config);
  const items = [tmp3, questDockWrapperSpecs, quest.id, setRestingQuestDockMode, hasWatchVideoOnMobileTasks];
  const effect = hasWatchVideoOnMobileTasks.useEffect(() => {
    function _maybeOpenVideoQuestModal() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      return obj(...arguments);
    }
    if (hasWatchVideoOnMobileTasks) {
      (function maybeOpenVideoQuestModal() {
        return _maybeOpenVideoQuestModal(...arguments);
      })();
    }
  }, items);
  obj = {};
  obj = { style: tmp.headerWrapper };
  const obj1 = { quest, step: quest(questDockWrapperSpecs[16]).QuestBottomSheetStep.TASK_STATUS, withActionSheet: true, location: constants.QUESTS_BAR_MOBILE };
  obj.children = callback(setRestingQuestDockMode(questDockWrapperSpecs[15]), obj1);
  const items1 = [callback(View, obj), , ];
  const obj2 = { style: tmp.contentWrapper };
  const obj3 = { quest, location: constants.QUESTS_BAR_MOBILE, step: quest(questDockWrapperSpecs[16]).QuestBottomSheetStep.TASK_STATUS, sourceQuestContent: quest(questDockWrapperSpecs[14]).QuestContent.QUEST_BAR_MOBILE };
  obj2.children = callback(quest(questDockWrapperSpecs[16]).QuestBottomSheetContent, obj3);
  items1[1] = callback(View, obj2);
  const obj4 = { style: tmp.footerWrapper };
  const obj5 = { quest };
  const tmp6 = setRestingQuestDockMode(questDockWrapperSpecs[15]);
  obj5.step = quest(questDockWrapperSpecs[16]).QuestBottomSheetStep.TASK_STATUS;
  obj5.style = tmp.footer;
  obj5.withSafeArea = false;
  obj5.sourceQuestContent = quest(questDockWrapperSpecs[14]).QuestContent.QUEST_BAR_MOBILE;
  obj4.children = callback(setRestingQuestDockMode(questDockWrapperSpecs[17]), obj5);
  items1[2] = callback(View, obj4);
  obj.children = items1;
  return callback2(closure_12, obj);
}
function EnrolledBodyPlayStreamTask(quest) {
  let defibrillator;
  let handleTaskSelect;
  let showMicrophone;
  let step;
  let stepActions;
  quest = quest.quest;
  const tmp = callback3();
  let obj = require(14016) /* QuestBottomSheet */;
  obj = { quest, location: constants.QUESTS_BAR_MOBILE, sourceQuestContent: require(4979) /* QuestsVisibleMessagesChangedSource */.QuestContent.QUEST_BAR_MOBILE };
  const enrolledQuestContentProps = obj.useEnrolledQuestContentProps(obj);
  ({ step, defibrillator, stepActions } = enrolledQuestContentProps);
  obj = {};
  ({ handleTaskSelect, showMicrophone } = enrolledQuestContentProps);
  const items = [callback(View, { style: tmp.headerWrapper, children: callback(importDefault(14017), obj2) }), , ];
  const obj3 = { style: tmp.contentWrapper };
  const obj4 = { defibrillator, quest, handleTaskSelect, location: constants.QUESTS_BAR_MOBILE, showMicrophone, step, sourceQuestContent: require(4979) /* QuestsVisibleMessagesChangedSource */.QuestContent.QUEST_BAR_MOBILE };
  obj3.children = callback(require(14016) /* QuestBottomSheet */.QuestBottomSheetContent, obj4);
  items[1] = callback(View, obj3);
  const obj5 = { style: tmp.footerWrapper };
  const obj6 = { quest, step, isDefibrilating: defibrillator.isActive, onBack: stepActions.onBack, onDefib: defibrillator.start, onConnectConsoleNext: stepActions.onNext, style: tmp.footer, withSafeArea: false };
  const obj1 = { style: tmp.headerWrapper, children: callback(importDefault(14017), obj2) };
  obj6.sourceQuestContent = require(4979) /* QuestsVisibleMessagesChangedSource */.QuestContent.QUEST_BAR_MOBILE;
  obj5.children = callback(importDefault(14018), obj6);
  items[2] = callback(View, obj5);
  obj.children = items;
  return callback2(closure_12, obj);
}
({ QuestDockMode: closure_7, QuestsExperimentLocations: closure_8 } = QuestsExperimentLocations);
({ QUEST_DOCK_EXPANDED_HEIGHT: closure_9, QUEST_DOCK_EXPANDED_PADDING_BOTTOM } = QUEST_DOCK_COLLAPSED_HEIGHT);
const QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL = QUEST_DOCK_COLLAPSED_HEIGHT.QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL;
({ jsx: closure_11, Fragment: closure_12, jsxs: closure_13 } = jsxProd);
obj = { wrapper: obj };
obj = { flexGrow: 0, flexShrink: 0, paddingBottom: QUEST_DOCK_EXPANDED_PADDING_BOTTOM, paddingTop: QUEST_DOCK_COLLAPSED_HEIGHT.QUEST_DOCK_EXPANDED_ENROLLED_PADDING_TOP, paddingHorizontal: QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL };
_createForOfIteratorHelperLoose = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.headerWrapper = _createForOfIteratorHelperLoose;
let obj2 = { display: "flex", gap: require("_createForOfIteratorHelperLoose").space.PX_16, flexGrow: 0, flexShrink: 0 };
obj.contentWrapper = obj2;
obj.footer = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.footerWrapper = { marginLeft: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, marginRight: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL };
let closure_14 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj3 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj4 = { marginLeft: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, marginRight: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL };
const memoResult = importAllResult.memo(function QuestDockEnrolledBody(quest) {
  quest = quest.quest;
  minExpandedContentHeight = importAllResult.useContext(minExpandedContentHeight(13995).QuestDockGestureContext).minExpandedContentHeight;
  const items = [minExpandedContentHeight];
  const items1 = [minExpandedContentHeight];
  const callback = importAllResult.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    if (minExpandedContentHeight.get() !== height) {
      const result = minExpandedContentHeight.set(height);
    }
  }, items);
  const effect = importAllResult.useEffect(() => () => {
    if (outer1_0.get() !== outer2_9) {
      const result = outer1_0.set(outer2_9);
    }
  }, items1);
  let obj = {};
  const items2 = [callback3().wrapper, ];
  obj = { paddingBottom: Math.max(importDefault(1557)().bottom, QUEST_DOCK_EXPANDED_PADDING_BOTTOM) };
  items2[1] = obj;
  obj.style = items2;
  obj.onLayout = callback;
  const tmp = callback3();
  const tmp4 = closure_11;
  const tmp5 = View;
  if (obj3.hasWatchVideoTasks(quest)) {
    obj = { quest };
    let tmp6Result = tmp6(EnrolledBodyWatchTask, obj);
  } else {
    const obj1 = { quest };
    tmp6Result = tmp6(EnrolledBodyPlayStreamTask, obj1);
  }
  obj.children = tmp6Result;
  return tmp4(tmp5, obj);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockEnrolledBody.tsx");

export default memoResult;
