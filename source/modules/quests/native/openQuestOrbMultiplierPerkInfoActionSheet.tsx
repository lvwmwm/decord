// Module ID: 14281
// Function ID: 14282
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [4223, 14282, 1959, 2]
// Exports: default

// Module 14281 (openQuestOrbMultiplierPerkInfoActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  let obj = importDefault(4223);
  obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(require(1959) /* asyncRequireImpl */(14282, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};
