// Module ID: 16551
// Function ID: 16552
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5127, 16552, 2119, 2]
// Exports: default

// Module 16551 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(16552, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
