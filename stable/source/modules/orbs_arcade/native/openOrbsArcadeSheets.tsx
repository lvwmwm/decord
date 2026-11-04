// Module ID: 16445
// Function ID: 16446
// Name: openOrbsArcadeSheets
// Dependencies: [5242, 16446, 2002, 16455, 16460, 16461, 2]
// Exports: openOrbsArcadeHowToPlaySheet, openOrbsArcadeInfoSheet, openOrbsArcadeRewardUnlockedSheet, openOrbsArcadeRewardsSheet

// Module 16445 (openOrbsArcadeSheets)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5242 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeSheets.tsx");

export const openOrbsArcadeHowToPlaySheet = function openOrbsArcadeHowToPlaySheet(id) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id };
  obj.openLazy(asyncRequire(16446, dependencyMap.paths), "OrbsArcadeHowToPlaySheet", obj2);
};
export const openOrbsArcadeRewardsSheet = function openOrbsArcadeRewardsSheet(id) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id };
  obj.openLazy(asyncRequire(16455, dependencyMap.paths), "OrbsArcadeRewardsSheet", obj2);
};
export const openOrbsArcadeInfoSheet = function openOrbsArcadeInfoSheet(id) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id };
  obj.openLazy(asyncRequire(16460, dependencyMap.paths), "OrbsArcadeInfoSheet", obj2);
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
  obj.openLazy(asyncRequire(16461, dependencyMap.paths), "OrbsArcadeRewardUnlockedSheet", obj2);
};
