// Module ID: 15367
// Function ID: 15368
// Name: openManageAccountsModal
// Dependencies: [11695, 4253, 4490, 15368, 1959, 2]
// Exports: default

// Module 15367 (openManageAccountsModal)
import { SWITCH_ACCOUNTS_MODAL_KEY } from "MAX_ACCOUNTS";

const result = require("module_4490").fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = importDefault(4253);
  obj.hideActionSheet();
  obj = { initialRouteName };
  importDefault(4490).pushLazy(require(1959) /* asyncRequireImpl */(15368, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};
