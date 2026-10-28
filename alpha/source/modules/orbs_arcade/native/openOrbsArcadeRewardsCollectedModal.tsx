// Module ID: 16684
// Function ID: 16685
// Name: openOrbsArcadeRewardsCollectedModal
// Dependencies: [5, 5246, 6707, 16685, 1999, 2]
// Exports: closeOrbsArcadeRewardsCollectedModal, openOrbsArcadeRewardsCollectedModal

// Module 16684 (openOrbsArcadeRewardsCollectedModal)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6707 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const OrbsArcadeRewardsCollectedModal = "OrbsArcadeRewardsCollectedModal";
const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeRewardsCollectedModal.tsx");

export const openOrbsArcadeRewardsCollectedModal = function openOrbsArcadeRewardsCollectedModal(rewards, entitlements) {
  let paths;
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { rewards, entitlements };
  obj2.pushLazy(_asyncToGenerator(async () => {
    let c0;
    let c1;
    await require("asyncRequire")(paths[3], paths.paths);
    return arg1.default;
  }), obj3, OrbsArcadeRewardsCollectedModal);
};
export const closeOrbsArcadeRewardsCollectedModal = function closeOrbsArcadeRewardsCollectedModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(OrbsArcadeRewardsCollectedModal);
};
