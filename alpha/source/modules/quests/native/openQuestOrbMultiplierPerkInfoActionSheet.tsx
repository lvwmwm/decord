// Module ID: 16605
// Function ID: 16606
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5006, 16606, 2121, 2]
// Exports: default

// Module 16605 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(16606, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
