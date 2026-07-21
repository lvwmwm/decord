// Module ID: 10454
// Function ID: 80926
// Name: getIsEligibleForQuests
// Dependencies: [6, 7]
// Exports: getIsEligibleForQuests

// Module 10454 (getIsEligibleForQuests)
import _defineProperties from "_defineProperties";

const result = _defineProperties.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !require(dependencyMap[0]).isMetaQuest();
};
