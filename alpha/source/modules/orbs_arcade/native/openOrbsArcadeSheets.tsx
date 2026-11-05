// Module ID: 17305
// Function ID: 17306
// Name: openOrbsArcadeSheets
// Dependencies: [5384, 17306, 2123, 17318, 17325, 17326, 2]
// Exports: openOrbsArcadeHowToPlaySheet, openOrbsArcadeInfoSheet, openOrbsArcadeRewardUnlockedSheet, openOrbsArcadeRewardsSheet

// Module 17305 (openOrbsArcadeSheets)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeSheets.tsx");

export function openOrbsArcadeHowToPlaySheet(id, surface) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id, surface };
  obj.openLazy(asyncRequire(17306, dependencyMap.paths), "OrbsArcadeHowToPlaySheet", obj2);
}
export function openOrbsArcadeRewardsSheet(id, surface) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id, surface };
  obj.openLazy(asyncRequire(17318, dependencyMap.paths), "OrbsArcadeRewardsSheet", obj2);
}
export function openOrbsArcadeInfoSheet(id, surface) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id, surface };
  obj.openLazy(asyncRequire(17325, dependencyMap.paths), "OrbsArcadeInfoSheet", obj2);
}
export function openOrbsArcadeRewardUnlockedSheet(id, surface, set) {
  if (set === undefined) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
  }
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id, surface, unlockedRewardIds: set };
  obj.openLazy(asyncRequire(17326, dependencyMap.paths), "OrbsArcadeRewardUnlockedSheet", obj2);
}
