// Module ID: 18392
// Function ID: 18393
// Name: openManageAccountsModal
// Dependencies: [13928, 5253, 6738, 18393, 1995, 2]
// Exports: default

// Module 18392 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import Constants from "Constants" /* 13928 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(18393, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
