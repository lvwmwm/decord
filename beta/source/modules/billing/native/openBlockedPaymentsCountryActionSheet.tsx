// Module ID: 11515
// Function ID: 11516
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5374, 11516, 2118, 2]
// Exports: default

// Module 11515 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(11516, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
