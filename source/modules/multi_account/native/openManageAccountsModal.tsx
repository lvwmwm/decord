// Module ID: 15162
// Function ID: 115447
// Name: openManageAccountsModal
// Dependencies: [11446, 4099, 4338, 15163, 1935, 2]
// Exports: default

// Module 15162 (openManageAccountsModal)
import { SWITCH_ACCOUNTS_MODAL_KEY } from "MAX_ACCOUNTS";

const result = require("module_4338").fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = importDefault(4099);
  obj.hideActionSheet();
  obj = { initialRouteName };
  importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(15163, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};
