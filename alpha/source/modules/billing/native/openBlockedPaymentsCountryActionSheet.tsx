// Module ID: 11132
// Function ID: 11133
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5247, 11133, 2000, 2]
// Exports: default

// Module 11132 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(11133, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
