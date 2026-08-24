// Module ID: 10339
// Function ID: 10340
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [4346, 10340, 2008, 2]
// Exports: default

// Module 10339 (openGiftingBadgeInfoActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4346 */;

const result = set.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(10340, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
