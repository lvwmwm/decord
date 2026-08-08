// Module ID: 14405
// Function ID: 14406
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [4271, 14406, 1988, 2]
// Exports: default

// Module 14405 (openQuestOrbMultiplierPerkInfoActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  let obj = importDefault(4271);
  obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(require(1988) /* asyncRequireImpl */(14406, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};
