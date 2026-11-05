// Module ID: 17414
// Function ID: 17415
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5384, 17415, 2123, 2]
// Exports: default

// Module 17414 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(17415, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
