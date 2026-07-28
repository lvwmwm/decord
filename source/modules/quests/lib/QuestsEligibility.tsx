// Module ID: 10469
// Function ID: 80984
// Name: getIsEligibleForQuests
// Dependencies: [1553, 2]
// Exports: getIsEligibleForQuests

// Module 10469 (getIsEligibleForQuests)
const result = require("set").fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !require(1553) /* isMetaQuest */.isMetaQuest();
};
