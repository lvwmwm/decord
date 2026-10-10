// Module ID: 15411
// Function ID: 15412
// Name: useVideoQuestClickCtaAndMaybeCloseModal
// Dependencies: [19, 558, 576, 9201, 1384, 9192, 9203, 7415, 2]

// Module 15411 (useVideoQuestClickCtaAndMaybeCloseModal)
import URLUtilsDefault from "URLUtils" /* 1384 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7415 */;
import QuestCopyUtils from "QuestCopyUtils" /* 9192 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9203 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useVideoQuestClickCtaAndMaybeCloseModal(quest) {
  let sourceQuestContent;
  let obj = quest(sourceQuestContent[2]);
  const cResult = obj.c(5);
  quest = quest.quest;
  const onClose = quest.onClose;
  sourceQuestContent = quest.sourceQuestContent;
  let obj2 = quest(sourceQuestContent[3]);
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
  const fn = function s(content) {
    const isDiscordUrl = URLUtilsDefault.isDiscordUrl;
    URLUtilsDefault;
    const obj = QuestCopyUtils;
    const tmp4 = quest;
    if (isDiscordUrl(obj.getCtaLink(quest.config), true)) {
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
  let obj = quest(sourceQuestContent[3]);
  const getQuestImpressionId = obj.useGetQuestImpressionId();
  const items = [quest, getQuestImpressionId, sourceQuestContent, onClose];
  return getQuestImpressionId.useCallback((content) => {
    const isDiscordUrl = URLUtilsDefault.isDiscordUrl;
    URLUtilsDefault;
    const obj = QuestCopyUtils;
    const tmp4 = quest;
    if (isDiscordUrl(obj.getCtaLink(quest.config), true)) {
      onClose();
    }
    const tmp3Result = QuestPlatformUtils;
    const obj2 = { content, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
    tmp3Result.openGameLinkDirectly(tmp4, obj2);
  }, items);
});
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/useVideoQuestClickCtaAndMaybeCloseModal.tsx");

export const useVideoQuestClickCtaAndMaybeCloseModal = tmp2;
