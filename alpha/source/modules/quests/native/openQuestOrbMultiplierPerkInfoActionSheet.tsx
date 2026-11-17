// Module ID: 17810
// Function ID: 17811
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5546, 17811, 2121, 2]
// Exports: default

// Module 17810 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(17811, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
