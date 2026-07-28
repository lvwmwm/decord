// Module ID: 14167
// Function ID: 108764
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [4133, 14168, 1935, 2]
// Exports: default

// Module 14167 (openQuestOrbMultiplierPerkInfoActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  let obj = importDefault(4133);
  obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(require(1935) /* maybeLoadBundle */(14168, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};
