// Module ID: 9262
// Function ID: 9263
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5226, 9263, 2119, 2]
// Exports: default

// Module 9262 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9263, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
