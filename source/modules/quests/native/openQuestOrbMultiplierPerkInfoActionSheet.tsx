// Module ID: 14111
// Function ID: 108459
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [4098, 14112, 1934, 2]
// Exports: default

// Module 14111 (openQuestOrbMultiplierPerkInfoActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  let obj = importDefault(4098);
  obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(require(1934) /* maybeLoadBundle */(14112, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};
