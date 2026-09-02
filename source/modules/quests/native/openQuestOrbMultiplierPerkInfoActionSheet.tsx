// Module ID: 14993
// Function ID: 14994
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [4445, 14994, 2008, 2]
// Exports: default

// Module 14993 (openQuestOrbMultiplierPerkInfoActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const result = set.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequireImpl(14994, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};
