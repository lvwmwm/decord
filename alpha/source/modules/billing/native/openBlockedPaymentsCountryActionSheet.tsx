// Module ID: 9788
// Function ID: 9789
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5552, 9789, 2121, 2]
// Exports: default

// Module 9788 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9789, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
