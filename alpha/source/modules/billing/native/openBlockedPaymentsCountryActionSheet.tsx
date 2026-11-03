// Module ID: 11512
// Function ID: 11513
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5381, 11513, 2123, 2]
// Exports: default

// Module 11512 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(11513, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
