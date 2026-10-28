// Module ID: 16544
// Function ID: 16545
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5242, 16545, 2002, 2]
// Exports: default

// Module 16544 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5242 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(16545, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
