// Module ID: 16615
// Function ID: 16616
// Name: openManageAccountsModal
// Dependencies: [12145, 5054, 5940, 16616, 1999, 2]
// Exports: default

// Module 16615 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import Constants from "Constants" /* 12145 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(16616, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
