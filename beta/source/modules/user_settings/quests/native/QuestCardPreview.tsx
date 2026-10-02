// Module ID: 14689
// Function ID: 14690
// Name: QuestCardPreview
// Dependencies: [21, 558, 576, 14690, 1127, 14607, 588, 5760, 10717, 2]

// Module 14689 (QuestCardPreview)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 588 */;
import intl2 from "intl" /* 1127 */;
import QuestTypes from "QuestTypes" /* 5760 */;
import QuestCard2 from "QuestCard" /* 14607 */;
import MobileQuestPreviewContainerDefault from "MobileQuestPreviewContainer" /* 14690 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let quest;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((quest) => {
  let tmp4;
  const tmp = quest;
  const obj = quest(576);
  const cResult = obj.c(5);
  quest = quest.quest;
  if (cResult[0] !== quest) {
    const fn = function s() {
      MobileQuestPreviewContainerDefault;
      const intl = intl2.intl;
      ({ quest, containerPadding: nativeDefault.space.PX_16, sourceQuestContent: QuestTypes.QuestContent.INTERNAL_PREVIEW_TOOL });
      const QuestCard = QuestCard2.QuestCard;
      return <tmp title={intl.string(intl2.t.BDUDau)}>{null}</tmp>;
    };
    cResult[0] = quest;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === quest) {
    let tmp5;
    if (cResult[3] === tmp4) {
      tmp5 = cResult[4];
    }
    return tmp5;
  }
  const QuestContentImpressionTrackerNative = tmp(10717).QuestContentImpressionTrackerNative;
  const tmp6 = <QuestContentImpressionTrackerNative questOrQuests={quest} questContent={tmp(5760).QuestContent.INTERNAL_PREVIEW_TOOL} sourceQuestContent={tmp(5760).QuestContent.INTERNAL_PREVIEW_TOOL} trackGuildAndChannelMetadata={false}>{tmp4}</QuestContentImpressionTrackerNative>;
  cResult[2] = quest;
  cResult[3] = tmp4;
  cResult[4] = tmp6;
  tmp5 = tmp6;
}) : ((quest) => {
  quest = quest.quest;
  const QuestContentImpressionTrackerNative = quest(10717).QuestContentImpressionTrackerNative;
  return <QuestContentImpressionTrackerNative questOrQuests={quest} questContent={quest(5760).QuestContent.INTERNAL_PREVIEW_TOOL} sourceQuestContent={quest(5760).QuestContent.INTERNAL_PREVIEW_TOOL} trackGuildAndChannelMetadata={false}>{function children() {
    MobileQuestPreviewContainerDefault;
    const intl = intl2.intl;
    ({ quest, containerPadding: nativeDefault.space.PX_16, sourceQuestContent: QuestTypes.QuestContent.INTERNAL_PREVIEW_TOOL });
    const QuestCard = QuestCard2.QuestCard;
    return <tmp title={intl.string(intl2.t.BDUDau)}>{null}</tmp>;
  }}</QuestContentImpressionTrackerNative>;
});
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestCardPreview.tsx");

export const QuestCardPreview = tmp2;
