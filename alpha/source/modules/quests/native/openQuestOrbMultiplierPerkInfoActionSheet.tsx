// Module ID: 17016
// Function ID: 17017
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5247, 17017, 2000, 2]
// Exports: default

// Module 17016 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(17017, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
