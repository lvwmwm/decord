// Module ID: 10507
// Function ID: 10508
// Name: getIsEligibleForQuests
// Dependencies: [1624, 2]
// Exports: getIsEligibleForQuests

// Module 10507 (getIsEligibleForQuests)
const result = require("set").fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !require(1624) /* isMetaQuest */.isMetaQuest();
};
