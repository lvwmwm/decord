// Module ID: 10842
// Function ID: 10843
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5171, 10843, 2002, 2]
// Exports: default

// Module 10842 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(10843, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
