// Module ID: 11035
// Function ID: 11036
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5208, 11036, 2002, 2]
// Exports: default

// Module 11035 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(11036, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
