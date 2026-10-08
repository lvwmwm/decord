// Module ID: 10470
// Function ID: 10471
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5054, 10471, 1999, 2]
// Exports: default

// Module 10470 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(10471, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
