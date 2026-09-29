// Module ID: 10379
// Function ID: 10380
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [4800, 10380, 1981, 2]
// Exports: default

// Module 10379 (openGiftingBadgeInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10380, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
