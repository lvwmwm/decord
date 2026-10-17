// Module ID: 16204
// Function ID: 16205
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5155, 16205, 2002, 2]
// Exports: default

// Module 16204 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(16205, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
