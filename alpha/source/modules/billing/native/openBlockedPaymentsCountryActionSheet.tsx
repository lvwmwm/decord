// Module ID: 10460
// Function ID: 10461
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5055, 10461, 2000, 2]
// Exports: default

// Module 10460 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(10461, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
