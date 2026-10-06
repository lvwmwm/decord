// Module ID: 10845
// Function ID: 10846
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4801, 10846, 1987, 2]
// Exports: default

// Module 10845 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(10846, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
