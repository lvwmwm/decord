// Module ID: 16679
// Function ID: 16680
// Name: openOrbsArcadeSheets
// Dependencies: [5246, 16680, 1999, 16689, 16694, 16695, 2]
// Exports: openOrbsArcadeHowToPlaySheet, openOrbsArcadeInfoSheet, openOrbsArcadeRewardUnlockedSheet, openOrbsArcadeRewardsSheet

// Module 16679 (openOrbsArcadeSheets)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeSheets.tsx");

export const openOrbsArcadeHowToPlaySheet = function openOrbsArcadeHowToPlaySheet(id) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id };
  obj.openLazy(asyncRequire(16680, dependencyMap.paths), "OrbsArcadeHowToPlaySheet", obj2);
};
export const openOrbsArcadeRewardsSheet = function openOrbsArcadeRewardsSheet(id) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id };
  obj.openLazy(asyncRequire(16689, dependencyMap.paths), "OrbsArcadeRewardsSheet", obj2);
};
export const openOrbsArcadeInfoSheet = function openOrbsArcadeInfoSheet(id) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id };
  obj.openLazy(asyncRequire(16694, dependencyMap.paths), "OrbsArcadeInfoSheet", obj2);
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
  obj.openLazy(asyncRequire(16695, dependencyMap.paths), "OrbsArcadeRewardUnlockedSheet", obj2);
};
