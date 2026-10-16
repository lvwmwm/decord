// Module ID: 17456
// Function ID: 17457
// Name: openManageAccountsModal
// Dependencies: [13007, 5118, 6153, 17457, 2002, 2]
// Exports: default

// Module 17456 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6153 */;
import Constants from "Constants" /* 13007 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(17457, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
