// Module ID: 17954
// Function ID: 17955
// Name: openManageAccountsModal
// Dependencies: [13286, 5127, 6429, 17955, 2119, 2]
// Exports: default

// Module 17954 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import Constants from "Constants" /* 13286 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(17955, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
