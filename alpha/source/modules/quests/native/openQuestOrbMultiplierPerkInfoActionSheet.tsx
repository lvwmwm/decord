// Module ID: 15358
// Function ID: 15359
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5055, 15359, 2000, 2]
// Exports: default

// Module 15358 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(15359, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
