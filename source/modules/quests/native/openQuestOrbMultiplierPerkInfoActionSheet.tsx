// Module ID: 14481
// Function ID: 14482
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [4310, 14482, 2007, 2]
// Exports: default

// Module 14481 (openQuestOrbMultiplierPerkInfoActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  let obj = importDefault(4310);
  obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(require(2007) /* asyncRequireImpl */(14482, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};
