// Module ID: 14185
// Function ID: 14186
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [4157, 14186, 1959, 2]
// Exports: default

// Module 14185 (openQuestOrbMultiplierPerkInfoActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  let obj = importDefault(4157);
  obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(require(1959) /* asyncRequireImpl */(14186, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};
