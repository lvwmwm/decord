// Module ID: 14989
// Function ID: 112830
// Name: openManageAccountsModal
// Dependencies: []
// Exports: default

// Module 14989 (openManageAccountsModal)
const SWITCH_ACCOUNTS_MODAL_KEY = require(dependencyMap[0]).SWITCH_ACCOUNTS_MODAL_KEY;
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  let obj = importDefault(dependencyMap[1]);
  obj.hideActionSheet();
  obj = { initialRouteName };
  importDefault(dependencyMap[2]).pushLazy(require(dependencyMap[4])(dependencyMap[3], dependencyMap.paths), obj, SWITCH_ACCOUNTS_MODAL_KEY);
};
