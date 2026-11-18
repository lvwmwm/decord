// Module ID: 18008
// Function ID: 18009
// Name: openManageAccountsModal
// Dependencies: [13212, 5037, 6337, 18009, 2121, 2]
// Exports: default

// Module 18008 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6337 */;
import Constants from "Constants" /* 13212 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(18009, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
