// Module ID: 15584
// Function ID: 15585
// Name: openManageAccountsModal
// Dependencies: [11858, 4310, 4572, 15585, 2007, 2]
// Exports: default

// Module 15584 (openManageAccountsModal)
import { SWITCH_ACCOUNTS_MODAL_KEY } from "MAX_ACCOUNTS";

const result = require("module_4572").fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = importDefault(4310);
  obj.hideActionSheet();
  obj = { initialRouteName };
  importDefault(4572).pushLazy(require(2007) /* asyncRequireImpl */(15585, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};
