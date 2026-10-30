// Module ID: 11337
// Function ID: 11338
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5253, 11338, 1995, 2]
// Exports: default

// Module 11337 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(11338, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
