// Module ID: 14701
// Function ID: 14702
// Name: QuestCardPreview
// Dependencies: [21, 10753, 5759, 14702, 1115, 14619, 576, 2]
// Exports: QuestCardPreview

// Module 14701 (QuestCardPreview)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import QuestTypes from "QuestTypes" /* 5759 */;
import QuestCard2 from "QuestCard" /* 14619 */;
import MobileQuestPreviewContainerDefault from "MobileQuestPreviewContainer" /* 14702 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestCardPreview.tsx");

export const QuestCardPreview = function QuestCardPreview(quest) {
  quest = quest.quest;
  const QuestContentImpressionTrackerNative = quest(10753).QuestContentImpressionTrackerNative;
  return <QuestContentImpressionTrackerNative questOrQuests={quest} questContent={quest(5759).QuestContent.INTERNAL_PREVIEW_TOOL} sourceQuestContent={quest(5759).QuestContent.INTERNAL_PREVIEW_TOOL} trackGuildAndChannelMetadata={false}>{function children() {
    MobileQuestPreviewContainerDefault;
    const intl = intl2.intl;
    ({ quest, containerPadding: nativeDefault.space.PX_16, sourceQuestContent: QuestTypes.QuestContent.INTERNAL_PREVIEW_TOOL });
    const QuestCard = QuestCard2.QuestCard;
    return <tmp title={intl.string(intl2.t.BDUDau)}>{null}</tmp>;
  }}</QuestContentImpressionTrackerNative>;
};
