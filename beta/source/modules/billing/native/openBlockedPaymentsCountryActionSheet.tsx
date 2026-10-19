// Module ID: 10819
// Function ID: 10820
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5155, 10820, 2002, 2]
// Exports: default

// Module 10819 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(10820, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
