// Module ID: 17070
// Function ID: 17071
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5253, 17071, 1995, 2]
// Exports: default

// Module 17070 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(17071, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
