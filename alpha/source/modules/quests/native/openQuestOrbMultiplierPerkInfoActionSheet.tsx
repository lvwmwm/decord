// Module ID: 16585
// Function ID: 16586
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5131, 16586, 2119, 2]
// Exports: default

// Module 16585 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(16586, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
