// Module ID: 17138
// Function ID: 17139
// Name: openManageAccountsModal
// Dependencies: [12644, 5056, 5934, 17139, 2000, 2]
// Exports: default

// Module 17138 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import Constants from "Constants" /* 12644 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(17139, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
