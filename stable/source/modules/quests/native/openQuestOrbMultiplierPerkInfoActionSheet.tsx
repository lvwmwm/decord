// Module ID: 17772
// Function ID: 17773
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5542, 17773, 2121, 2]
// Exports: default

// Module 17772 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(17773, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
