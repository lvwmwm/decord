// Module ID: 15485
// Function ID: 15486
// Name: openManageAccountsModal
// Dependencies: [11782, 4271, 4509, 15486, 1988, 2]
// Exports: default

// Module 15485 (openManageAccountsModal)
import { SWITCH_ACCOUNTS_MODAL_KEY } from "MAX_ACCOUNTS";

const result = require("module_4509").fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = importDefault(4271);
  obj.hideActionSheet();
  obj = { initialRouteName };
  importDefault(4509).pushLazy(require(1988) /* asyncRequireImpl */(15486, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};
