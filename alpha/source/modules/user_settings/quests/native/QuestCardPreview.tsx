// Module ID: 17394
// Function ID: 17395
// Name: QuestCardPreview
// Dependencies: [21, 14911, 6919, 17395, 1113, 17314, 575, 2]
// Exports: QuestCardPreview

// Module 17394 (QuestCardPreview)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import QuestTypes from "QuestTypes" /* 6919 */;
import QuestCard2 from "QuestCard" /* 17314 */;
import MobileQuestPreviewContainerDefault from "MobileQuestPreviewContainer" /* 17395 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestCardPreview.tsx");

export function QuestCardPreview(quest) {
  quest = quest.quest;
  const QuestContentImpressionTrackerNative = quest(14911).QuestContentImpressionTrackerNative;
  return <QuestContentImpressionTrackerNative questOrQuests={quest} questContent={quest(6919).QuestContent.INTERNAL_PREVIEW_TOOL} sourceQuestContent={quest(6919).QuestContent.INTERNAL_PREVIEW_TOOL} trackGuildAndChannelMetadata={false}>{function children() {
    MobileQuestPreviewContainerDefault;
    const intl = intl2.intl;
    ({ quest, containerPadding: nativeDefault.space.PX_16, sourceQuestContent: QuestTypes.QuestContent.INTERNAL_PREVIEW_TOOL });
    const QuestCard = QuestCard2.QuestCard;
    return <tmp title={intl.string(intl2.t.BDUDau)}>{null}</tmp>;
  }}</QuestContentImpressionTrackerNative>;
}
