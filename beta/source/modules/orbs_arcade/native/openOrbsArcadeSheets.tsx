// Module ID: 17387
// Function ID: 17388
// Name: openOrbsArcadeSheets
// Dependencies: [5406, 17388, 2118, 17400, 17407, 17408, 2]
// Exports: openOrbsArcadeHowToPlaySheet, openOrbsArcadeInfoSheet, openOrbsArcadeRewardUnlockedSheet, openOrbsArcadeRewardsSheet

// Module 17387 (openOrbsArcadeSheets)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeSheets.tsx");

export function openOrbsArcadeHowToPlaySheet(id, surface) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id, surface };
  obj.openLazy(asyncRequire(17388, dependencyMap.paths), "OrbsArcadeHowToPlaySheet", obj2);
}
export function openOrbsArcadeRewardsSheet(id, surface) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id, surface };
  obj.openLazy(asyncRequire(17400, dependencyMap.paths), "OrbsArcadeRewardsSheet", obj2);
}
export function openOrbsArcadeInfoSheet(id, surface) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id, surface };
  obj.openLazy(asyncRequire(17407, dependencyMap.paths), "OrbsArcadeInfoSheet", obj2);
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
  obj.openLazy(asyncRequire(17408, dependencyMap.paths), "OrbsArcadeRewardUnlockedSheet", obj2);
}
