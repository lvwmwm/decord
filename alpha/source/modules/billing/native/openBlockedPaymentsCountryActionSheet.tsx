// Module ID: 10495
// Function ID: 10496
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5056, 10496, 2000, 2]
// Exports: default

// Module 10495 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(10496, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
