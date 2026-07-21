// Module ID: 13925
// Function ID: 105843
// Dependencies: []

// Module 13925
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
let closure_6 = arg1(dependencyMap[2]).createStyles({ questName: { textAlign: "center" } });
const obj2 = arg1(dependencyMap[2]);
const memoResult = importAllResult.memo(function VideoQuestModalReward(withQuestName) {
  let onTextBlockLayout;
  let withRewardTileAnimation;
  withQuestName = withQuestName.withQuestName;
  let tmp = undefined === withQuestName;
  if (!tmp) {
    tmp = withQuestName;
  }
  const withRewardAvailableCopy = withQuestName.withRewardAvailableCopy;
  let tmp2 = undefined === withRewardAvailableCopy || withRewardAvailableCopy;
  const size = withQuestName.size;
  let str = "lg";
  if (undefined !== size) {
    str = size;
  }
  ({ withRewardTileAnimation, onTextBlockLayout } = withQuestName);
  let obj = arg1(dependencyMap[3]);
  const quest = obj.useVideoQuestModalContext().quest;
  const arg1 = quest;
  let obj1 = arg1(dependencyMap[4]);
  const items = [quest.id];
  const questTaskDetails = obj1.useQuestTaskDetails(quest);
  const callback = importAllResult.useCallback(() => {
    let obj = quest(closure_2[5]);
    obj = { questId: quest.id };
    const result = obj.openRewardDetailsBottomSheet(obj);
  }, items);
  obj = { hideTitle: null, initialRouteName: null, spacing: importDefault(dependencyMap[7]).space.PX_24, style: withQuestName.style };
  obj = { hasConfetti: true, quest, size: str, progress: questTaskDetails.percentComplete, onPress: callback, withAnimation: withRewardTileAnimation };
  const items1 = [callback(importDefault(dependencyMap[8]), obj), ];
  obj1 = { align: "center", spacing: importDefault(dependencyMap[7]).space.PX_4, onLayout: onTextBlockLayout };
  if (tmp) {
    const obj2 = { hasMaxConnections: "Array", isBoostOnlySubscription: "isInTreatment", style: tmp5.questName };
    const intl = arg1(dependencyMap[10]).intl;
    const obj3 = { questName: quest.config.messages.questName };
    obj2.children = intl.formatToPlainString(arg1(dependencyMap[10]).t.EAYZAr, obj3);
    tmp = callback(arg1(dependencyMap[9]).Text, obj2);
  }
  const items2 = [tmp, ];
  if (tmp2) {
    const obj4 = { hasMaxConnections: "<string:2740060162>", isBoostOnlySubscription: "<string:299071596>" };
    const intl2 = arg1(dependencyMap[10]).intl;
    obj4.children = intl2.string(arg1(dependencyMap[10]).t.1Wvve2);
    tmp2 = callback(arg1(dependencyMap[9]).Text, obj4);
  }
  items2[1] = tmp2;
  obj1.children = items2;
  items1[1] = closure_5(arg1(dependencyMap[6]).Stack, obj1);
  obj.children = items1;
  return closure_5(arg1(dependencyMap[6]).Stack, obj);
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalReward.tsx");

export default memoResult;
