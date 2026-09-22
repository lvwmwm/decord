// Module ID: 16725
// Function ID: 16726
// Name: openManageAccountsModal
// Dependencies: [12672, 4724, 4960, 16726, 1980, 2]
// Exports: default

// Module 16725 (openManageAccountsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4960 */;
import Constants from "Constants" /* 12672 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16726, dependencyMap.paths), { initialRouteName }, SWITCH_ACCOUNTS_MODAL_KEY);
};
