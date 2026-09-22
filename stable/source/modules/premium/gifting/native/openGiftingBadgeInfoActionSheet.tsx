// Module ID: 10879
// Function ID: 10880
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [4603, 10880, 1896, 2]
// Exports: default

// Module 10879 (openGiftingBadgeInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10880, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
