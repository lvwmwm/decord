// Module ID: 10437
// Function ID: 10438
// Name: getIsEligibleForQuests
// Dependencies: [1624, 2]
// Exports: getIsEligibleForQuests

// Module 10437 (getIsEligibleForQuests)
const result = require("set").fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !require(1624) /* isMetaQuest */.isMetaQuest();
};
