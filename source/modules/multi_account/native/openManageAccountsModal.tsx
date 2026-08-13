// Module ID: 15566
// Function ID: 15567
// Name: openManageAccountsModal
// Dependencies: [11842, 4310, 4550, 15567, 2007, 2]
// Exports: default

// Module 15566 (openManageAccountsModal)
import { SWITCH_ACCOUNTS_MODAL_KEY } from "MAX_ACCOUNTS";

const result = require("module_4550").fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = importDefault(4310);
  obj.hideActionSheet();
  obj = { initialRouteName };
  importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(15567, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};
