// Module ID: 17655
// Function ID: 17656
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5489, 17656, 2118, 2]
// Exports: default

// Module 17655 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(17656, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
