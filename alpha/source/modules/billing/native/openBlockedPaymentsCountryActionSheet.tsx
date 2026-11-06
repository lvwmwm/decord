// Module ID: 11533
// Function ID: 11534
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5404, 11534, 2118, 2]
// Exports: default

// Module 11533 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(11534, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
