// Module ID: 11484
// Function ID: 11485
// Name: getIsEligibleForQuests
// Dependencies: [1608, 2]
// Exports: getIsEligibleForQuests

// Module 11484 (getIsEligibleForQuests)
import set from "set" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1608 */;

const result = set.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !isMetaQuest.isMetaQuest();
};
