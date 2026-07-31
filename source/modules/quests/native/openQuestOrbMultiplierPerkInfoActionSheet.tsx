// Module ID: 14207
// Function ID: 14208
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [4161, 14208, 1959, 2]
// Exports: default

// Module 14207 (openQuestOrbMultiplierPerkInfoActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  let obj = importDefault(4161);
  obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(require(1959) /* asyncRequireImpl */(14208, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};
