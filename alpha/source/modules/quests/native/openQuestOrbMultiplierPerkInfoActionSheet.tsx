// Module ID: 15420
// Function ID: 15421
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5056, 15421, 2000, 2]
// Exports: default

// Module 15420 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(15421, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
