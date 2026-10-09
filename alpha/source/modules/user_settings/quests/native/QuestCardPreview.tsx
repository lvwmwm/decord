// Module ID: 15364
// Function ID: 15365
// Name: QuestCardPreview
// Dependencies: [21, 558, 576, 15365, 1126, 15280, 587, 5982, 12933, 2]

// Module 15364 (QuestCardPreview)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import QuestTypes from "QuestTypes" /* 5982 */;
import QuestCard2 from "QuestCard" /* 15280 */;
import MobileQuestPreviewContainerDefault from "MobileQuestPreviewContainer" /* 15365 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestCardPreview(quest) {
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
  const QuestContentImpressionTrackerNative = tmp(12933).QuestContentImpressionTrackerNative;
  const tmp6 = <QuestContentImpressionTrackerNative questOrQuests={quest} questContent={tmp(5982).QuestContent.INTERNAL_PREVIEW_TOOL} sourceQuestContent={tmp(5982).QuestContent.INTERNAL_PREVIEW_TOOL} trackGuildAndChannelMetadata={false}>{tmp4}</QuestContentImpressionTrackerNative>;
  cResult[2] = quest;
  cResult[3] = tmp4;
  cResult[4] = tmp6;
  tmp5 = tmp6;
}) : (function QuestCardPreview(quest) {
  quest = quest.quest;
  const QuestContentImpressionTrackerNative = quest(12933).QuestContentImpressionTrackerNative;
  return <QuestContentImpressionTrackerNative questOrQuests={quest} questContent={quest(5982).QuestContent.INTERNAL_PREVIEW_TOOL} sourceQuestContent={quest(5982).QuestContent.INTERNAL_PREVIEW_TOOL} trackGuildAndChannelMetadata={false}>{function children() {
    MobileQuestPreviewContainerDefault;
    const intl = intl2.intl;
    ({ quest, containerPadding: nativeDefault.space.PX_16, sourceQuestContent: QuestTypes.QuestContent.INTERNAL_PREVIEW_TOOL });
    const QuestCard = QuestCard2.QuestCard;
    return <tmp title={intl.string(intl2.t.BDUDau)}>{null}</tmp>;
  }}</QuestContentImpressionTrackerNative>;
});
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestCardPreview.tsx");

export const QuestCardPreview = tmp2;
