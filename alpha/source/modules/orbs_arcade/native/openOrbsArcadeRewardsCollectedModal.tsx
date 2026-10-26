// Module ID: 16415
// Function ID: 16416
// Name: openOrbsArcadeRewardsCollectedModal
// Dependencies: [5, 5210, 6672, 16416, 2002, 2]
// Exports: closeOrbsArcadeRewardsCollectedModal, openOrbsArcadeRewardsCollectedModal

// Module 16415 (openOrbsArcadeRewardsCollectedModal)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
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
