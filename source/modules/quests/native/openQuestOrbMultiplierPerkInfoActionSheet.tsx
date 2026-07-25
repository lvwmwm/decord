// Module ID: 14122
// Function ID: 108586
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [4099, 14123, 1935, 2]
// Exports: default

// Module 14122 (openQuestOrbMultiplierPerkInfoActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  let obj = importDefault(4099);
  obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(require(1935) /* maybeLoadBundle */(14123, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};
