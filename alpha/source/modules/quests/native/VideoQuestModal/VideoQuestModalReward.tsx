// Module ID: 17114
// Function ID: 17115
// Name: VideoQuestModalReward
// Dependencies: [19, 21, 5014, 17092, 9681, 9678, 6027, 575, 17097, 5624, 1113, 2]

// Module 17114 (VideoQuestModalReward)
import nativeDefault from "native" /* 575 */;
import QuestUtils from "QuestUtils" /* 9678 */;
import QuestProgressIndicatorDefault from "QuestProgressIndicator" /* 17097 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ questName: { textAlign: "center" } });
const memoResult = react.memo(function VideoQuestModalReward(withQuestName) {
  let intl;
  let intl2;
  let items1;
  let items2;
  let obj7;
  let onTextBlockLayout;
  let quest;
  let withRewardTileAnimation;
  withQuestName = withQuestName.withQuestName;
  let tmp = undefined === withQuestName;
  const style = withQuestName.style;
  if (!tmp) {
    tmp = withQuestName;
  }
  const withRewardAvailableCopy = withQuestName.withRewardAvailableCopy;
  let tmp9Result = undefined === withRewardAvailableCopy || withRewardAvailableCopy;
  size = withQuestName.size;
  let str = "lg";
  if (undefined !== size) {
    str = size;
  }
  ({ withRewardTileAnimation, onTextBlockLayout } = withQuestName);
  let obj = quest(17092);
  quest = obj.useVideoQuestModalContext().quest;
  let obj2 = quest(9681);
  const items = [quest.id];
  const questTaskDetails = obj2.useQuestTaskDetails(quest);
  const callback = react.useCallback(() => {
    const obj = QuestUtils;
    const obj2 = { questId: quest.id };
    const result = obj.openRewardDetailsBottomSheet(obj2);
  }, items);
  const obj3 = { justify: "center", align: "center", spacing: nativeDefault.space.PX_24, style, children: items1 };
  const tmp7 = closure_6();
  const Stack = quest(6027).Stack;
  items1 = [, ];
  const obj4 = { hasConfetti: true, quest, size: str, progress: questTaskDetails.percentComplete, onPress: callback, withAnimation: withRewardTileAnimation };
  items1[0] = closure_4(QuestProgressIndicatorDefault, obj4);
  const obj5 = { align: "center", spacing: nativeDefault.space.PX_4, onLayout: onTextBlockLayout, children: items2 };
  const Stack2 = quest(6027).Stack;
  if (tmp) {
    const obj6 = { variant: "heading-lg/semibold", color: "text-strong", style: tmp7.questName, children: intl.formatToPlainString(quest(1113).t.EAYZAr, obj7) };
    const Text = tmp3(5624).Text;
    intl = tmp3(1113).intl;
    obj7 = { questName: quest.config.messages.questName };
    tmp = tmp9(Text, obj6);
  }
  items2 = [tmp, ];
  if (tmp9Result) {
    const obj8 = { variant: "heading-sm/medium", color: "text-subtle", children: intl2.string(quest(1113).t["1Wvve2"]) };
    const Text2 = tmp3(5624).Text;
    intl2 = tmp3(1113).intl;
    tmp9Result = tmp9(Text2, obj8);
  }
  items2[1] = tmp9Result;
  items1[1] = closure_5(Stack2, obj5);
  return closure_5(Stack, obj3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalReward.tsx");

export default memoResult;
