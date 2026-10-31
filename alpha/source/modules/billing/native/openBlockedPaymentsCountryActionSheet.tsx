// Module ID: 11373
// Function ID: 11374
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5258, 11374, 1994, 2]
// Exports: default

// Module 11373 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(11374, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
