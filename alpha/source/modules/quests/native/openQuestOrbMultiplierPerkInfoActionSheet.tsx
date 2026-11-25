// Module ID: 16706
// Function ID: 16707
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5226, 16707, 2119, 2]
// Exports: default

// Module 16706 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(16707, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
