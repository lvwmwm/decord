// Module ID: 11601
// Function ID: 11602
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4757, 11602, 1984, 2]
// Exports: default

// Module 11601 (openBlockedPaymentsCountryActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11602, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
