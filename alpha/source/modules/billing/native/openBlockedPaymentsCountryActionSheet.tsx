// Module ID: 9216
// Function ID: 9217
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5037, 9217, 2121, 2]
// Exports: default

// Module 9216 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9217, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
