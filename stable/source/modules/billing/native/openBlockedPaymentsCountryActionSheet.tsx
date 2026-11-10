// Module ID: 11374
// Function ID: 11375
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5258, 11375, 1994, 2]
// Exports: default

// Module 11374 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(11375, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
