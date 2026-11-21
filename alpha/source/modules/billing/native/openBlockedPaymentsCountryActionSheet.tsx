// Module ID: 9312
// Function ID: 9313
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5127, 9313, 2119, 2]
// Exports: default

// Module 9312 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9313, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
