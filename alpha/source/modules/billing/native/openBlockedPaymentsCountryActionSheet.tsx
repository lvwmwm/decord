// Module ID: 9163
// Function ID: 9164
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5131, 9164, 2119, 2]
// Exports: default

// Module 9163 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9164, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
