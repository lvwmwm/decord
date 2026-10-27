// Module ID: 16208
// Function ID: 16209
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5155, 16209, 2002, 2]
// Exports: default

// Module 16208 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(16209, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
