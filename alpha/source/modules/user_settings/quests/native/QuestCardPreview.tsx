// Module ID: 16770
// Function ID: 16771
// Name: QuestCardPreview
// Dependencies: [21, 13849, 6874, 16771, 1112, 16680, 575, 2]
// Exports: QuestCardPreview

// Module 16770 (QuestCardPreview)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1112 */;
import QuestTypes from "QuestTypes" /* 6874 */;
import QuestCard2 from "QuestCard" /* 16680 */;
import MobileQuestPreviewContainerDefault from "MobileQuestPreviewContainer" /* 16771 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestCardPreview.tsx");

export function QuestCardPreview(quest) {
  quest = quest.quest;
  const QuestContentImpressionTrackerNative = quest(13849).QuestContentImpressionTrackerNative;
  return <QuestContentImpressionTrackerNative questOrQuests={quest} questContent={quest(6874).QuestContent.INTERNAL_PREVIEW_TOOL} sourceQuestContent={quest(6874).QuestContent.INTERNAL_PREVIEW_TOOL} trackGuildAndChannelMetadata={false}>{function children() {
    MobileQuestPreviewContainerDefault;
    const intl = intl2.intl;
    ({ quest, containerPadding: nativeDefault.space.PX_16, sourceQuestContent: QuestTypes.QuestContent.INTERNAL_PREVIEW_TOOL });
    const QuestCard = QuestCard2.QuestCard;
    return <tmp title={intl.string(intl2.t.BDUDau)}>{null}</tmp>;
  }}</QuestContentImpressionTrackerNative>;
}
