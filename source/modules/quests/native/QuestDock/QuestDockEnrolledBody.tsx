// Module ID: 13968
// Function ID: 106163
// Name: EnrolledBodyWatchTask
// Dependencies: []

// Module 13968 (EnrolledBodyWatchTask)
let QUEST_DOCK_EXPANDED_PADDING_BOTTOM;
function EnrolledBodyWatchTask(quest) {
  quest = quest.quest;
  const arg1 = quest;
  const tmp = callback3();
  const context = importAllResult.useContext(arg1(dependencyMap[9]).QuestDockExternalCoordinationContext);
  const setRestingQuestDockMode = context.setRestingQuestDockMode;
  const importDefault = setRestingQuestDockMode;
  const questDockWrapperSpecs = importAllResult.useContext(arg1(dependencyMap[10]).QuestDockGestureContext).questDockWrapperSpecs;
  const dependencyMap = questDockWrapperSpecs;
  const tmp3 = importDefault(dependencyMap[11])(context.restingQuestDockMode);
  let closure_3 = tmp3;
  let obj = arg1(dependencyMap[12]);
  const hasWatchVideoOnMobileTasks = obj.useHasWatchVideoOnMobileTasks(quest.config);
  const items = [tmp3, questDockWrapperSpecs, quest.id, setRestingQuestDockMode, hasWatchVideoOnMobileTasks];
  const effect = importAllResult.useEffect(() => {
    function _maybeOpenVideoQuestModal() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      const _maybeOpenVideoQuestModal = obj;
      return obj(...arguments);
    }
    if (hasWatchVideoOnMobileTasks) {
      function maybeOpenVideoQuestModal() {
        return _maybeOpenVideoQuestModal(...arguments);
      }();
    }
  }, items);
  obj = {};
  obj = { style: tmp.headerWrapper };
  const obj1 = { quest, step: arg1(dependencyMap[16]).QuestBottomSheetStep.TASK_STATUS, withActionSheet: true, location: constants.QUESTS_BAR_MOBILE };
  obj.children = callback(importDefault(dependencyMap[15]), obj1);
  const items1 = [callback(View, obj), , ];
  const obj2 = { style: tmp.contentWrapper };
  const obj3 = { quest, location: constants.QUESTS_BAR_MOBILE, step: arg1(dependencyMap[16]).QuestBottomSheetStep.TASK_STATUS, sourceQuestContent: arg1(dependencyMap[14]).QuestContent.QUEST_BAR_MOBILE };
  obj2.children = callback(arg1(dependencyMap[16]).QuestBottomSheetContent, obj3);
  items1[1] = callback(View, obj2);
  const obj4 = { style: tmp.footerWrapper };
  const obj5 = { quest };
  const tmp6 = importDefault(dependencyMap[15]);
  obj5.step = arg1(dependencyMap[16]).QuestBottomSheetStep.TASK_STATUS;
  obj5.style = tmp.footer;
  obj5.withSafeArea = false;
  obj5.sourceQuestContent = arg1(dependencyMap[14]).QuestContent.QUEST_BAR_MOBILE;
  obj4.children = callback(importDefault(dependencyMap[17]), obj5);
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
  let obj = arg1(dependencyMap[16]);
  obj = { quest, location: constants.QUESTS_BAR_MOBILE, sourceQuestContent: arg1(dependencyMap[14]).QuestContent.QUEST_BAR_MOBILE };
  const enrolledQuestContentProps = obj.useEnrolledQuestContentProps(obj);
  ({ step, defibrillator, stepActions } = enrolledQuestContentProps);
  obj = {};
  ({ handleTaskSelect, showMicrophone } = enrolledQuestContentProps);
  const items = [callback(View, { style: tmp.headerWrapper, children: callback(importDefault(dependencyMap[15]), obj2) }), , ];
  const obj3 = { style: tmp.contentWrapper };
  const obj4 = { defibrillator, quest, handleTaskSelect, location: constants.QUESTS_BAR_MOBILE, showMicrophone, step, sourceQuestContent: arg1(dependencyMap[14]).QuestContent.QUEST_BAR_MOBILE };
  obj3.children = callback(arg1(dependencyMap[16]).QuestBottomSheetContent, obj4);
  items[1] = callback(View, obj3);
  const obj5 = { style: tmp.footerWrapper };
  const obj6 = { quest, step, isDefibrilating: defibrillator.isActive, onBack: stepActions.onBack, onDefib: defibrillator.start, onConnectConsoleNext: stepActions.onNext, style: tmp.footer, withSafeArea: false };
  const obj1 = { style: tmp.headerWrapper, children: callback(importDefault(dependencyMap[15]), obj2) };
  obj6.sourceQuestContent = arg1(dependencyMap[14]).QuestContent.QUEST_BAR_MOBILE;
  obj5.children = callback(importDefault(dependencyMap[17]), obj6);
  items[2] = callback(View, obj5);
  obj.children = items;
  return callback2(closure_12, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
({ QuestDockMode: closure_7, QuestsExperimentLocations: closure_8 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[5]);
({ QUEST_DOCK_EXPANDED_HEIGHT: closure_9, QUEST_DOCK_EXPANDED_PADDING_BOTTOM } = tmp3);
const QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL = tmp3.QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL;
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_11, Fragment: closure_12, jsxs: closure_13 } = arg1(dependencyMap[6]));
let obj1 = arg1(dependencyMap[7]);
let obj = { wrapper: obj };
obj = { isArray: -536870861, diversity: -299892737, paddingBottom: QUEST_DOCK_EXPANDED_PADDING_BOTTOM, paddingTop: tmp3.QUEST_DOCK_EXPANDED_ENROLLED_PADDING_TOP, paddingHorizontal: QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL };
obj1 = { marginBottom: importDefault(dependencyMap[8]).space.PX_16 };
obj.headerWrapper = obj1;
const obj2 = { overflow: "Group 19", position: 2, top: 2, left: 0, gap: importDefault(dependencyMap[8]).space.PX_16 };
obj.contentWrapper = obj2;
const tmp4 = arg1(dependencyMap[6]);
obj.footer = { marginTop: importDefault(dependencyMap[8]).space.PX_16 };
obj.footerWrapper = { marginLeft: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, marginRight: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL };
let closure_14 = obj1.createStyles(obj);
const obj3 = { marginTop: importDefault(dependencyMap[8]).space.PX_16 };
const obj4 = { marginLeft: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, marginRight: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL };
const memoResult = importAllResult.memo(function QuestDockEnrolledBody(quest) {
  quest = quest.quest;
  const minExpandedContentHeight = importAllResult.useContext(arg1(dependencyMap[10]).QuestDockGestureContext).minExpandedContentHeight;
  const arg1 = minExpandedContentHeight;
  const items = [minExpandedContentHeight];
  const items1 = [minExpandedContentHeight];
  const callback = importAllResult.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    if (minExpandedContentHeight.get() !== height) {
      const result = minExpandedContentHeight.set(height);
    }
  }, items);
  const effect = importAllResult.useEffect(() => () => {
    if (store.get() !== closure_9) {
      const result = store.set(closure_9);
    }
  }, items1);
  let obj = {};
  const items2 = [callback3().wrapper, ];
  obj = { paddingBottom: Math.max(importDefault(dependencyMap[18])().bottom, QUEST_DOCK_EXPANDED_PADDING_BOTTOM) };
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
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/quests/native/QuestDock/QuestDockEnrolledBody.tsx");

export default memoResult;
