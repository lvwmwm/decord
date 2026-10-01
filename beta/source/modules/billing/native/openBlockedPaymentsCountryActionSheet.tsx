// Module ID: 10977
// Function ID: 10978
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4800, 10978, 1981, 2]
// Exports: default

// Module 10977 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(10978, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
