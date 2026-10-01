// Module ID: 14695
// Function ID: 14696
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [4800, 14696, 1981, 2]
// Exports: default

// Module 14695 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(14696, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
