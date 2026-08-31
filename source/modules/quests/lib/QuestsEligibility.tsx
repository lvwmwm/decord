// Module ID: 11047
// Function ID: 11048
// Name: getIsEligibleForQuests
// Dependencies: [1624, 2]
// Exports: getIsEligibleForQuests

// Module 11047 (getIsEligibleForQuests)
import set from "set" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1624 */;

const result = set.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !isMetaQuest.isMetaQuest();
};
