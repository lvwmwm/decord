// Module ID: 15428
// Function ID: 15429
// Name: QuestCardPreview
// Dependencies: [21, 558, 568, 15429, 1119, 15346, 580, 5666, 11906, 2]

// Module 15428 (QuestCardPreview)
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import QuestTypes from "QuestTypes" /* 5666 */;
import QuestCard from "QuestCard" /* 15346 */;
import MobileQuestPreviewContainerDefault from "MobileQuestPreviewContainer" /* 15429 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestCardPreview.tsx");

export const QuestCardPreview = ReactCompilerGating.isReactCompilerEnabled() ? ((quest) => {
  const cResult = quest(568).c(5);
  quest = quest.quest;
  if (cResult[0] !== quest) {
    const fn = function s() {
      const obj = { title: null, children: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.BDUDau);
      obj.children = jsx(QuestCard.QuestCard, { quest, containerPadding: nativeDefault.space.PX_16, sourceQuestContent: QuestTypes.QuestContent.INTERNAL_PREVIEW_TOOL });
      return <tmp title={null}>{null}</tmp>;
    };
    cResult[0] = quest;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === quest) {
    if (cResult[3] === tmp4) {
      let tmp5 = cResult[4];
    }
    return tmp5;
  }
  let obj = quest(568);
  const tmp6 = jsx(quest(11906).QuestContentImpressionTrackerNative, { questOrQuests: quest, questContent: quest(5666).QuestContent.INTERNAL_PREVIEW_TOOL, sourceQuestContent: quest(5666).QuestContent.INTERNAL_PREVIEW_TOOL, trackGuildAndChannelMetadata: false, children: tmp4 });
  cResult[2] = quest;
  cResult[3] = tmp4;
  cResult[4] = tmp6;
  tmp5 = tmp6;
}) : ((quest) => {
  quest = quest.quest;
  return jsx(quest(11906).QuestContentImpressionTrackerNative, {
    questOrQuests: quest,
    questContent: quest(5666).QuestContent.INTERNAL_PREVIEW_TOOL,
    sourceQuestContent: quest(5666).QuestContent.INTERNAL_PREVIEW_TOOL,
    trackGuildAndChannelMetadata: false,
    children() {
      const obj = { title: null, children: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.BDUDau);
      obj.children = jsx(QuestCard.QuestCard, { quest, containerPadding: nativeDefault.space.PX_16, sourceQuestContent: QuestTypes.QuestContent.INTERNAL_PREVIEW_TOOL });
      return <tmp title={null}>{null}</tmp>;
    }
  });
});
