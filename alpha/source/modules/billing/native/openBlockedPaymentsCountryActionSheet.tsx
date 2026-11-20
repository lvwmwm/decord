// Module ID: 9192
// Function ID: 9193
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5008, 9193, 2119, 2]
// Exports: default

// Module 9192 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9193, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
