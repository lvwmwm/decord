// Module ID: 11304
// Function ID: 11305
// Name: getIsEligibleForQuests
// Dependencies: [1623, 2]
// Exports: getIsEligibleForQuests

// Module 11304 (getIsEligibleForQuests)
import set from "set" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1623 */;

const result = set.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !isMetaQuest.isMetaQuest();
};
