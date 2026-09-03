// Module ID: 14997
// Function ID: 14998
// Name: useVideoQuestClickCtaAndMaybeCloseModal
// Dependencies: [19, 11310, 1485, 11156, 11320, 7484, 2]
// Exports: useVideoQuestClickCtaAndMaybeCloseModal

// Module 14997 (useVideoQuestClickCtaAndMaybeCloseModal)
import closure_3 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/quests/native/VideoQuestModal/useVideoQuestClickCtaAndMaybeCloseModal.tsx");

export const useVideoQuestClickCtaAndMaybeCloseModal = function useVideoQuestClickCtaAndMaybeCloseModal(quest) {
  quest = quest.quest;
  const onClose = quest.onClose;
  const sourceQuestContent = quest.sourceQuestContent;
  let getQuestImpressionId;
  getQuestImpressionId = quest(sourceQuestContent[1]).useGetQuestImpressionId();
  const items = [quest, getQuestImpressionId, sourceQuestContent, onClose];
  return getQuestImpressionId.useCallback((content) => {
    let obj = onClose(sourceQuestContent[2]);
    if (obj.isDiscordUrl(obj2.getCtaLink(quest.config), true)) {
      onClose();
    }
    obj2 = quest(sourceQuestContent[3]);
    const tmp3 = quest;
    obj = { content, ctaContent: tmp2(tmp[5]).QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
    quest(sourceQuestContent[4]).openGameLinkDirectly(tmp3, obj);
  }, items);
};
