// Module ID: 11182
// Function ID: 11183
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4830, 11183, 1981, 2]
// Exports: default

// Module 11182 (openBlockedPaymentsCountryActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11183, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
