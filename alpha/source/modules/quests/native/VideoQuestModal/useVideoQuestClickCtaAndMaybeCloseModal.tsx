// Module ID: 16323
// Function ID: 16324
// Name: useVideoQuestClickCtaAndMaybeCloseModal
// Dependencies: [19, 1087, 558, 576, 9563, 5678, 9552, 9565, 7776, 2]

// Module 16323 (useVideoQuestClickCtaAndMaybeCloseModal)
import Constants from "Constants" /* 1087 */;
import parseURLDefault from "parseURL" /* 5678 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7776 */;
import QuestCopyUtils from "QuestCopyUtils" /* 9552 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9565 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const LinkingTypes = Constants.LinkingTypes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useVideoQuestClickCtaAndMaybeCloseModal(quest) {
  let sourceQuestContent;
  let obj = quest(sourceQuestContent[3]);
  const cResult = obj.c(5);
  quest = quest.quest;
  const onClose = quest.onClose;
  sourceQuestContent = quest.sourceQuestContent;
  let obj2 = quest(sourceQuestContent[4]);
  const getQuestImpressionId = obj2.useGetQuestImpressionId();
  if (cResult[0] === getQuestImpressionId) {
    if (cResult[1] === onClose) {
      if (cResult[2] === quest) {
        let tmp3;
        if (cResult[3] === sourceQuestContent) {
          tmp3 = cResult[4];
        }
        return tmp3;
      }
    }
  }
  const fn = function o(content) {
    const tmp2 = parseURLDefault;
    const obj = QuestCopyUtils;
    const tmp4 = quest;
    if (tmp2(obj.getCtaLink(quest.config)).payload.type !== LinkingTypes.NONE) {
      onClose();
    }
    const tmp3Result = QuestPlatformUtils;
    const obj2 = { content, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
    tmp3Result.openGameLinkDirectly(tmp4, obj2);
  };
  cResult[0] = getQuestImpressionId;
  cResult[1] = onClose;
  cResult[2] = quest;
  cResult[3] = sourceQuestContent;
  cResult[4] = fn;
  tmp3 = fn;
}) : (function useVideoQuestClickCtaAndMaybeCloseModal(quest) {
  quest = quest.quest;
  const onClose = quest.onClose;
  const sourceQuestContent = quest.sourceQuestContent;
  let obj = quest(sourceQuestContent[4]);
  const getQuestImpressionId = obj.useGetQuestImpressionId();
  const items = [quest, getQuestImpressionId, sourceQuestContent, onClose];
  return getQuestImpressionId.useCallback((content) => {
    const tmp2 = parseURLDefault;
    const obj = QuestCopyUtils;
    const tmp4 = quest;
    if (tmp2(obj.getCtaLink(quest.config)).payload.type !== LinkingTypes.NONE) {
      onClose();
    }
    const tmp3Result = QuestPlatformUtils;
    const obj2 = { content, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
    tmp3Result.openGameLinkDirectly(tmp4, obj2);
  }, items);
});
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/useVideoQuestClickCtaAndMaybeCloseModal.tsx");

export const useVideoQuestClickCtaAndMaybeCloseModal = tmp2;
