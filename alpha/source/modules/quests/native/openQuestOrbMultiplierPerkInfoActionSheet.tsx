// Module ID: 16428
// Function ID: 16429
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5008, 16429, 2119, 2]
// Exports: default

// Module 16428 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(16429, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
