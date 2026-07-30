// Module ID: 15242
// Function ID: 15243
// Name: openManageAccountsModal
// Dependencies: [11505, 4157, 4395, 15243, 1959, 2]
// Exports: default

// Module 15242 (openManageAccountsModal)
import { SWITCH_ACCOUNTS_MODAL_KEY } from "MAX_ACCOUNTS";

const result = require("module_4395").fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = importDefault(4157);
  obj.hideActionSheet();
  obj = { initialRouteName };
  importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(15243, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};
