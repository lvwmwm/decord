// Module ID: 10745
// Function ID: 10746
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [4445, 10746, 2008, 2]
// Exports: default

// Module 10745 (openGiftingBadgeInfoActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const result = set.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(10746, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
