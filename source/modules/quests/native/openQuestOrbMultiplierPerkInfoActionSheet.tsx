// Module ID: 14407
// Function ID: 14408
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [4271, 14408, 1988, 2]
// Exports: default

// Module 14407 (openQuestOrbMultiplierPerkInfoActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  let obj = importDefault(4271);
  obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(require(1988) /* asyncRequireImpl */(14408, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};
