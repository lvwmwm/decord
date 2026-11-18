// Module ID: 16614
// Function ID: 16615
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [5037, 16615, 2121, 2]
// Exports: default

// Module 16614 (openQuestOrbMultiplierPerkInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequire(16615, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj2);
};
