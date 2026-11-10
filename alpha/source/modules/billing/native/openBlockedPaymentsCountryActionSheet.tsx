// Module ID: 11524
// Function ID: 11525
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5376, 11525, 2118, 2]
// Exports: default

// Module 11524 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(11525, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
