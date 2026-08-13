// Module ID: 15575
// Function ID: 15576
// Name: openManageAccountsModal
// Dependencies: [11841, 4310, 4550, 15576, 2007, 2]
// Exports: default

// Module 15575 (openManageAccountsModal)
import { SWITCH_ACCOUNTS_MODAL_KEY } from "MAX_ACCOUNTS";

const result = require("module_4550").fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = importDefault(4310);
  obj.hideActionSheet();
  obj = { initialRouteName };
  importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(15576, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};
