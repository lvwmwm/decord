// Module ID: 16489
// Function ID: 16490
// Name: openOrbsArcadeSheets
// Dependencies: [5006, 16490, 2121, 16507, 16509, 2]
// Exports: openOrbsArcadeInfoSheet, openOrbsArcadeRewardUnlockedSheet, openOrbsArcadeRewardsSheet

// Module 16489 (openOrbsArcadeSheets)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeSheets.tsx");

export function openOrbsArcadeRewardsSheet(id, surface) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id, surface };
  obj.openLazy(asyncRequire(16490, dependencyMap.paths), "OrbsArcadeRewardsSheet", obj2);
}
export function openOrbsArcadeInfoSheet(id, surface) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id, surface };
  obj.openLazy(asyncRequire(16507, dependencyMap.paths), "OrbsArcadeInfoSheet", obj2);
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
  obj.openLazy(asyncRequire(16509, dependencyMap.paths), "OrbsArcadeRewardUnlockedSheet", obj2);
}
