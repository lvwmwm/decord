// Module ID: 10532
// Function ID: 10533
// Name: getIsEligibleForQuests
// Dependencies: [1625, 2]
// Exports: getIsEligibleForQuests

// Module 10532 (getIsEligibleForQuests)
import set from "set" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1625 */;

const result = set.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !isMetaQuest.isMetaQuest();
};
