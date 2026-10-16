// Module ID: 10740
// Function ID: 10741
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [5118, 10741, 2002, 2]
// Exports: default

// Module 10740 (openBlockedPaymentsCountryActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(10741, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
