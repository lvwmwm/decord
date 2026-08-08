// Module ID: 10460
// Function ID: 10461
// Name: getIsEligibleForQuests
// Dependencies: [1605, 2]
// Exports: getIsEligibleForQuests

// Module 10460 (getIsEligibleForQuests)
const result = require("set").fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !require(1605) /* isMetaQuest */.isMetaQuest();
};
