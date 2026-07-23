// Module ID: 14046
// Function ID: 108039
// Dependencies: [31, 33, 4130, 14022, 10464, 10919, 4541, 689, 14027, 4126, 1212, 2]

// Module 14046
import importAllResult from "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ questName: { textAlign: "center" } });
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
  let obj = quest(14022);
  quest = obj.useVideoQuestModalContext().quest;
  let obj1 = quest(10464);
  const items = [quest.id];
  const questTaskDetails = obj1.useQuestTaskDetails(quest);
  const callback = importAllResult.useCallback(() => {
    let obj = quest(outer1_2[5]);
    obj = { questId: quest.id };
    const result = obj.openRewardDetailsBottomSheet(obj);
  }, items);
  obj = { justify: "center", align: "center", spacing: importDefault(689).space.PX_24, style: withQuestName.style };
  obj = { hasConfetti: true, quest, size: str, progress: questTaskDetails.percentComplete, onPress: callback, withAnimation: withRewardTileAnimation };
  const items1 = [callback(importDefault(14027), obj), ];
  obj1 = { align: "center", spacing: importDefault(689).space.PX_4, onLayout: onTextBlockLayout };
  if (tmp) {
    const obj2 = { variant: "heading-lg/semibold", color: "text-strong", style: tmp5.questName };
    const intl = quest(1212).intl;
    const obj3 = { questName: quest.config.messages.questName };
    obj2.children = intl.formatToPlainString(quest(1212).t.EAYZAr, obj3);
    tmp = callback(quest(4126).Text, obj2);
  }
  const items2 = [tmp, ];
  if (tmp2) {
    const obj4 = { variant: "heading-sm/medium", color: "text-subtle" };
    const intl2 = quest(1212).intl;
    obj4.children = intl2.string(quest(1212).t["1Wvve2"]);
    tmp2 = callback(quest(4126).Text, obj4);
  }
  items2[1] = tmp2;
  obj1.children = items2;
  items1[1] = closure_5(quest(4541).Stack, obj1);
  obj.children = items1;
  return closure_5(quest(4541).Stack, obj);
});
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalReward.tsx");

export default memoResult;
