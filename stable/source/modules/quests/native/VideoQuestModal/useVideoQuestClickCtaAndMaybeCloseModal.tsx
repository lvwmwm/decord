// Module ID: 15236
// Function ID: 15237
// Name: useVideoQuestClickCtaAndMaybeCloseModal
// Dependencies: [19, 11623, 1365, 11432, 11633, 7830, 2]
// Exports: useVideoQuestClickCtaAndMaybeCloseModal

// Module 15236 (useVideoQuestClickCtaAndMaybeCloseModal)
import URLUtilsDefault from "URLUtils" /* 1365 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7830 */;
import QuestCopyUtils from "QuestCopyUtils" /* 11432 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 11633 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/useVideoQuestClickCtaAndMaybeCloseModal.tsx");

export const useVideoQuestClickCtaAndMaybeCloseModal = function useVideoQuestClickCtaAndMaybeCloseModal(quest) {
  quest = quest.quest;
  const onClose = quest.onClose;
  const sourceQuestContent = quest.sourceQuestContent;
  const getQuestImpressionId = quest(sourceQuestContent[1]).useGetQuestImpressionId();
  const items = [quest, getQuestImpressionId, sourceQuestContent, onClose];
  return getQuestImpressionId.useCallback((content) => {
    const obj = URLUtilsDefault;
    if (obj.isDiscordUrl(obj2.getCtaLink(quest.config), true)) {
      onClose();
    }
    obj2 = QuestCopyUtils;
    const tmp3 = quest;
    const tmp2Result = QuestPlatformUtils;
    tmp2Result.openGameLinkDirectly(tmp3, { content, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent });
  }, items);
};
