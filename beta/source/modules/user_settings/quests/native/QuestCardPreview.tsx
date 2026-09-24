// Module ID: 15438
// Function ID: 15439
// Name: QuestCardPreview
// Dependencies: [21, 558, 568, 15439, 1119, 15356, 580, 5698, 11942, 2]

// Module 15438 (QuestCardPreview)
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import QuestTypes from "QuestTypes" /* 5698 */;
import QuestCard from "QuestCard" /* 15356 */;
import MobileQuestPreviewContainerDefault from "MobileQuestPreviewContainer" /* 15439 */;
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
  const tmp6 = jsx(quest(11942).QuestContentImpressionTrackerNative, { questOrQuests: quest, questContent: quest(5698).QuestContent.INTERNAL_PREVIEW_TOOL, sourceQuestContent: quest(5698).QuestContent.INTERNAL_PREVIEW_TOOL, trackGuildAndChannelMetadata: false, children: tmp4 });
  cResult[2] = quest;
  cResult[3] = tmp4;
  cResult[4] = tmp6;
  tmp5 = tmp6;
}) : ((quest) => {
  quest = quest.quest;
  return jsx(quest(11942).QuestContentImpressionTrackerNative, {
    questOrQuests: quest,
    questContent: quest(5698).QuestContent.INTERNAL_PREVIEW_TOOL,
    sourceQuestContent: quest(5698).QuestContent.INTERNAL_PREVIEW_TOOL,
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
