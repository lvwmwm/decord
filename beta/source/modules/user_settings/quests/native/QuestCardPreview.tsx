// Module ID: 16565
// Function ID: 16566
// Name: QuestCardPreview
// Dependencies: [21, 13760, 6561, 16566, 1112, 16476, 575, 2]
// Exports: QuestCardPreview

// Module 16565 (QuestCardPreview)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1112 */;
import QuestTypes from "QuestTypes" /* 6561 */;
import QuestCard2 from "QuestCard" /* 16476 */;
import MobileQuestPreviewContainerDefault from "MobileQuestPreviewContainer" /* 16566 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestCardPreview.tsx");

export function QuestCardPreview(quest) {
  quest = quest.quest;
  const QuestContentImpressionTrackerNative = quest(13760).QuestContentImpressionTrackerNative;
  return <QuestContentImpressionTrackerNative questOrQuests={quest} questContent={quest(6561).QuestContent.INTERNAL_PREVIEW_TOOL} sourceQuestContent={quest(6561).QuestContent.INTERNAL_PREVIEW_TOOL} trackGuildAndChannelMetadata={false}>{function children() {
    MobileQuestPreviewContainerDefault;
    const intl = intl2.intl;
    ({ quest, containerPadding: nativeDefault.space.PX_16, sourceQuestContent: QuestTypes.QuestContent.INTERNAL_PREVIEW_TOOL });
    const QuestCard = QuestCard2.QuestCard;
    return <tmp title={intl.string(intl2.t.BDUDau)}>{null}</tmp>;
  }}</QuestContentImpressionTrackerNative>;
}
