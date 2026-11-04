// Module ID: 17376
// Function ID: 17377
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5382, 17377, 2123, 2]
// Exports: default

// Module 17376 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(17377, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
