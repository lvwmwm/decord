// Module ID: 11416
// Function ID: 11417
// Name: getIsEligibleForQuests
// Dependencies: [1623, 2]
// Exports: getIsEligibleForQuests

// Module 11416 (getIsEligibleForQuests)
import set from "set" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1623 */;

const result = set.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !isMetaQuest.isMetaQuest();
};
