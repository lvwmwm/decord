// Module ID: 15795
// Function ID: 15796
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5060, 15796, 2000, 2]
// Exports: default

// Module 15795 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5060 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(15796, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
