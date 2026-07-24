// Module ID: 10494
// Function ID: 81181
// Name: getIsEligibleForQuests
// Dependencies: [1553, 2]
// Exports: getIsEligibleForQuests

// Module 10494 (getIsEligibleForQuests)
const result = require("set").fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !require(1553) /* isMetaQuest */.isMetaQuest();
};
