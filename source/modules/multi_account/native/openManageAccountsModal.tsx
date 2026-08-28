// Module ID: 15896
// Function ID: 15897
// Name: openManageAccountsModal
// Dependencies: [11916, 4413, 4689, 15897, 2010, 2]
// Exports: default

// Module 15896 (openManageAccountsModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4413 */;
import _modDef4689 from "module_4689" /* 4689 */;
import MAX_ACCOUNTS from "MAX_ACCOUNTS" /* 11916 */;

const SWITCH_ACCOUNTS_MODAL_KEY = MAX_ACCOUNTS.SWITCH_ACCOUNTS_MODAL_KEY;
const result = set.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj.hideActionSheet();
  obj = { initialRouteName };
  _modDef4689.pushLazy(asyncRequireImpl(15897, dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};
