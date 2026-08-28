// Module ID: 10458
// Function ID: 10459
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [4413, 10459, 2010, 2]
// Exports: default

// Module 10458 (openGiftingBadgeInfoActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4413 */;

const result = set.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(10459, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
