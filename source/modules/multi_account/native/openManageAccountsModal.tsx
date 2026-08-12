// Module ID: 15566
// Function ID: 15567
// Name: openManageAccountsModal
// Dependencies: [11843, 4312, 4549, 15567, 2007, 2]
// Exports: default

// Module 15566 (openManageAccountsModal)
import { SWITCH_ACCOUNTS_MODAL_KEY } from "MAX_ACCOUNTS";

const result = require("module_4549").fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = importDefault(4312);
  obj.hideActionSheet();
  obj = { initialRouteName };
  importDefault(4549).pushLazy(require(2007) /* asyncRequireImpl */(15567, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};
