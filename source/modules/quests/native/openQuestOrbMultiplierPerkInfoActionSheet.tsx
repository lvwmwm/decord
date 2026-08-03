// Module ID: 14274
// Function ID: 14275
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [4223, 14275, 1959, 2]
// Exports: default

// Module 14274 (openQuestOrbMultiplierPerkInfoActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  let obj = importDefault(4223);
  obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(require(1959) /* asyncRequireImpl */(14275, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};
