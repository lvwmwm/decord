// Module ID: 11546
// Function ID: 11547
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5406, 11547, 2118, 2]
// Exports: default

// Module 11546 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(11547, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
