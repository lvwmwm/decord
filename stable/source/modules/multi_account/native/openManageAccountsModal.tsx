// Module ID: 18835
// Function ID: 18836
// Name: openManageAccountsModal
// Dependencies: [14244, 5406, 6831, 18836, 2118, 2]
// Exports: default

// Module 18835 (openManageAccountsModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6831 */;
import Constants from "Constants" /* 14244 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialRouteName };
  obj2.pushLazy(asyncRequire(18836, dependencyMap.paths), obj3, SWITCH_ACCOUNTS_MODAL_KEY);
};
