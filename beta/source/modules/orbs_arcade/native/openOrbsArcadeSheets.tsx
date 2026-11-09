// Module ID: 17352
// Function ID: 17353
// Name: openOrbsArcadeSheets
// Dependencies: [5374, 17353, 2118, 17365, 17372, 17373, 2]
// Exports: openOrbsArcadeHowToPlaySheet, openOrbsArcadeInfoSheet, openOrbsArcadeRewardUnlockedSheet, openOrbsArcadeRewardsSheet

// Module 17352 (openOrbsArcadeSheets)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeSheets.tsx");

export function openOrbsArcadeHowToPlaySheet(id, surface) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id, surface };
  obj.openLazy(asyncRequire(17353, dependencyMap.paths), "OrbsArcadeHowToPlaySheet", obj2);
}
export function openOrbsArcadeRewardsSheet(id, surface) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id, surface };
  obj.openLazy(asyncRequire(17365, dependencyMap.paths), "OrbsArcadeRewardsSheet", obj2);
}
export function openOrbsArcadeInfoSheet(id, surface) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { gameId: id, surface };
  obj.openLazy(asyncRequire(17372, dependencyMap.paths), "OrbsArcadeInfoSheet", obj2);
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
  obj.openLazy(asyncRequire(17373, dependencyMap.paths), "OrbsArcadeRewardUnlockedSheet", obj2);
}
