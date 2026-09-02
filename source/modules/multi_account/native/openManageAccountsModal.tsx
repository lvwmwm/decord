// Module ID: 16196
// Function ID: 16197
// Name: openManageAccountsModal
// Dependencies: [12207, 4445, 4723, 16197, 2008, 2]
// Exports: default

// Module 16196 (openManageAccountsModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;
import _modDef4723 from "module_4723" /* 4723 */;
import MAX_ACCOUNTS from "MAX_ACCOUNTS" /* 12207 */;

const SWITCH_ACCOUNTS_MODAL_KEY = MAX_ACCOUNTS.SWITCH_ACCOUNTS_MODAL_KEY;
const result = set.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj.hideActionSheet();
  obj = { initialRouteName };
  _modDef4723.pushLazy(asyncRequireImpl(16197, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};
