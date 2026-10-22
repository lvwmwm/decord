// Module ID: 16332
// Function ID: 16333
// Name: openOrbsArcadeSheets
// Dependencies: [5196, 16333, 2002, 16339, 16344, 2]
// Exports: openOrbsArcadeHowToPlaySheet, openOrbsArcadeInfoSheet, openOrbsArcadeRewardsSheet

// Module 16332 (openOrbsArcadeSheets)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeSheets.tsx");

export const openOrbsArcadeHowToPlaySheet = function openOrbsArcadeHowToPlaySheet(id) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id };
  obj.openLazy(asyncRequire(16333, dependencyMap.paths), "OrbsArcadeHowToPlaySheet", obj2);
};
export const openOrbsArcadeRewardsSheet = function openOrbsArcadeRewardsSheet(id) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id };
  obj.openLazy(asyncRequire(16339, dependencyMap.paths), "OrbsArcadeRewardsSheet", obj2);
};
export const openOrbsArcadeInfoSheet = function openOrbsArcadeInfoSheet(id) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id };
  obj.openLazy(asyncRequire(16344, dependencyMap.paths), "OrbsArcadeInfoSheet", obj2);
};
