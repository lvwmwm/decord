// Module ID: 11725
// Function ID: 11726
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4755, 11726, 1980, 2]
// Exports: default

// Module 11725 (openBlockedPaymentsCountryActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11726, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
