// Module ID: 15230
// Function ID: 15231
// Name: VideoQuestModalReward
// Dependencies: [19, 21, 4636, 15207, 11620, 11900, 5054, 576, 15212, 4632, 1114, 2]

// Module 15230 (VideoQuestModalReward)
import nativeDefault from "native" /* 576 */;
import QuestUtils from "QuestUtils" /* 11900 */;
import QuestProgressIndicatorDefault from "QuestProgressIndicator" /* 15212 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4636);
let closure_6 = createStyles.createStyles({ questName: { textAlign: "center" } });
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalReward.tsx");

export default noop.memo(function VideoQuestModalReward(style) {
  const withQuestName = style.withQuestName;
  let tmp = undefined === withQuestName;
  if (!tmp) {
    tmp = withQuestName;
  }
  const withRewardAvailableCopy = style.withRewardAvailableCopy;
  let tmp9Result = undefined === withRewardAvailableCopy || withRewardAvailableCopy;
  const size = style.size;
  let str = "lg";
  if (undefined !== size) {
    str = size;
  }
  ({ withRewardTileAnimation, onTextBlockLayout } = style);
  quest = quest(15207).useVideoQuestModalContext().quest;
  const obj = quest(15207);
  const items = [quest.id];
  const questTaskDetails = quest(11620).useQuestTaskDetails(quest);
  const callback = noop.useCallback(() => {
    const result = QuestUtils.openRewardDetailsBottomSheet({ questId: quest.id });
  }, items);
  const obj2 = quest(11620);
  const obj3 = { justify: "center", align: "center", spacing: nativeDefault.space.PX_24, style: style.style, children: null };
  const items1 = [closure_4(QuestProgressIndicatorDefault, { hasConfetti: true, quest, size: str, progress: questTaskDetails.percentComplete, onPress: callback, withAnimation: withRewardTileAnimation }), ];
  const obj5 = { align: "center", spacing: nativeDefault.space.PX_4, onLayout: onTextBlockLayout, children: null };
  if (tmp) {
    const obj6 = { variant: "heading-lg/semibold", color: "text-strong", style: tmp7.questName, children: null };
    const intl = tmp3(1114).intl;
    const obj7 = { questName: quest.config.messages.questName };
    obj6.children = intl.formatToPlainString(tmp3(1114).t.EAYZAr, obj7);
    tmp = tmp9(tmp3(4632).Text, obj6);
  }
  const items2 = [tmp, ];
  if (tmp9Result) {
    const obj8 = { variant: "heading-sm/medium", color: "text-subtle", children: null };
    const intl2 = tmp3(1114).intl;
    obj8.children = intl2.string(tmp3(1114).t["1Wvve2"]);
    tmp9Result = tmp9(tmp3(4632).Text, obj8);
  }
  items2[1] = tmp9Result;
  obj5.children = items2;
  items1[1] = closure_5(quest(5054).Stack, obj5);
  obj3.children = items1;
  return closure_5(quest(5054).Stack, obj3);
});
