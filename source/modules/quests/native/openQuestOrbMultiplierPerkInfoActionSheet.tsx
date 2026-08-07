// Module ID: 14335
// Function ID: 14336
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [4270, 14336, 1988, 2]
// Exports: default

// Module 14335 (openQuestOrbMultiplierPerkInfoActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  let obj = importDefault(4270);
  obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(require(1988) /* asyncRequireImpl */(14336, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};
