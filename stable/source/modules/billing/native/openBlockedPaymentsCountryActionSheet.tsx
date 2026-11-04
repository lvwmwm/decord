// Module ID: 11071
// Function ID: 11072
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5242, 11072, 2002, 2]
// Exports: default

// Module 11071 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5242 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(11072, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
