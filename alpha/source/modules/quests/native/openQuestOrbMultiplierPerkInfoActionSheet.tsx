// Module ID: 16778
// Function ID: 16779
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5246, 16779, 1999, 2]
// Exports: default

// Module 16778 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(16779, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
