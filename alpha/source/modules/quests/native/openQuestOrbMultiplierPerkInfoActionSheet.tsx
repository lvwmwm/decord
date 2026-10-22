// Module ID: 16423
// Function ID: 16424
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5196, 16424, 2002, 2]
// Exports: default

// Module 16423 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(16424, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
