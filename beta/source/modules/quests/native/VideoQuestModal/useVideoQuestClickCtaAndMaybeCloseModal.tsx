// Module ID: 14686
// Function ID: 14687
// Name: useVideoQuestClickCtaAndMaybeCloseModal
// Dependencies: [19, 10711, 1366, 10699, 10719, 7141, 2]
// Exports: useVideoQuestClickCtaAndMaybeCloseModal

// Module 14686 (useVideoQuestClickCtaAndMaybeCloseModal)
import URLUtilsDefault from "URLUtils" /* 1366 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7141 */;
import QuestCopyUtils from "QuestCopyUtils" /* 10699 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 10719 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/useVideoQuestClickCtaAndMaybeCloseModal.tsx");

export const useVideoQuestClickCtaAndMaybeCloseModal = function useVideoQuestClickCtaAndMaybeCloseModal(quest) {
  quest = quest.quest;
  const onClose = quest.onClose;
  const sourceQuestContent = quest.sourceQuestContent;
  let obj = quest(sourceQuestContent[1]);
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
};
