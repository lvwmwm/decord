// Module ID: 11186
// Function ID: 11187
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4809, 11187, 1981, 2]
// Exports: default

// Module 11186 (openBlockedPaymentsCountryActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4809 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11187, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
