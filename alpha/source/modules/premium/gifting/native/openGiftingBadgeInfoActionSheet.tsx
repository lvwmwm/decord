// Module ID: 11089
// Function ID: 11090
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [4794, 11090, 1980, 2]
// Exports: default

// Module 11089 (openGiftingBadgeInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11090, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
