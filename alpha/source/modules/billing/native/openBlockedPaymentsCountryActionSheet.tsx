// Module ID: 11700
// Function ID: 11701
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4724, 11701, 1980, 2]
// Exports: default

// Module 11700 (openBlockedPaymentsCountryActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11701, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
