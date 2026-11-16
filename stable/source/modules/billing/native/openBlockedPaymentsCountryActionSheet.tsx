// Module ID: 11547
// Function ID: 11548
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5406, 11548, 2118, 2]
// Exports: default

// Module 11547 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(11548, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
