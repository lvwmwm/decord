// Module ID: 15245
// Function ID: 15246
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5054, 15246, 1999, 2]
// Exports: default

// Module 15245 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(15246, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
