// Module ID: 11043
// Function ID: 11044
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5211, 11044, 1999, 2]
// Exports: default

// Module 11043 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(11044, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
