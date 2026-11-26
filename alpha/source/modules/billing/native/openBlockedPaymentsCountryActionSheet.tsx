// Module ID: 9304
// Function ID: 9305
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5257, 9305, 2120, 2]
// Exports: default

// Module 9304 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9305, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
