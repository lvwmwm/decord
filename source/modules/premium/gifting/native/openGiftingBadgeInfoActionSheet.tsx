// Module ID: 10442
// Function ID: 10443
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [4412, 10443, 2009, 2]
// Exports: default

// Module 10442 (openGiftingBadgeInfoActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4412 */;

const result = set.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(10443, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
