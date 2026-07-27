// Module ID: 14123
// Function ID: 108591
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [4099, 14124, 1935, 2]
// Exports: default

// Module 14123 (openQuestOrbMultiplierPerkInfoActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  let obj = importDefault(4099);
  obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(require(1935) /* maybeLoadBundle */(14124, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};
