// Module ID: 13947
// Function ID: 105980
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [0, 0, 0, 0]
// Exports: default

// Module 13947 (openQuestOrbMultiplierPerkInfoActionSheet)
const result = require("__exportStarResult1").fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  let obj = importDefault(dependencyMap[0]);
  obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};
