// Module ID: 17540
// Function ID: 17541
// Name: openOrbsArcadeSheets
// Dependencies: [5489, 17541, 2118, 17558, 17560, 2]
// Exports: openOrbsArcadeInfoSheet, openOrbsArcadeRewardUnlockedSheet, openOrbsArcadeRewardsSheet

// Module 17540 (openOrbsArcadeSheets)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeSheets.tsx");

export function openOrbsArcadeRewardsSheet(id, surface) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id, surface };
  obj.openLazy(asyncRequire(17541, dependencyMap.paths), "OrbsArcadeRewardsSheet", obj2);
}
export function openOrbsArcadeInfoSheet(id, surface) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id, surface };
  obj.openLazy(asyncRequire(17558, dependencyMap.paths), "OrbsArcadeInfoSheet", obj2);
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
  obj.openLazy(asyncRequire(17560, dependencyMap.paths), "OrbsArcadeRewardUnlockedSheet", obj2);
}
