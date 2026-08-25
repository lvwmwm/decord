// Module ID: 7588
// Function ID: 7589
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4347, 7589, 2009, 2]
// Exports: default

// Module 7588 (openBlockedPaymentsCountryActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4347 */;

const result = set.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(7589, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
