// Module ID: 14485
// Function ID: 14486
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [4310, 14486, 2007, 2]
// Exports: default

// Module 14485 (openQuestOrbMultiplierPerkInfoActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  let obj = importDefault(4310);
  obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(require(2007) /* asyncRequireImpl */(14486, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};
