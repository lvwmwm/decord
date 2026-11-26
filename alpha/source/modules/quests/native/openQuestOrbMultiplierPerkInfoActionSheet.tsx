// Module ID: 16757
// Function ID: 16758
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5257, 16758, 2120, 2]
// Exports: default

// Module 16757 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(16758, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
