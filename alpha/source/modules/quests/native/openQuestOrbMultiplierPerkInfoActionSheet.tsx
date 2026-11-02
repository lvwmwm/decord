// Module ID: 17141
// Function ID: 17142
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5258, 17142, 1994, 2]
// Exports: default

// Module 17141 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(17142, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
