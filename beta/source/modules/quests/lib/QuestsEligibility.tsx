// Module ID: 11644
// Function ID: 11645
// Name: QuestsEligibility
// Dependencies: [1613, 2]
// Exports: getIsEligibleForQuests

// Module 11644 (QuestsEligibility)
import MetaQuestUtils from "MetaQuestUtils" /* 1613 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !MetaQuestUtils.isMetaQuest();
};
