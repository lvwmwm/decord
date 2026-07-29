// Module ID: 14189
// Function ID: 14190
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [4157, 14190, 1959, 2]
// Exports: default

// Module 14189 (openQuestOrbMultiplierPerkInfoActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  let obj = importDefault(4157);
  obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(require(1959) /* asyncRequireImpl */(14190, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};
