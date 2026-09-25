// Module ID: 10964
// Function ID: 10965
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4796, 10965, 1980, 2]
// Exports: default

// Module 10964 (openBlockedPaymentsCountryActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10965, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
