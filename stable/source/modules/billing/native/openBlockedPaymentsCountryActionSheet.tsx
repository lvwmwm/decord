// Module ID: 11570
// Function ID: 11571
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4603, 11571, 1896, 2]
// Exports: default

// Module 11570 (openBlockedPaymentsCountryActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11571, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
