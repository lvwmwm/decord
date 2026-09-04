// Module ID: 11365
// Function ID: 11366
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4448, 11366, 2008, 2]
// Exports: default

// Module 11365 (openBlockedPaymentsCountryActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4448 */;

const result = set.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11366, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
