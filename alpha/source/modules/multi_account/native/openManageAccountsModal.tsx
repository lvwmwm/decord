// Module ID: 18166
// Function ID: 18167
// Name: openManageAccountsModal
// Dependencies: [13386, 5257, 6130, 18167, 2120, 2]
// Exports: default

// Module 18166 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import Constants from "Constants" /* 13386 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(18167, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
