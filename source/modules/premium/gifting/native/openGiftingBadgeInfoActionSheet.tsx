// Module ID: 10520
// Function ID: 10521
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [4445, 10521, 2009, 2]
// Exports: default

// Module 10520 (openGiftingBadgeInfoActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const result = set.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(10521, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
