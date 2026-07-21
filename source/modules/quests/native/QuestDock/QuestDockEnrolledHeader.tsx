// Module ID: 13962
// Function ID: 106119
// Dependencies: []

// Module 13962
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
let closure_8 = arg1(dependencyMap[4]).createStyles({ wrapper: { 0: null, 0: null, 9223372036854775807: null, 0: null, -9223372036854775808: null, -27654118: null, 9223372036854775807: null, 0: null }, progressIndicatorWrapper: { marginRight: -536870861, columnGap: -299892737 }, copy: {} });
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
  obj2 = { quest, progress: questTaskDetails.percentComplete };
  obj1.children = callback2(importDefault(dependencyMap[9]), obj2);
  const items = [callback2(View, obj1), ];
  obj3 = { style: tmp.copy };
  const items1 = [callback2(arg1(dependencyMap[10]).Text, { children: questBarTitle }), callback2(arg1(dependencyMap[10]).Text, { children: questBarSubtitle })];
  obj3.children = items1;
  items[1] = callback3(View, obj3);
  obj.children = items;
  return callback3(View, obj);
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/quests/native/QuestDock/QuestDockEnrolledHeader.tsx");

export default memoResult;
