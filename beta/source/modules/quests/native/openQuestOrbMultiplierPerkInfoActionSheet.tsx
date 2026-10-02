// Module ID: 14683
// Function ID: 14684
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [4801, 14684, 1987, 2]
// Exports: default

// Module 14683 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(14684, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
