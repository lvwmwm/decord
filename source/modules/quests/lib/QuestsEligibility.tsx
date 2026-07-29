// Module ID: 10493
// Function ID: 10494
// Name: getIsEligibleForQuests
// Dependencies: [1577, 2]
// Exports: getIsEligibleForQuests

// Module 10493 (getIsEligibleForQuests)
const result = require("set").fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !require(1577) /* isMetaQuest */.isMetaQuest();
};
