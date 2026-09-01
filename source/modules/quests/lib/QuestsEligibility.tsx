// Module ID: 11084
// Function ID: 11085
// Name: getIsEligibleForQuests
// Dependencies: [1624, 2]
// Exports: getIsEligibleForQuests

// Module 11084 (getIsEligibleForQuests)
import set from "set" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1624 */;

const result = set.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !isMetaQuest.isMetaQuest();
};
