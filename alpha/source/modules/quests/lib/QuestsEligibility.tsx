// Module ID: 11825
// Function ID: 11826
// Name: QuestsEligibility
// Dependencies: [1609, 2]
// Exports: getIsEligibleForQuests

// Module 11825 (QuestsEligibility)
import MetaQuestUtils from "MetaQuestUtils" /* 1609 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !MetaQuestUtils.isMetaQuest();
};
