// Module ID: 9721
// Function ID: 9722
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5489, 9722, 2118, 2]
// Exports: default

// Module 9721 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9722, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
