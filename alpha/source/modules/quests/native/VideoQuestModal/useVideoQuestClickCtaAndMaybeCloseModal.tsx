// Module ID: 17379
// Function ID: 17380
// Name: useVideoQuestClickCtaAndMaybeCloseModal
// Dependencies: [19, 1072, 9867, 5879, 9855, 9869, 8011, 2]
// Exports: useVideoQuestClickCtaAndMaybeCloseModal

// Module 17379 (useVideoQuestClickCtaAndMaybeCloseModal)
import Constants from "Constants" /* 1072 */;
import parseURLDefault from "parseURL" /* 5879 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8011 */;
import QuestCopyUtils from "QuestCopyUtils" /* 9855 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9869 */;
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
