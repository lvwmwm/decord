// Module ID: 11078
// Function ID: 11079
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5246, 11079, 1999, 2]
// Exports: default

// Module 11078 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(11079, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
