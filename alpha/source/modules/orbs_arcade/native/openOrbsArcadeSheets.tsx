// Module ID: 16971
// Function ID: 16972
// Name: openOrbsArcadeSheets
// Dependencies: [5253, 16972, 1995, 16981, 16986, 16987, 2]
// Exports: openOrbsArcadeHowToPlaySheet, openOrbsArcadeInfoSheet, openOrbsArcadeRewardUnlockedSheet, openOrbsArcadeRewardsSheet

// Module 16971 (openOrbsArcadeSheets)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeSheets.tsx");

export function openOrbsArcadeHowToPlaySheet(id) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id };
  obj.openLazy(asyncRequire(16972, dependencyMap.paths), "OrbsArcadeHowToPlaySheet", obj2);
}
export function openOrbsArcadeRewardsSheet(id) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id };
  obj.openLazy(asyncRequire(16981, dependencyMap.paths), "OrbsArcadeRewardsSheet", obj2);
}
export function openOrbsArcadeInfoSheet(id) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id };
  obj.openLazy(asyncRequire(16986, dependencyMap.paths), "OrbsArcadeInfoSheet", obj2);
}
export function openOrbsArcadeRewardUnlockedSheet(id, set) {
  if (set === undefined) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
  }
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id, unlockedRewardIds: set };
  obj.openLazy(asyncRequire(16987, dependencyMap.paths), "OrbsArcadeRewardUnlockedSheet", obj2);
}
