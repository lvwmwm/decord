// Module ID: 17784
// Function ID: 17785
// Name: openManageAccountsModal
// Dependencies: [13273, 5208, 6670, 17785, 2002, 2]
// Exports: default

// Module 17784 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6670 */;
import Constants from "Constants" /* 13273 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(17785, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
