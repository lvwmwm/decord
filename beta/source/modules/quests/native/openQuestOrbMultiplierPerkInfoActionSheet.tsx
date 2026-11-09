// Module ID: 17463
// Function ID: 17464
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5374, 17464, 2118, 2]
// Exports: default

// Module 17463 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(17464, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
