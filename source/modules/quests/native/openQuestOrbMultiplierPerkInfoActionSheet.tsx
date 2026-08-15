// Module ID: 14517
// Function ID: 14518
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [4342, 14518, 2007, 2]
// Exports: default

// Module 14517 (openQuestOrbMultiplierPerkInfoActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  let obj = importDefault(4342);
  obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(require(2007) /* asyncRequireImpl */(14518, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};
