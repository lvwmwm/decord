// Module ID: 10455
// Function ID: 80939
// Name: getIsEligibleForQuests
// Dependencies: [6, 7]
// Exports: getIsEligibleForQuests

// Module 10455 (getIsEligibleForQuests)
import _defineProperties from "_defineProperties";

const result = _defineProperties.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !require(dependencyMap[0]).isMetaQuest();
};
