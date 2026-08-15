// Module ID: 15634
// Function ID: 15635
// Name: openManageAccountsModal
// Dependencies: [11586, 4342, 5260, 15635, 2007, 2]
// Exports: default

// Module 15634 (openManageAccountsModal)
import { SWITCH_ACCOUNTS_MODAL_KEY } from "MAX_ACCOUNTS";

const result = require("module_5260").fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = importDefault(4342);
  obj.hideActionSheet();
  obj = { initialRouteName };
  importDefault(5260).pushLazy(require(2007) /* asyncRequireImpl */(15635, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};
