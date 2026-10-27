// Module ID: 17862
// Function ID: 17863
// Name: openManageAccountsModal
// Dependencies: [13331, 5211, 6673, 17863, 1999, 2]
// Exports: default

// Module 17862 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
import Constants from "Constants" /* 13331 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(17863, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
