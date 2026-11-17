// Module ID: 9801
// Function ID: 9802
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5546, 9802, 2121, 2]
// Exports: default

// Module 9801 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9802, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
