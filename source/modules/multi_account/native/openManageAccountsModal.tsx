// Module ID: 15215
// Function ID: 115655
// Name: openManageAccountsModal
// Dependencies: [11485, 4133, 4372, 15216, 1935, 2]
// Exports: default

// Module 15215 (openManageAccountsModal)
import { SWITCH_ACCOUNTS_MODAL_KEY } from "MAX_ACCOUNTS";

const result = require("module_4372").fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = importDefault(4133);
  obj.hideActionSheet();
  obj = { initialRouteName };
  importDefault(4372).pushLazy(require(1935) /* maybeLoadBundle */(15216, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};
