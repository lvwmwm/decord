// Module ID: 15105
// Function ID: 114998
// Name: openManageAccountsModal
// Dependencies: [11453, 4098, 4337, 15106, 1934, 2]
// Exports: default

// Module 15105 (openManageAccountsModal)
import { SWITCH_ACCOUNTS_MODAL_KEY } from "MAX_ACCOUNTS";

const result = require("module_4337").fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = importDefault(4098);
  obj.hideActionSheet();
  obj = { initialRouteName };
  importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(15106, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};
