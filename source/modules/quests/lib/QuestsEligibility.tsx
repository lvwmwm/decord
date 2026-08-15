// Module ID: 10685
// Function ID: 10686
// Name: getIsEligibleForQuests
// Dependencies: [1625, 2]
// Exports: getIsEligibleForQuests

// Module 10685 (getIsEligibleForQuests)
const result = require("set").fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !require(1625) /* isMetaQuest */.isMetaQuest();
};
