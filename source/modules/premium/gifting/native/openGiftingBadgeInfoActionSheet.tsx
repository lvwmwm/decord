// Module ID: 10676
// Function ID: 10677
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [4448, 10677, 2008, 2]
// Exports: default

// Module 10676 (openGiftingBadgeInfoActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4448 */;

const result = set.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(10677, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
