// Module ID: 14307
// Function ID: 14308
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [4253, 14308, 1959, 2]
// Exports: default

// Module 14307 (openQuestOrbMultiplierPerkInfoActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  let obj = importDefault(4253);
  obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(require(1959) /* asyncRequireImpl */(14308, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};
