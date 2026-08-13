// Module ID: 14472
// Function ID: 14473
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [4310, 14473, 2007, 2]
// Exports: default

// Module 14472 (openQuestOrbMultiplierPerkInfoActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  let obj = importDefault(4310);
  obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(require(2007) /* asyncRequireImpl */(14473, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};
