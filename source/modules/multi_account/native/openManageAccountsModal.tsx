// Module ID: 15510
// Function ID: 15511
// Name: openManageAccountsModal
// Dependencies: [11786, 4271, 4509, 15511, 2007, 2]
// Exports: default

// Module 15510 (openManageAccountsModal)
import { SWITCH_ACCOUNTS_MODAL_KEY } from "MAX_ACCOUNTS";

const result = require("module_4509").fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = importDefault(4271);
  obj.hideActionSheet();
  obj = { initialRouteName };
  importDefault(4509).pushLazy(require(2007) /* asyncRequireImpl */(15511, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};
