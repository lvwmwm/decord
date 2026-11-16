// Module ID: 17503
// Function ID: 17504
// Name: QuestCardPreview
// Dependencies: [21, 14964, 6872, 17504, 1113, 17421, 575, 2]
// Exports: QuestCardPreview

// Module 17503 (QuestCardPreview)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import QuestTypes from "QuestTypes" /* 6872 */;
import QuestCard2 from "QuestCard" /* 17421 */;
import MobileQuestPreviewContainerDefault from "MobileQuestPreviewContainer" /* 17504 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestCardPreview.tsx");

export function QuestCardPreview(quest) {
  quest = quest.quest;
  const QuestContentImpressionTrackerNative = quest(14964).QuestContentImpressionTrackerNative;
  return <QuestContentImpressionTrackerNative questOrQuests={quest} questContent={quest(6872).QuestContent.INTERNAL_PREVIEW_TOOL} sourceQuestContent={quest(6872).QuestContent.INTERNAL_PREVIEW_TOOL} trackGuildAndChannelMetadata={false}>{function children() {
    MobileQuestPreviewContainerDefault;
    const intl = intl2.intl;
    ({ quest, containerPadding: nativeDefault.space.PX_16, sourceQuestContent: QuestTypes.QuestContent.INTERNAL_PREVIEW_TOOL });
    const QuestCard = QuestCard2.QuestCard;
    return <tmp title={intl.string(intl2.t.BDUDau)}>{null}</tmp>;
  }}</QuestContentImpressionTrackerNative>;
}
