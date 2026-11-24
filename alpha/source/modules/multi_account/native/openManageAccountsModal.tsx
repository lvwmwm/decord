// Module ID: 17995
// Function ID: 17996
// Name: openManageAccountsModal
// Dependencies: [13211, 5131, 6004, 17996, 2119, 2]
// Exports: default

// Module 17995 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6004 */;
import Constants from "Constants" /* 13211 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(17996, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
