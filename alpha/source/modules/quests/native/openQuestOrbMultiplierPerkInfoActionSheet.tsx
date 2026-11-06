// Module ID: 17403
// Function ID: 17404
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5404, 17404, 2118, 2]
// Exports: default

// Module 17403 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(17404, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
