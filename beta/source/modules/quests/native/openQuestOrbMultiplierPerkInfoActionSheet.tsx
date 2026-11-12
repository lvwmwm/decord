// Module ID: 17500
// Function ID: 17501
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5406, 17501, 2118, 2]
// Exports: default

// Module 17500 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(17501, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
