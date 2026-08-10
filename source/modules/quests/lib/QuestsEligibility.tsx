// Module ID: 10461
// Function ID: 10462
// Name: getIsEligibleForQuests
// Dependencies: [1605, 2]
// Exports: getIsEligibleForQuests

// Module 10461 (getIsEligibleForQuests)
const result = require("set").fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !require(1605) /* isMetaQuest */.isMetaQuest();
};
