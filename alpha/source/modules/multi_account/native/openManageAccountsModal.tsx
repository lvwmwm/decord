// Module ID: 18435
// Function ID: 18436
// Name: openManageAccountsModal
// Dependencies: [13963, 5258, 6744, 18436, 1994, 2]
// Exports: default

// Module 18435 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import Constants from "Constants" /* 13963 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(18436, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
