// Module ID: 14308
// Function ID: 14309
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [4253, 14309, 1959, 2]
// Exports: default

// Module 14308 (openQuestOrbMultiplierPerkInfoActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  let obj = importDefault(4253);
  obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(require(1959) /* asyncRequireImpl */(14309, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};
