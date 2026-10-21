// Module ID: 17648
// Function ID: 17649
// Name: openManageAccountsModal
// Dependencies: [13198, 5192, 6651, 17649, 2002, 2]
// Exports: default

// Module 17648 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5192 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6651 */;
import Constants from "Constants" /* 13198 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(17649, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
