// Module ID: 16401
// Function ID: 16402
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5196, 16402, 2002, 2]
// Exports: default

// Module 16401 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(16402, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
