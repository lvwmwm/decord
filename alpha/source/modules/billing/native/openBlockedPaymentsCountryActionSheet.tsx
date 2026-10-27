// Module ID: 11040
// Function ID: 11041
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5210, 11041, 2002, 2]
// Exports: default

// Module 11040 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(11041, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
