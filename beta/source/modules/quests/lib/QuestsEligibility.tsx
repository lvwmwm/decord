// Module ID: 10682
// Function ID: 10683
// Name: QuestsEligibility
// Dependencies: [1610, 2]
// Exports: getIsEligibleForQuests

// Module 10682 (QuestsEligibility)
import MetaQuestUtils from "MetaQuestUtils" /* 1610 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !MetaQuestUtils.isMetaQuest();
};
