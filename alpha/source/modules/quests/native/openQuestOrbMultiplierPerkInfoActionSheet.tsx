// Module ID: 16549
// Function ID: 16550
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5211, 16550, 1999, 2]
// Exports: default

// Module 16549 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(16550, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
