// Module ID: 14052
// Function ID: 108079
// Name: useVideoQuestClickCtaAndMaybeCloseModal
// Dependencies: [31, 10468, 1443, 9468, 10472, 4979, 6969, 2]
// Exports: useVideoQuestClickCtaAndMaybeCloseModal

// Module 14052 (useVideoQuestClickCtaAndMaybeCloseModal)
import result from "result";

const require = arg1;
const result = require("isOriginalContentTypeDifferent").fileFinishedImporting("modules/quests/native/VideoQuestModal/useVideoQuestClickCtaAndMaybeCloseModal.tsx");

export const useVideoQuestClickCtaAndMaybeCloseModal = function useVideoQuestClickCtaAndMaybeCloseModal(quest) {
  quest = quest.quest;
  const onClose = quest.onClose;
  const sourceQuestContent = quest.sourceQuestContent;
  const getQuestImpressionId = quest(sourceQuestContent[1]).useGetQuestImpressionId();
  const items = [quest, getQuestImpressionId, sourceQuestContent, onClose];
  return getQuestImpressionId.useCallback(() => {
    let obj = onClose(sourceQuestContent[2]);
    if (obj.isDiscordUrl(obj2.getCtaLink(quest.config), true)) {
      onClose();
    }
    obj2 = quest(sourceQuestContent[3]);
    obj = { content: quest(sourceQuestContent[5]).QuestContent.VIDEO_MODAL_MOBILE, ctaContent: quest(sourceQuestContent[6]).QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
    quest(sourceQuestContent[4]).openGameLinkDirectly(quest, obj);
  }, items);
};
