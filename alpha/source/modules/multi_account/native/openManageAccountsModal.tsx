// Module ID: 16740
// Function ID: 16741
// Name: openManageAccountsModal
// Dependencies: [12082, 5055, 5941, 16741, 2000, 2]
// Exports: default

// Module 16740 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import Constants from "Constants" /* 12082 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(16741, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
