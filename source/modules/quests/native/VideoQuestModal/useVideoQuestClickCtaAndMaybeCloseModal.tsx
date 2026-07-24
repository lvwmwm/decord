// Module ID: 14102
// Function ID: 108402
// Name: useVideoQuestClickCtaAndMaybeCloseModal
// Dependencies: [31, 10497, 1443, 9504, 10501, 4979, 6968, 2]
// Exports: useVideoQuestClickCtaAndMaybeCloseModal

// Module 14102 (useVideoQuestClickCtaAndMaybeCloseModal)
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
