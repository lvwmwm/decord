// Module ID: 17276
// Function ID: 17277
// Name: openOrbsArcadeSheets
// Dependencies: [5382, 17277, 2123, 17287, 17292, 17293, 2]
// Exports: openOrbsArcadeHowToPlaySheet, openOrbsArcadeInfoSheet, openOrbsArcadeRewardUnlockedSheet, openOrbsArcadeRewardsSheet

// Module 17276 (openOrbsArcadeSheets)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeSheets.tsx");

export function openOrbsArcadeHowToPlaySheet(id) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id };
  obj.openLazy(asyncRequire(17277, dependencyMap.paths), "OrbsArcadeHowToPlaySheet", obj2);
}
export function openOrbsArcadeRewardsSheet(id) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id };
  obj.openLazy(asyncRequire(17287, dependencyMap.paths), "OrbsArcadeRewardsSheet", obj2);
}
export function openOrbsArcadeInfoSheet(id) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id };
  obj.openLazy(asyncRequire(17292, dependencyMap.paths), "OrbsArcadeInfoSheet", obj2);
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
  obj.openLazy(asyncRequire(17293, dependencyMap.paths), "OrbsArcadeRewardUnlockedSheet", obj2);
}
