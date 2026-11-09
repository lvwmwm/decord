// Module ID: 17469
// Function ID: 17470
// Name: QuestCardPreview
// Dependencies: [21, 14935, 6839, 17470, 1113, 17387, 575, 2]
// Exports: QuestCardPreview

// Module 17469 (QuestCardPreview)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import QuestTypes from "QuestTypes" /* 6839 */;
import QuestCard2 from "QuestCard" /* 17387 */;
import MobileQuestPreviewContainerDefault from "MobileQuestPreviewContainer" /* 17470 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestCardPreview.tsx");

export function QuestCardPreview(quest) {
  quest = quest.quest;
  const QuestContentImpressionTrackerNative = quest(14935).QuestContentImpressionTrackerNative;
  return <QuestContentImpressionTrackerNative questOrQuests={quest} questContent={quest(6839).QuestContent.INTERNAL_PREVIEW_TOOL} sourceQuestContent={quest(6839).QuestContent.INTERNAL_PREVIEW_TOOL} trackGuildAndChannelMetadata={false}>{function children() {
    MobileQuestPreviewContainerDefault;
    const intl = intl2.intl;
    ({ quest, containerPadding: nativeDefault.space.PX_16, sourceQuestContent: QuestTypes.QuestContent.INTERNAL_PREVIEW_TOOL });
    const QuestCard = QuestCard2.QuestCard;
    return <tmp title={intl.string(intl2.t.BDUDau)}>{null}</tmp>;
  }}</QuestContentImpressionTrackerNative>;
}
