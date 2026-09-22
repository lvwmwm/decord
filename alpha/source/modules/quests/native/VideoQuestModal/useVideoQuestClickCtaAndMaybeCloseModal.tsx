// Module ID: 15430
// Function ID: 15431
// Name: useVideoQuestClickCtaAndMaybeCloseModal
// Dependencies: [19, 11745, 1366, 11562, 11755, 7967, 2]
// Exports: useVideoQuestClickCtaAndMaybeCloseModal

// Module 15430 (useVideoQuestClickCtaAndMaybeCloseModal)
import URLUtilsDefault from "URLUtils" /* 1366 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7967 */;
import QuestCopyUtils from "QuestCopyUtils" /* 11562 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 11755 */;
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
