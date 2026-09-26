// Module ID: 16717
// Function ID: 16718
// Name: openManageAccountsModal
// Dependencies: [12697, 4755, 4991, 16718, 1980, 2]
// Exports: default

// Module 16717 (openManageAccountsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
import Constants from "Constants" /* 12697 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16718, dependencyMap.paths), { initialRouteName }, SWITCH_ACCOUNTS_MODAL_KEY);
};
