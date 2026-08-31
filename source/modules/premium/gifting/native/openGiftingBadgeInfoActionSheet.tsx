// Module ID: 10482
// Function ID: 10483
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [4415, 10483, 2009, 2]
// Exports: default

// Module 10482 (openGiftingBadgeInfoActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4415 */;

const result = set.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(10483, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
