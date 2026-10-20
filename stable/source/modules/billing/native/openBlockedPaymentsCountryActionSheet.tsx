// Module ID: 10496
// Function ID: 10497
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5056, 10497, 2000, 2]
// Exports: default

// Module 10496 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(10497, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
