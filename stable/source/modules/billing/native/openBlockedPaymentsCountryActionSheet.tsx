// Module ID: 11092
// Function ID: 11093
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4854, 11093, 1987, 2]
// Exports: default

// Module 11092 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(11093, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
