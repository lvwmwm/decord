// Module ID: 11562
// Function ID: 11563
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5382, 11563, 2123, 2]
// Exports: default

// Module 11562 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(11563, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
