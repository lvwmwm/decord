// Module ID: 17172
// Function ID: 17173
// Name: openManageAccountsModal
// Dependencies: [12680, 5060, 5939, 17173, 2000, 2]
// Exports: default

// Module 17172 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5060 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5939 */;
import Constants from "Constants" /* 12680 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(17173, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
