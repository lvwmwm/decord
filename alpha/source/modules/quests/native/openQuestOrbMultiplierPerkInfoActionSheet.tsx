// Module ID: 16237
// Function ID: 16238
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5171, 16238, 2002, 2]
// Exports: default

// Module 16237 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(16238, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
