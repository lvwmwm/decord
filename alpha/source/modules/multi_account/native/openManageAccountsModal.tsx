// Module ID: 17515
// Function ID: 17516
// Name: openManageAccountsModal
// Dependencies: [13072, 5155, 6190, 17516, 2002, 2]
// Exports: default

// Module 17515 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6190 */;
import Constants from "Constants" /* 13072 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(17516, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
