// Module ID: 13938
// Function ID: 105923
// Name: useVideoQuestClickCtaAndMaybeCloseModal
// Dependencies: []
// Exports: useVideoQuestClickCtaAndMaybeCloseModal

// Module 13938 (useVideoQuestClickCtaAndMaybeCloseModal)
let closure_3 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/quests/native/VideoQuestModal/useVideoQuestClickCtaAndMaybeCloseModal.tsx");

export const useVideoQuestClickCtaAndMaybeCloseModal = function useVideoQuestClickCtaAndMaybeCloseModal(quest) {
  quest = quest.quest;
  const arg1 = quest;
  const onClose = quest.onClose;
  const importDefault = onClose;
  const sourceQuestContent = quest.sourceQuestContent;
  const dependencyMap = sourceQuestContent;
  const getQuestImpressionId = arg1(dependencyMap[1]).useGetQuestImpressionId();
  const React = getQuestImpressionId;
  const items = [quest, getQuestImpressionId, sourceQuestContent, onClose];
  return React.useCallback(() => {
    let obj = onClose(sourceQuestContent[2]);
    if (obj.isDiscordUrl(obj2.getCtaLink(quest.config), true)) {
      onClose();
    }
    const obj2 = quest(sourceQuestContent[3]);
    obj = { content: quest(sourceQuestContent[5]).QuestContent.VIDEO_MODAL_MOBILE, ctaContent: quest(sourceQuestContent[6]).QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
    quest(sourceQuestContent[4]).openGameLinkDirectly(quest, obj);
  }, items);
};
