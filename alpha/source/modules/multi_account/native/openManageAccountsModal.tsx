// Module ID: 19197
// Function ID: 19198
// Name: openManageAccountsModal
// Dependencies: [13910, 5546, 6833, 19198, 2121, 2]
// Exports: default

// Module 19197 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6833 */;
import Constants from "Constants" /* 13910 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(19198, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
