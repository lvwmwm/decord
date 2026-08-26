// Module ID: 15813
// Function ID: 15814
// Name: openManageAccountsModal
// Dependencies: [12051, 4411, 4675, 15814, 2009, 2]
// Exports: default

// Module 15813 (openManageAccountsModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4411 */;
import _modDef4675 from "module_4675" /* 4675 */;
import MAX_ACCOUNTS from "MAX_ACCOUNTS" /* 12051 */;

const SWITCH_ACCOUNTS_MODAL_KEY = MAX_ACCOUNTS.SWITCH_ACCOUNTS_MODAL_KEY;
const result = set.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj.hideActionSheet();
  obj = { initialRouteName };
  _modDef4675.pushLazy(asyncRequireImpl(15814, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};
