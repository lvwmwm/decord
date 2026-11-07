// Module ID: 17452
// Function ID: 17453
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5374, 17453, 2118, 2]
// Exports: default

// Module 17452 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(17453, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
