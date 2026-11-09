// Module ID: 18800
// Function ID: 18801
// Name: openManageAccountsModal
// Dependencies: [14212, 5374, 6799, 18801, 2118, 2]
// Exports: default

// Module 18800 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import Constants from "Constants" /* 14212 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(18801, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
