// Module ID: 15348
// Function ID: 15349
// Name: openManageAccountsModal
// Dependencies: [11667, 4223, 4460, 15349, 1959, 2]
// Exports: default

// Module 15348 (openManageAccountsModal)
import { SWITCH_ACCOUNTS_MODAL_KEY } from "MAX_ACCOUNTS";

const result = require("module_4460").fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = importDefault(4223);
  obj.hideActionSheet();
  obj = { initialRouteName };
  importDefault(4460).pushLazy(require(1959) /* asyncRequireImpl */(15349, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};
