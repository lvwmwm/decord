// Module ID: 14061
// Function ID: 108136
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [4098, 14062, 1934, 2]
// Exports: default

// Module 14061 (openQuestOrbMultiplierPerkInfoActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  let obj = importDefault(4098);
  obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(require(1934) /* maybeLoadBundle */(14062, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};
