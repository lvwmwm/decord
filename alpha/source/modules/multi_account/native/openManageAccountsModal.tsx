// Module ID: 16810
// Function ID: 16811
// Name: openManageAccountsModal
// Dependencies: [12126, 5056, 5934, 16811, 2000, 2]
// Exports: default

// Module 16810 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import Constants from "Constants" /* 12126 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(16811, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
