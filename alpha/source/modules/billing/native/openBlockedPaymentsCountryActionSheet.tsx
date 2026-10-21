// Module ID: 10986
// Function ID: 10987
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5192, 10987, 2002, 2]
// Exports: default

// Module 10986 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5192 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(10987, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
