// Module ID: 7767
// Function ID: 7768
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4346, 7768, 2008, 2]
// Exports: default

// Module 7767 (openBlockedPaymentsCountryActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4346 */;

const result = set.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(7768, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
