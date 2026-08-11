// Module ID: 14415
// Function ID: 14416
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [4271, 14416, 2007, 2]
// Exports: default

// Module 14415 (openQuestOrbMultiplierPerkInfoActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  let obj = importDefault(4271);
  obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(require(2007) /* asyncRequireImpl */(14416, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};
