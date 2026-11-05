// Module ID: 18747
// Function ID: 18748
// Name: openManageAccountsModal
// Dependencies: [14209, 5384, 6882, 18748, 2123, 2]
// Exports: default

// Module 18747 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6882 */;
import Constants from "Constants" /* 14209 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(18748, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
