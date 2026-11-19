// Module ID: 16611
// Function ID: 16612
// Name: QuestCardPreview
// Dependencies: [21, 13666, 6440, 16612, 1113, 16523, 575, 2]
// Exports: QuestCardPreview

// Module 16611 (QuestCardPreview)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import QuestTypes from "QuestTypes" /* 6440 */;
import QuestCard2 from "QuestCard" /* 16523 */;
import MobileQuestPreviewContainerDefault from "MobileQuestPreviewContainer" /* 16612 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestCardPreview.tsx");

export function QuestCardPreview(quest) {
  quest = quest.quest;
  const QuestContentImpressionTrackerNative = quest(13666).QuestContentImpressionTrackerNative;
  return <QuestContentImpressionTrackerNative questOrQuests={quest} questContent={quest(6440).QuestContent.INTERNAL_PREVIEW_TOOL} sourceQuestContent={quest(6440).QuestContent.INTERNAL_PREVIEW_TOOL} trackGuildAndChannelMetadata={false}>{function children() {
    MobileQuestPreviewContainerDefault;
    const intl = intl2.intl;
    ({ quest, containerPadding: nativeDefault.space.PX_16, sourceQuestContent: QuestTypes.QuestContent.INTERNAL_PREVIEW_TOOL });
    const QuestCard = QuestCard2.QuestCard;
    return <tmp title={intl.string(intl2.t.BDUDau)}>{null}</tmp>;
  }}</QuestContentImpressionTrackerNative>;
}
