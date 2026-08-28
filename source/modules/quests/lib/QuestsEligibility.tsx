// Module ID: 11022
// Function ID: 11023
// Name: getIsEligibleForQuests
// Dependencies: [1625, 2]
// Exports: getIsEligibleForQuests

// Module 11022 (getIsEligibleForQuests)
import set from "set" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1625 */;

const result = set.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !isMetaQuest.isMetaQuest();
};
