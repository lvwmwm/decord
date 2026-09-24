// Module ID: 11782
// Function ID: 11783
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4796, 11783, 1980, 2]
// Exports: default

// Module 11782 (openBlockedPaymentsCountryActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11783, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
