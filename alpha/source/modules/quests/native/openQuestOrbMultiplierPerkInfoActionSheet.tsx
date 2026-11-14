// Module ID: 17770
// Function ID: 17771
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5552, 17771, 2121, 2]
// Exports: default

// Module 17770 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(17771, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
