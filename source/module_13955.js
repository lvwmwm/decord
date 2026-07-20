// Module ID: 13955
// Function ID: 106096
// Dependencies: []

// Module 13955
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
let closure_8 = arg1(dependencyMap[4]).createStyles({ wrapper: { statusInput: true, listContainer: true, [object WeakMap]: true, dotElement: true, eswIfi: true, isEmbeddedApp: true, outboundStats: true, IOS_AGE_GATE_MODAL: true }, progressIndicatorWrapper: { backgroundColor: false, height: true }, copy: { backgroundColor: "innocent", height: "innocent" } });
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function QuestDockEnrolledHeader() {
  const quest = importAllResult.useContext(importDefault(dependencyMap[5])).quest;
  const tmp = callback4();
  let obj = arg1(dependencyMap[6]);
  const questTaskDetails = obj.useQuestTaskDetails(quest);
  let obj1 = arg1(dependencyMap[6]);
  let obj2 = arg1(dependencyMap[7]);
  const questBarTitle = obj2.useQuestBarTitle(quest);
  let obj3 = arg1(dependencyMap[7]);
  obj = { quest, isExpanded: false, activeScreen: callback(obj1.useTaskPlatformScreen(quest, questTaskDetails), 1)[0], sourceQuestContent: arg1(dependencyMap[8]).QuestContent.QUEST_BAR_MOBILE };
  obj = { style: tmp.wrapper };
  obj1 = { style: tmp.progressIndicatorWrapper };
  const questBarSubtitle = obj3.useQuestBarSubtitle(obj);
  obj2 = { videoQualityMeasurement: "Array", GUILD_DIRECTORY_PROGRESS_BAR_HEIGHT: "key", onFeedbackCompleted: "Text", onStartReachedThreshold: "body", originalBuffer: "description", quest, progress: questTaskDetails.percentComplete };
  obj1.children = callback2(importDefault(dependencyMap[9]), obj2);
  const items = [callback2(View, obj1), ];
  obj3 = { style: tmp.copy };
  const obj4 = { INTEGRATION_CREATE: null, ConstraintReasonCode: null, children: questBarTitle };
  const items1 = [callback2(arg1(dependencyMap[10]).Text, obj4), ];
  const obj5 = { INTEGRATION_CREATE: "<string:3305963521>", ConstraintReasonCode: "<string:671547393>", children: questBarSubtitle };
  items1[1] = callback2(arg1(dependencyMap[10]).Text, obj5);
  obj3.children = items1;
  items[1] = callback3(View, obj3);
  obj.children = items;
  return callback3(View, obj);
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/quests/native/QuestDock/QuestDockEnrolledHeader.tsx");

export default memoResult;
