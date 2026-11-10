// Module ID: 17490
// Function ID: 17491
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5376, 17491, 2118, 2]
// Exports: default

// Module 17490 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(17491, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
