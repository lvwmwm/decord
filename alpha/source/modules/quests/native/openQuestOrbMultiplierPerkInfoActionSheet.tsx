// Module ID: 16091
// Function ID: 16092
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5115, 16092, 2000, 2]
// Exports: default

// Module 16091 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(16092, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
