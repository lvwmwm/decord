// Module ID: 16138
// Function ID: 16139
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5118, 16139, 2002, 2]
// Exports: default

// Module 16138 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(16139, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
