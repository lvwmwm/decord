// Module ID: 16554
// Function ID: 16555
// Name: useVideoQuestClickCtaAndMaybeCloseModal
// Dependencies: [19, 1071, 9996, 5628, 9982, 9998, 8430, 2]
// Exports: useVideoQuestClickCtaAndMaybeCloseModal

// Module 16554 (useVideoQuestClickCtaAndMaybeCloseModal)
import Constants from "Constants" /* 1071 */;
import parseURLDefault from "parseURL" /* 5628 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8430 */;
import QuestCopyUtils from "QuestCopyUtils" /* 9982 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9998 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const LinkingTypes = Constants.LinkingTypes;
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/useVideoQuestClickCtaAndMaybeCloseModal.tsx");

export function useVideoQuestClickCtaAndMaybeCloseModal(quest) {
  quest = quest.quest;
  const onClose = quest.onClose;
  const sourceQuestContent = quest.sourceQuestContent;
  let obj = quest(sourceQuestContent[2]);
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
}
