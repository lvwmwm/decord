// Module ID: 15410
// Function ID: 15411
// Name: openManageAccountsModal
// Dependencies: [11716, 4270, 4507, 15411, 1988, 2]
// Exports: default

// Module 15410 (openManageAccountsModal)
import { SWITCH_ACCOUNTS_MODAL_KEY } from "MAX_ACCOUNTS";

const result = require("module_4507").fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = importDefault(4270);
  obj.hideActionSheet();
  obj = { initialRouteName };
  importDefault(4507).pushLazy(require(1988) /* asyncRequireImpl */(15411, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};
