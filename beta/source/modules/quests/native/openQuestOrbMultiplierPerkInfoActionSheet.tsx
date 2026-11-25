// Module ID: 16559
// Function ID: 16560
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5127, 16560, 2119, 2]
// Exports: default

// Module 16559 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(16560, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
