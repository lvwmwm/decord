// Module ID: 17650
// Function ID: 17651
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5489, 17651, 2118, 2]
// Exports: default

// Module 17650 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(17651, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
