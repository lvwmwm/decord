// Module ID: 16473
// Function ID: 16474
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5208, 16474, 2002, 2]
// Exports: default

// Module 16473 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(16474, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
