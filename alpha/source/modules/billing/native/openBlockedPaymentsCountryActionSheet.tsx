// Module ID: 11012
// Function ID: 11013
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5196, 11013, 2002, 2]
// Exports: default

// Module 11012 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(11013, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
