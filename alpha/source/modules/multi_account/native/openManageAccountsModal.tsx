// Module ID: 19019
// Function ID: 19020
// Name: openManageAccountsModal
// Dependencies: [14721, 5489, 6785, 19020, 2118, 2]
// Exports: default

// Module 19019 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import Constants from "Constants" /* 14721 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(19020, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
