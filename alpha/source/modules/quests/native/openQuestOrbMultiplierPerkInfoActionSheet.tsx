// Module ID: 16764
// Function ID: 16765
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5257, 16765, 2120, 2]
// Exports: default

// Module 16764 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(16765, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
