// Module ID: 11776
// Function ID: 11777
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4794, 11777, 1980, 2]
// Exports: default

// Module 11776 (openBlockedPaymentsCountryActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11777, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
