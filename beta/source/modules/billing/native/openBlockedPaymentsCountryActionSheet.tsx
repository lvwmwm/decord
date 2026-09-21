// Module ID: 11565
// Function ID: 11566
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4725, 11566, 1984, 2]
// Exports: default

// Module 11565 (openBlockedPaymentsCountryActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11566, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
