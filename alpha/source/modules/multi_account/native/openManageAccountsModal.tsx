// Module ID: 17412
// Function ID: 17413
// Name: openManageAccountsModal
// Dependencies: [12973, 5115, 6150, 17413, 2000, 2]
// Exports: default

// Module 17412 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6150 */;
import Constants from "Constants" /* 12973 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(17413, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
