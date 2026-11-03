// Module ID: 17284
// Function ID: 17285
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5381, 17285, 2123, 2]
// Exports: default

// Module 17284 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(17285, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
