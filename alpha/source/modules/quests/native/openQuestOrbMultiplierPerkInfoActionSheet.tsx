// Module ID: 16256
// Function ID: 16257
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5171, 16257, 2002, 2]
// Exports: default

// Module 16256 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(16257, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
