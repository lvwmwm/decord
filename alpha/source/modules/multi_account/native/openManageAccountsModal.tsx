// Module ID: 18717
// Function ID: 18718
// Name: openManageAccountsModal
// Dependencies: [14196, 5382, 6879, 18718, 2123, 2]
// Exports: default

// Module 18717 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import Constants from "Constants" /* 14196 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(18718, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
