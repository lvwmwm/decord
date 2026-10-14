// Module ID: 10505
// Function ID: 10506
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5060, 10506, 2000, 2]
// Exports: default

// Module 10505 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5060 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(10506, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
