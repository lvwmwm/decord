// Module ID: 19154
// Function ID: 19155
// Name: openManageAccountsModal
// Dependencies: [14832, 5542, 6838, 19155, 2121, 2]
// Exports: default

// Module 19154 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6838 */;
import Constants from "Constants" /* 14832 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(19155, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
