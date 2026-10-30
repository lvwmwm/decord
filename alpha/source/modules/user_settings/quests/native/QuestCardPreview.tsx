// Module ID: 17076
// Function ID: 17077
// Name: QuestCardPreview
// Dependencies: [21, 14647, 6778, 17077, 1114, 16996, 575, 2]
// Exports: QuestCardPreview

// Module 17076 (QuestCardPreview)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import QuestTypes from "QuestTypes" /* 6778 */;
import QuestCard2 from "QuestCard" /* 16996 */;
import MobileQuestPreviewContainerDefault from "MobileQuestPreviewContainer" /* 17077 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestCardPreview.tsx");

export function QuestCardPreview(quest) {
  quest = quest.quest;
  const QuestContentImpressionTrackerNative = quest(14647).QuestContentImpressionTrackerNative;
  return <QuestContentImpressionTrackerNative questOrQuests={quest} questContent={quest(6778).QuestContent.INTERNAL_PREVIEW_TOOL} sourceQuestContent={quest(6778).QuestContent.INTERNAL_PREVIEW_TOOL} trackGuildAndChannelMetadata={false}>{function children() {
    MobileQuestPreviewContainerDefault;
    const intl = intl2.intl;
    ({ quest, containerPadding: nativeDefault.space.PX_16, sourceQuestContent: QuestTypes.QuestContent.INTERNAL_PREVIEW_TOOL });
    const QuestCard = QuestCard2.QuestCard;
    return <tmp title={intl.string(intl2.t.BDUDau)}>{null}</tmp>;
  }}</QuestContentImpressionTrackerNative>;
}
