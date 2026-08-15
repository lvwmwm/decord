// Module ID: 14508
// Function ID: 14509
// Name: useVideoQuestClickCtaAndMaybeCloseModal
// Dependencies: [19, 10687, 1487, 10496, 10689, 6719, 7480, 2]
// Exports: useVideoQuestClickCtaAndMaybeCloseModal

// Module 14508 (useVideoQuestClickCtaAndMaybeCloseModal)
import noop from "noop";

const require = arg1;
const result = require("isDiscordProxiedAssetUrl").fileFinishedImporting("modules/quests/native/VideoQuestModal/useVideoQuestClickCtaAndMaybeCloseModal.tsx");

export const useVideoQuestClickCtaAndMaybeCloseModal = function useVideoQuestClickCtaAndMaybeCloseModal(quest) {
  quest = quest.quest;
  const onClose = quest.onClose;
  const sourceQuestContent = quest.sourceQuestContent;
  let getQuestImpressionId;
  getQuestImpressionId = quest(sourceQuestContent[1]).useGetQuestImpressionId();
  const items = [quest, getQuestImpressionId, sourceQuestContent, onClose];
  return getQuestImpressionId.useCallback(() => {
    let obj = onClose(sourceQuestContent[2]);
    if (obj.isDiscordUrl(obj2.getCtaLink(quest.config), true)) {
      onClose();
    }
    obj2 = quest(sourceQuestContent[3]);
    const tmp3 = quest;
    obj = { content: tmp2(tmp[5]).QuestContent.VIDEO_MODAL_MOBILE, ctaContent: tmp2(tmp[6]).QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
    quest(sourceQuestContent[4]).openGameLinkDirectly(tmp3, obj);
  }, items);
};
