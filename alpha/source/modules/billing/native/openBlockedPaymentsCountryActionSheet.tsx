// Module ID: 11563
// Function ID: 11564
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5382, 11564, 2123, 2]
// Exports: default

// Module 11563 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(11564, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
