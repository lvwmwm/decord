// Module ID: 10803
// Function ID: 10804
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5155, 10804, 2002, 2]
// Exports: default

// Module 10803 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(10804, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
