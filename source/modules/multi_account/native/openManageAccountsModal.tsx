// Module ID: 15248
// Function ID: 15249
// Name: openManageAccountsModal
// Dependencies: [11509, 4157, 4395, 15249, 1959, 2]
// Exports: default

// Module 15248 (openManageAccountsModal)
import { SWITCH_ACCOUNTS_MODAL_KEY } from "MAX_ACCOUNTS";

const result = require("module_4395").fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = importDefault(4157);
  obj.hideActionSheet();
  obj = { initialRouteName };
  importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(15249, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};
