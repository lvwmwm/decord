// Module ID: 16557
// Function ID: 16558
// Name: QuestCardPreview
// Dependencies: [21, 13757, 6561, 16558, 1112, 16468, 575, 2]
// Exports: QuestCardPreview

// Module 16557 (QuestCardPreview)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1112 */;
import QuestTypes from "QuestTypes" /* 6561 */;
import QuestCard2 from "QuestCard" /* 16468 */;
import MobileQuestPreviewContainerDefault from "MobileQuestPreviewContainer" /* 16558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestCardPreview.tsx");

export function QuestCardPreview(quest) {
  quest = quest.quest;
  const QuestContentImpressionTrackerNative = quest(13757).QuestContentImpressionTrackerNative;
  return <QuestContentImpressionTrackerNative questOrQuests={quest} questContent={quest(6561).QuestContent.INTERNAL_PREVIEW_TOOL} sourceQuestContent={quest(6561).QuestContent.INTERNAL_PREVIEW_TOOL} trackGuildAndChannelMetadata={false}>{function children() {
    MobileQuestPreviewContainerDefault;
    const intl = intl2.intl;
    ({ quest, containerPadding: nativeDefault.space.PX_16, sourceQuestContent: QuestTypes.QuestContent.INTERNAL_PREVIEW_TOOL });
    const QuestCard = QuestCard2.QuestCard;
    return <tmp title={intl.string(intl2.t.BDUDau)}>{null}</tmp>;
  }}</QuestContentImpressionTrackerNative>;
}
