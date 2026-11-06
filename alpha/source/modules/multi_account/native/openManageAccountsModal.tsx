// Module ID: 18737
// Function ID: 18738
// Name: openManageAccountsModal
// Dependencies: [14186, 5404, 6824, 18738, 2118, 2]
// Exports: default

// Module 18737 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6824 */;
import Constants from "Constants" /* 14186 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(18738, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
