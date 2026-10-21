// Module ID: 16332
// Function ID: 16333
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5192, 16333, 2002, 2]
// Exports: default

// Module 16332 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5192 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(16333, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
