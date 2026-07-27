// Module ID: 15175
// Function ID: 115496
// Name: openManageAccountsModal
// Dependencies: [11447, 4099, 4338, 15176, 1935, 2]
// Exports: default

// Module 15175 (openManageAccountsModal)
import { SWITCH_ACCOUNTS_MODAL_KEY } from "MAX_ACCOUNTS";

const result = require("module_4338").fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = importDefault(4099);
  obj.hideActionSheet();
  obj = { initialRouteName };
  importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(15176, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};
