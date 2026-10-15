// Module ID: 10728
// Function ID: 10729
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5115, 10729, 2000, 2]
// Exports: default

// Module 10728 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(10729, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
