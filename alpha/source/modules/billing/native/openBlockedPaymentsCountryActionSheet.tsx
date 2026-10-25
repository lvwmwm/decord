// Module ID: 11037
// Function ID: 11038
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5210, 11038, 2002, 2]
// Exports: default

// Module 11037 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(11038, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
