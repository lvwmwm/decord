// Module ID: 16500
// Function ID: 16501
// Name: openOrbsArcadeRewardsCollectedModal
// Dependencies: [5, 5006, 6308, 16501, 2121, 2]
// Exports: closeOrbsArcadeRewardsCollectedModal, openOrbsArcadeRewardsCollectedModal

// Module 16500 (openOrbsArcadeRewardsCollectedModal)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const OrbsArcadeRewardsCollectedModal = "OrbsArcadeRewardsCollectedModal";
const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeRewardsCollectedModal.tsx");

export function openOrbsArcadeRewardsCollectedModal(rewards, entitlements) {
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
}
export function closeOrbsArcadeRewardsCollectedModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(OrbsArcadeRewardsCollectedModal);
}
