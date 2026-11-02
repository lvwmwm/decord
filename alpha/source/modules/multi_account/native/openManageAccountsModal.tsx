// Module ID: 18448
// Function ID: 18449
// Name: openManageAccountsModal
// Dependencies: [13978, 5258, 6744, 18449, 1994, 2]
// Exports: default

// Module 18448 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import Constants from "Constants" /* 13978 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(18449, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
