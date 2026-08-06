// Module ID: 15386
// Function ID: 15387
// Name: openManageAccountsModal
// Dependencies: [11701, 4253, 4490, 15387, 1988, 2]
// Exports: default

// Module 15386 (openManageAccountsModal)
import { SWITCH_ACCOUNTS_MODAL_KEY } from "MAX_ACCOUNTS";

const result = require("module_4490").fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = importDefault(4253);
  obj.hideActionSheet();
  obj = { initialRouteName };
  importDefault(4490).pushLazy(require(1988) /* asyncRequireImpl */(15387, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};
