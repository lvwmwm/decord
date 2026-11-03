// Module ID: 18602
// Function ID: 18603
// Name: openManageAccountsModal
// Dependencies: [14109, 5381, 6864, 18603, 2123, 2]
// Exports: default

// Module 18602 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6864 */;
import Constants from "Constants" /* 14109 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(18603, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
