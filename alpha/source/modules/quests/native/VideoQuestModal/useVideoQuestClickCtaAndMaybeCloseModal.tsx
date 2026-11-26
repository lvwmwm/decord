// Module ID: 16748
// Function ID: 16749
// Name: useVideoQuestClickCtaAndMaybeCloseModal
// Dependencies: [19, 1071, 9928, 5758, 9913, 9930, 8392, 2]
// Exports: useVideoQuestClickCtaAndMaybeCloseModal

// Module 16748 (useVideoQuestClickCtaAndMaybeCloseModal)
import Constants from "Constants" /* 1071 */;
import parseURLDefault from "parseURL" /* 5758 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8392 */;
import QuestCopyUtils from "QuestCopyUtils" /* 9913 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9930 */;
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
