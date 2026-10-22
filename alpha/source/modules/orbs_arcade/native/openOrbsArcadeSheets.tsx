// Module ID: 16318
// Function ID: 16319
// Name: openOrbsArcadeSheets
// Dependencies: [5196, 16319, 2002, 16322, 2]
// Exports: openOrbsArcadeHowToPlaySheet, openOrbsArcadeInfoSheet

// Module 16318 (openOrbsArcadeSheets)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeSheets.tsx");

export const openOrbsArcadeHowToPlaySheet = function openOrbsArcadeHowToPlaySheet(id) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id };
  obj.openLazy(asyncRequire(16319, dependencyMap.paths), "OrbsArcadeHowToPlaySheet", obj2);
};
export const openOrbsArcadeInfoSheet = function openOrbsArcadeInfoSheet(id) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id };
  obj.openLazy(asyncRequire(16322, dependencyMap.paths), "OrbsArcadeInfoSheet", obj2);
};
