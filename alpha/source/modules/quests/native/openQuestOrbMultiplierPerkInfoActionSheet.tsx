// Module ID: 14964
// Function ID: 14965
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [4854, 14965, 1987, 2]
// Exports: default

// Module 14964 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(14965, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
