// Module ID: 14318
// Function ID: 14319
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [4253, 14319, 1988, 2]
// Exports: default

// Module 14318 (openQuestOrbMultiplierPerkInfoActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  let obj = importDefault(4253);
  obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(require(1988) /* asyncRequireImpl */(14319, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};
