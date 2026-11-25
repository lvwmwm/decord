// Module ID: 18107
// Function ID: 18108
// Name: openManageAccountsModal
// Dependencies: [13334, 5226, 6099, 18108, 2119, 2]
// Exports: default

// Module 18107 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import Constants from "Constants" /* 13334 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(18108, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
