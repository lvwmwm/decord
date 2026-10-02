// Module ID: 16012
// Function ID: 16013
// Name: openManageAccountsModal
// Dependencies: [11801, 4801, 5040, 16013, 1987, 2]
// Exports: default

// Module 16012 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import Constants from "Constants" /* 11801 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(16013, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
