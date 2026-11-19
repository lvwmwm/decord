// Module ID: 18001
// Function ID: 18002
// Name: openManageAccountsModal
// Dependencies: [13194, 5006, 6308, 18002, 2121, 2]
// Exports: default

// Module 18001 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import Constants from "Constants" /* 13194 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(18002, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
