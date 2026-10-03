// Module ID: 16311
// Function ID: 16312
// Name: openManageAccountsModal
// Dependencies: [12057, 4854, 5093, 16312, 1987, 2]
// Exports: default

// Module 16311 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import Constants from "Constants" /* 12057 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(16312, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
