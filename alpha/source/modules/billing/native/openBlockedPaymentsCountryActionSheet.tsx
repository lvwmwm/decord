// Module ID: 10831
// Function ID: 10832
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5171, 10832, 2002, 2]
// Exports: default

// Module 10831 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(10832, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
