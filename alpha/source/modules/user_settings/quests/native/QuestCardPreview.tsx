// Module ID: 15508
// Function ID: 15509
// Name: QuestCardPreview
// Dependencies: [21, 12119, 5752, 15509, 1115, 15426, 576, 2]
// Exports: QuestCardPreview

// Module 15508 (QuestCardPreview)
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import QuestTypes from "QuestTypes" /* 5752 */;
import QuestCard from "QuestCard" /* 15426 */;
import MobileQuestPreviewContainerDefault from "MobileQuestPreviewContainer" /* 15509 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestCardPreview.tsx");

export const QuestCardPreview = function QuestCardPreview(quest) {
  quest = quest.quest;
  return jsx(quest(12119).QuestContentImpressionTrackerNative, {
    questOrQuests: quest,
    questContent: quest(5752).QuestContent.INTERNAL_PREVIEW_TOOL,
    sourceQuestContent: quest(5752).QuestContent.INTERNAL_PREVIEW_TOOL,
    trackGuildAndChannelMetadata: false,
    children() {
      const obj = { title: null, children: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.BDUDau);
      obj.children = jsx(QuestCard.QuestCard, { quest, containerPadding: nativeDefault.space.PX_16, sourceQuestContent: QuestTypes.QuestContent.INTERNAL_PREVIEW_TOOL });
      return <tmp title={null}>{null}</tmp>;
    }
  });
};
