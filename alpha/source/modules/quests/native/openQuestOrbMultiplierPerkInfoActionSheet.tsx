// Module ID: 16510
// Function ID: 16511
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5210, 16511, 2002, 2]
// Exports: default

// Module 16510 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(16511, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
