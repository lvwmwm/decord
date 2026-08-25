// Module ID: 10190
// Function ID: 10191
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [4347, 10191, 2009, 2]
// Exports: default

// Module 10190 (openGiftingBadgeInfoActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4347 */;

const result = set.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(10191, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
