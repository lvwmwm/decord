// Module ID: 16410
// Function ID: 16411
// Name: openOrbsArcadeSheets
// Dependencies: [5210, 16411, 2002, 16420, 16425, 16426, 2]
// Exports: openOrbsArcadeHowToPlaySheet, openOrbsArcadeInfoSheet, openOrbsArcadeRewardUnlockedSheet, openOrbsArcadeRewardsSheet

// Module 16410 (openOrbsArcadeSheets)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeSheets.tsx");

export const openOrbsArcadeHowToPlaySheet = function openOrbsArcadeHowToPlaySheet(id) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id };
  obj.openLazy(asyncRequire(16411, dependencyMap.paths), "OrbsArcadeHowToPlaySheet", obj2);
};
export const openOrbsArcadeRewardsSheet = function openOrbsArcadeRewardsSheet(id) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id };
  obj.openLazy(asyncRequire(16420, dependencyMap.paths), "OrbsArcadeRewardsSheet", obj2);
};
export const openOrbsArcadeInfoSheet = function openOrbsArcadeInfoSheet(id) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id };
  obj.openLazy(asyncRequire(16425, dependencyMap.paths), "OrbsArcadeInfoSheet", obj2);
};
export const openOrbsArcadeRewardUnlockedSheet = function openOrbsArcadeRewardUnlockedSheet(id, set) {
  if (set === undefined) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
  }
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id, unlockedRewardIds: set };
  obj.openLazy(asyncRequire(16426, dependencyMap.paths), "OrbsArcadeRewardUnlockedSheet", obj2);
};
